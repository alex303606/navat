import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { translate } from '../localization/i18n';
import Header from '../components/Header';
import { View } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

const PersonalAreaNavigator = createStackNavigator({
		HomeScreen: {
			screen: HomeScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'HomeScreen',
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
