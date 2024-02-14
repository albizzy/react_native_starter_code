import { View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
    const defaultButtonContainerClasses = "w-[320px] h-[68px] flex items-center p-[3px]";
    const defaultButtonClasses = "w-full h-full rounded-[10px] flex flex-row space-x-1 items-center justify-center";

    // button for primary theme
    if (theme === "primary") {
        return (
            <View className={`${defaultButtonContainerClasses} border-4 border-green-400 rounded-[18px]`}>
                <Pressable 
                    className={`${defaultButtonClasses} bg-white`}
                    onPress={ onPress }
                >
                    <FontAwesome
                        name='picture-o'
                        size={18}
                        color="#25292e"
                        className="mr-[8px]"
                    />
                    <Text className="text-[#25292e] text-[16px]">{ label }</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View className={`${defaultButtonContainerClasses}`}>
            <Pressable className={`${defaultButtonClasses}`} onPress={ onPress }>
                <Text className="text-white text-[16px]">{ label }</Text>
            </Pressable>
        </View>
    )
};