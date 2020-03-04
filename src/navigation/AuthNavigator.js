import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterScreen from '../screens/RegisterScreen';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import ConfirmCodeScreen from '../screens/ConfirmCodeScreen';

const AuthNavigator = createStackNavigator({
		Login: {
			screen: LoginScreen,
		},
		Register: {
			screen: RegisterScreen,
		},
		ConfirmCode: {
			screen: ConfirmCodeScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'Login',
		defaultNavigationOptions: ({navigation}) => {
			return {
				gesturesEnabled: false,
				header: null,
			};
		},
	});

export default createAppContainer(AuthNavigator);
