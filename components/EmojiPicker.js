import { Modal, View, Text, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({ isVisible, children, onClose }) {
    // classes
    const modalContentClasses = "w-full h-[25%] bg-slate-950 rounded-t-[18px] absolute bottom-[0]";
    const titleContainerClasses = "h-[20%] bg-[#464C55] rounded-t-[10px] px-[20px] flex flex-row items-center justify-between";
    const titleClasses = "text-white text-[16px]";
    // const pickerContainerClasses = "flex flex-row items-center px-[50px] py-[20px]"

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={ isVisible }
        >
            <View className={`${modalContentClasses}`}>
                <View className={`${titleContainerClasses}`}>
                    <Text className={`${titleClasses}`}>Choose a sticker</Text>
                    <Pressable onPress={ onClose }>
                        <MaterialIcons name="close" color="#fff" size={22} />
                    </Pressable>
                </View>
                { children }
            </View>
        </Modal>
    )
};