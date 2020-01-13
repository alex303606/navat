import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterScreen from '../screens/RegisterScreen';
import { translate } from '../localization/i18n';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import { View } from 'react-native';
import React from 'react';

const SearchNavigator = createStackNavigator({
		Login: {
			screen: RegisterScreen,
		},
		HomeScreen: HomeScreen
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'Login',
		defaultNavigationOptions: ({navigation}) => {
			return {
				headerTitle: translate('tabbar.Search'),
				headerRight: navigation.isFirstRouteInParent() ? null : <View style={{flex: 1}}/>,
				...Header,
				gesturesEnabled: false,
				headerBackTitle: '',
				headerTruncatedBackTitle: '',
			};
		},
		header: null,
	});

export default createAppContainer(SearchNavigator);
