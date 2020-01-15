import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterScreen from '../screens/RegisterScreen';
import { translate } from '../localization/i18n';
import Header from '../components/Header';
import { View } from 'react-native';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';

const PersonalAreaNavigator = createStackNavigator({
		Profile: {
			screen: LoginScreen,
		},
		Register: RegisterScreen
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'Register',
		defaultNavigationOptions: ({navigation}) => {
			return {
				headerTitle: translate('tabbar.PersonalArea'),
				headerRight: navigation.isFirstRouteInParent() ? null : <View style={{flex: 1}}/>,
				...Header,
				gesturesEnabled: false,
				headerBackTitle: '',
				headerTruncatedBackTitle: '',
			};
		},
		header: null,
	});

export default createAppContainer(PersonalAreaNavigator);
