import { useState, useRef }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

// components
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

// image
const placeholderImage = require('./assets/background-image.png');

export default function App() {
  // holds image uri state
  const [selectedImage, setSelectedImage] = useState(null);
  // visible after selecting image
  const [showAppOptions, setShowAppOptions] = useState(false);
  // modal state
  const [isModalVisible, setIsModalVisible] = useState(false);
  // emoji state
  const [pickedEmoji, setPickedEmoji] = useState(null);

  // media access permission
  const [status, requestPermission] = MediaLibrary.usePermissions();

  // request media access permission
  if ( status === null ) {
    requestPermission();
  };

  const imageRef = useRef();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1.
    });

    if (!result.canceled) {
      // save the selcted image to selectedImage variable
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image")
    }
  }

  //  reset
  const onReset = () => {
    setShowAppOptions(false);
    setPickedEmoji(null);
    setSelectedImage(null);
  }

  // add sticker
  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onImageSaveAsync = async() => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 400,
        quality: 1,
      });

      // save the picture to gallery
      await MediaLibrary.saveToLibraryAsync(localUri);

      if(localUri) {
        alert("Image Saved!")
      }
      
    } catch (e) {
      console.log(e)
    }
  }

  // modal on close
  const onModalClose = () => {
    setIsModalVisible(false);
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView className="flex-1 flex-col items-center justify-center bg-slate-950">
        <View className="image-container flex-1 pt-[58px]">
          <View ref={ imageRef } collapsable={ false }>
            <ImageViewer placeholderImageSource={ placeholderImage } selectedImage={ selectedImage } />
            { pickedEmoji && <EmojiSticker imageSize={40} stickerSource={ pickedEmoji } /> }
          </View>
        </View>

        { showAppOptions ? (
          <View className="absolute bottom-[80px]">
            <View className="flex flex-row items-center justify-center w-full">
              <IconButton icon="refresh" label="Reset" onPress = { onReset } />
              <CircleButton onPress = { onAddSticker } />
              <IconButton icon="save-alt" label="Save" onPress={ onImageSaveAsync } />
            </View>
          </View>
        ) : (
            <View className="grow-1 shrink-1 basis-3/12 items-center">
            <Button 
              theme="primary" 
              label={"Choose a photo"}
              onPress={ pickImageAsync } 
            />
            <Button label={"Use this photo"} oonPress={ () => setShowAppOptions(true) }/>
          </View>
        )}

        {/* modal */}
        <EmojiPicker isVisible={ isModalVisible } onClose={ onModalClose }>
          <EmojiList onSelect={ setPickedEmoji } onCloseModal={ onModalClose }/>
        </EmojiPicker>

        <StatusBar style="light" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
