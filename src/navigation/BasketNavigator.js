import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { translate } from '../localization/i18n';
import Header from '../components/Header';
import BasketScreen from '../screens/BasketScreen';
import { H2 } from '../components/Texts';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import CheckoutScreen from '../screens/CheckoutScreen';
import CheckoutReadyScreen from '../screens/CheckoutReadyScreen';

const styles = EStyleSheet.create({
	clearButton: {
		marginRight: '15rem',
	},
	clearButtonText: {
		color: config.MainColor,
	},
});

const HeaderClearButton = props => {
	const navigationBackHandler = () => props.onPress();
	if (props.showClearButton) {
		return (
			<TouchableOpacity
				onPress={navigationBackHandler}
				style={styles.clearButton}>
				<H2 style={styles.clearButtonText}>{translate('clearBasket')}</H2>
			</TouchableOpacity>
		);
	}
	return <View style={{flex: 1}}/>;
};

const BasketNavigator = createStackNavigator({
		Basket: {
			screen: BasketScreen,
		},
		Checkout: {
			screen: CheckoutScreen,
		},
		Ready: {
			screen: CheckoutReadyScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'Basket',
		defaultNavigationOptions: ({navigation}) => {
			const {state: {params}} = navigation;
			const showClearButton = !!params && !!params.clearBasket;
			const clearBasket = () => {
				return showClearButton ? params.clearBasket() : null;
			};
			return {
				headerTitle: translate('tabbar.Basket'),
				headerRight: <HeaderClearButton showClearButton={showClearButton} onPress={clearBasket}/>,
				headerLeft: <View style={{flex: 1}}/>,
				...Header,
				gesturesEnabled: false,
				headerBackTitle: ' ',
				headerTruncatedBackTitle: '',
			};
		},
		header: null,
	});

export default createAppContainer(BasketNavigator);
