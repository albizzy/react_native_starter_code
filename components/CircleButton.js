import { View, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CircleButton({ onPress }) {
    // classes
    const buttonContainerClasses = "w-[84px] h-[84px] mx-[60px] border-[4px] border-green-400 rounded-[42px] p-[3px]";
    const circeButtonClasses = "flex-1 items-center justify-center rounded-[42px] bg-white";
    return (
        <View className={`${buttonContainerClasses}`}>
            <Pressable className={`${circeButtonClasses}`} onPress={ onPress }>
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    )
};