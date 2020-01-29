import React from 'react';
import Image from 'react-native-image-progress';
import { ActivityIndicator } from 'react-native';
import config from '../../config';

const ImageWithLoader = (props) => {
    const renderLoader = () => <ActivityIndicator size="large" color={config.LoaderColor}/>;
    return (
        <Image
            source={props.source}
            indicator={renderLoader}
            style={props.style}/>
    );
};

export default ImageWithLoader;
