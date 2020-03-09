import React, { useState } from 'react';
import backGround from '../assets/images/checkout-header-background.png';
import ReactNative, {
	Dimensions,
	ImageBackground,
	NativeModules,
	Platform,
	StatusBar,
	TouchableOpacity,
	View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getCustomFontFamilyByFontWeight, normalizeHeight } from '../utils/utils';

const {StatusBarManager} = NativeModules;

const styles = EStyleSheet.create({
	$backIconSize: '25rem',
	backGround: {
		width: Dimensions.get('window').width,
		height: normalizeHeight(239),
	},
	header: {
		paddingTop: '25rem',
		paddingHorizontal: '20rem',
	},
	backButton: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: '20rem',
	},
	backButtonText: {
		color: 'white',
		fontSize: '17rem',
		lineHeight: '20rem',
		fontFamily: getCustomFontFamilyByFontWeight(600),
	},
	backIcon: {
		marginRight: '10rem',
	},
	title: {
		color: 'white',
		fontSize: '34rem',
		lineHeight: '41rem',
		fontFamily: getCustomFontFamilyByFontWeight(900),
	},
});

const CheckoutScreenHeader = (props) => {
	const [statusBarHeight, setStatusBarHeight] = useState(0);
	const navigationBack = () => props.navigation.goBack();
	
	if (!statusBarHeight) {
		if (Platform.OS === 'ios') {
			StatusBarManager.getHeight(({height}) => {
				setStatusBarHeight(height);
			});
		} else {
			setStatusBarHeight(StatusBarManager.HEIGHT);
		}
	}
	
	return (
		<ImageBackground
			source={backGround}
			style={[styles.backGround, {paddingTop: statusBarHeight}]}>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle='light-content'
			/>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.backButton}
					activeOpacity={0.3}
					onPress={navigationBack}>
					<IonIcon
						style={styles.backIcon}
						name='ios-arrow-back'
						size={styles.$backIconSize}
						color={'white'}
					/>
					<ReactNative.Text style={styles.backButtonText}>Назад</ReactNative.Text>
				</TouchableOpacity>
				<ReactNative.Text style={styles.title}>Оформить заказ</ReactNative.Text>
			</View>
		</ImageBackground>
	);
};

export default CheckoutScreenHeader;
