import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { translate } from '../localization/i18n';
import Header from '../components/Header';
import BasketScreen from '../screens/BasketScreen';

const BasketNavigator = createStackNavigator({
		Basket: {
			screen: BasketScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'Basket',
		defaultNavigationOptions: ({navigation}) => {
			return {
				headerTitle: translate('tabbar.Basket'),
				headerRight: navigation.isFirstRouteInParent() ? null : <View style={{flex: 1}}/>,
				...Header,
				gesturesEnabled: false,
				headerBackTitle: ' ',
				headerTruncatedBackTitle: '',
			};
		},
		header: null,
	});

export default createAppContainer(BasketNavigator);
