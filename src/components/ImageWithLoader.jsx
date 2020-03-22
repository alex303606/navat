import React from 'react';
import Image from 'react-native-image-progress';
import ReactNative, { ActivityIndicator } from 'react-native';
import config, { countries } from '../../config';
import defaultImage from '../assets/images/defaultImage.jpg';
import { connect } from 'react-redux';

const ImageWithLoader = (props) => {
	const renderLoader = () => <ActivityIndicator size="large" color={config.LoaderColor}/>;
	if (!!props.source) {
		let {source} = props;
		if (!props.static) {
            source = props.source.replace('.', props.size || '.200x200.');
		}
		const image = props.static ? source : {uri: `${countries[props.location].imageUrl}${source}`};
		return (
			<Image
				source={image}
				indicator={renderLoader}
				style={props.style}/>
		);
	}
	return (
		<ReactNative.Image
			source={defaultImage}
			indicator={renderLoader}
			style={props.style}/>
	);
};

const mapStateToProps = state => ({
	location: state.profile.location,
});

export default connect(mapStateToProps, null)(ImageWithLoader);
