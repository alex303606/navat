import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
import CustomIcon from './CustomIcon';

const ImagePicker = NativeModules.ImageCropPicker;

const styles = StyleSheet.create({
  imageContainer: {
    height: 260,
    backgroundColor: '#12ABB5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  profileImage: {
    width: 60,
  },
  editBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editImageBtn: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 20,
    bottom: 18,
    right: 18,
  },
  pencilIcon: {
    width: 16,
    height: 16,
  },
});

interface IProps {
  savePhoto(photo: {uri: string}): void;
  avatar: {uri: string};
}

export default class PickerImage extends React.Component<IProps, {}> {
  selectPhotoTapped = () => {
    const deviceWidth = Dimensions.get('window').width;
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
        width: deviceWidth,
        height: 260,
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
        {(!!this.props.avatar && this.props.avatar.uri) ?
          <Image
            style={{width: '100%', height: '100%'}}
            resizeMode='contain'
            source={this.props.avatar}/> :
          <View style={styles.profileImageContainer}>
          </View>
        }
        <TouchableOpacity style={[styles.editBtn, styles.editImageBtn]} onPress={this.selectPhotoTapped}>
          <CustomIcon
              color={'red'}
              name={'pencil'}
              size={20}/>
        </TouchableOpacity>
      </View>
    );
  }
}
