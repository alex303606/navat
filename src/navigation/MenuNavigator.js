import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { translate } from '../localization/i18n';
import Header from '../components/Header';
import { View } from 'react-native';
import React from 'react';
import MenuScreen from '../screens/MenuScreen';
import CategoryScreen from '../screens/CategoryScreen';

const MenuNavigator = createStackNavigator({
		Menu: {
			screen: MenuScreen,
		},
		Category: {
			screen: CategoryScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'Menu',
		defaultNavigationOptions: ({navigation}) => {
			return {
				headerTitle: translate('tabbar.Menu'),
				headerRight: navigation.isFirstRouteInParent() ? null : <View style={{flex: 1}}/>,
				...Header,
				gesturesEnabled: false,
				headerBackTitle: '',
				headerTruncatedBackTitle: '',
			};
		},
		header: null,
	});

export default createAppContainer(MenuNavigator);
