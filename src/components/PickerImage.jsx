import React, {Component} from 'react';
import {
	Image,
	View,
	NativeModules,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';

const ImagePicker = NativeModules.ImageCropPicker;

const styles = EStyleSheet.create({
	imageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	profileImageContainer: {
		width: '120rem',
		height: '120rem',
		borderRadius: '60rem',
		backgroundColor: 'rgba(200, 199, 204, 0.5)',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
});

export default class PickerImage extends Component {
	selectPhotoTapped = () => {
		ImagePicker.openPicker({
			cropping: false,
			width: 500,
			height: 500,
			includeExif: true,
			mediaType: 'photo',
		}).then(response => {
			if (!response || !response.path) {
				return;
			}
			ImagePicker.openCropper({
				path: response.path,
				width: 120,
				height: 120,
				includeBase64: true,
			}).then(image => {
				if (!image || !image.path) {
					return;
				}
				let avatarSource = {uri: `data:${image.mime};base64,${image.data}`};
				this.props.savePhoto(avatarSource);
			}).catch((err) => {
				console.log('openCropper error = ' + err);
			});
		}).catch(e => console.log(e));
	};
	
	render() {
		return (
			<View style={styles.imageContainer}>
				<TouchableOpacity
					onPress={this.selectPhotoTapped}
					style={styles.profileImageContainer}>
					{(!!this.props.avatar && this.props.avatar.uri) ?
						<Image
							style={{width: '100%', height: '100%'}}
							resizeMode='contain'
							source={this.props.avatar}
						/> :
						<Icon
							color={config.MainColor}
							name={'ios-add'}
							size={50}
						/>
					}
				</TouchableOpacity>
			</View>
		);
	}
}
