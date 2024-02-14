import { Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    // conditionally set source according to image selectedImage
    const imageSource = selectedImage ? { uri: selectedImage} : placeholderImageSource;
    return (
        <Image source={ imageSource } className="w-[320] h-[400] rounded-[18px]"/>
    )
}