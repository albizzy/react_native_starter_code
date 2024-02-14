import { Pressable, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function IconButton({ icon, label, onPress }) {
    // classes
    const iconButtonClasses = "items-center justify-center";
    const iconLabelClasses = "text-white mt-[12px]";

    return (
        <Pressable className={`${ iconButtonClasses }`} onPress={ onPress }>
            <MaterialIcons name={ icon } size={24} color="white" />
            <Text className={`${ iconLabelClasses }`}>{ label }</Text>
        </Pressable>
    )
}