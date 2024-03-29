import React, { useState } from 'react';
import ReactNative, { NativeModules, Platform, SafeAreaView, StatusBar, View } from 'react-native';
import Shadow from '../components/Shadow';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text } from '../components/Texts';
import config from '../../config';
import CustomIcon from '../components/CustomIcon';
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import { bindActionCreators } from 'redux';
import { clearBasket } from '../store/actions/basket';
import { connect } from 'react-redux';

const {StatusBarManager} = NativeModules;

const styles = EStyleSheet.create({
	$checkoutReadyIconSize: '130rem',
	page: {
		flex: 1,
		paddingHorizontal: '10rem',
		paddingBottom: '20rem',
		justifyContent: 'flex-end',
	},
	pageInner: {
		flex: 1,
		marginTop: '10rem',
		backgroundColor: 'white',
		borderRadius: '8rem',
		padding: '18rem',
	},
	content: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
	},
	title: {
		textAlign: 'center',
		fontSize: '36rem',
		lineHeight: '43rem',
		color: config.MainColor,
	},
	checkoutReadyIcon: {
		marginVertical: '30rem',
	},
	footer: {
		paddingTop: '20rem',
	},
});

const CheckoutReadyScreen = (props) => {
	const [statusBarHeight, setStatusBarHeight] = useState(0);
	const OrderID = props.navigation.getParam('OrderID');
	if (!statusBarHeight) {
		if (Platform.OS === 'ios') {
			StatusBarManager.getHeight(({height}) => {
				setStatusBarHeight(height);
			});
		} else {
			setStatusBarHeight(StatusBarManager.HEIGHT);
		}
	}
	
	const navigateToHome = () => {
		clearTimeout(timeOut);
		props.navigation.popToTop();
		props.navigation.navigate('Home');
	};
	
	const timeOut = setTimeout(navigateToHome, 10000);
	
	return (
		<SafeAreaView
			forceInset={{bottom: 'always', top: 'always'}}
			style={{paddingTop: statusBarHeight, flex: 1}}>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle='dark-content'
			/>
			<View style={styles.page}>
				<Shadow style={styles.pageInner}>
					<View style={styles.content}>
						<ReactNative.Text style={styles.title}>
							{translate('orderAccepted')}
						</ReactNative.Text>
						<CustomIcon
							style={styles.checkoutReadyIcon}
							color={config.GreyColor}
							name={'checkout-ready'}
							size={styles.$checkoutReadyIconSize}/>
						{!!OrderID ?
							<Text>
								{translate('orderNumber')}
								<Text style={{color: config.MainColor}}>{' ' + OrderID}</Text>
							</Text> : <View/>
						}
					</View>
					<View style={styles.footer}>
						<Button
							onPress={navigateToHome}
							title={translate('returnToHome')}
						/>
					</View>
				</Shadow>
			</View>
		</SafeAreaView>
	);
};

CheckoutReadyScreen.navigationOptions = () => {
	return {
		header: null,
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			clearBasket,
		},
		dispatch);
};

export default connect(null, mapDispatchToProps)(CheckoutReadyScreen);
