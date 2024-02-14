import { useState } from  'react';
import { FlatList, Image, Platform, Pressable, StyleSheet } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
    // list of emojis
    const [emoji] = useState([
        require('../assets/images/emoji1.png'),
        require('../assets/images/emoji2.png'),
        require('../assets/images/emoji3.png'),
        require('../assets/images/emoji4.png'),
        require('../assets/images/emoji5.png'),
    ])

    // classes
    const imageClasses = "w-[100px] h-[100px]"
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web' }
            data= { emoji }
            contentContainerStyle={styles.listContainer}
            renderItem={( { item, index }) => (
                <Pressable
                    onPress={() => {
                        onSelect(item)
                        onCloseModal();
                    }}
                >
                    <Image source={item} key={index} className={`${imageClasses}`}></Image>
                </Pressable>
            )}

        ></FlatList>
    )
}

const styles = StyleSheet.create({
    listContainer: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });