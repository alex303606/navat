import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { translate } from '../localization/i18n';
import Header from '../components/Header';
import { View } from 'react-native';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';

const PersonalAreaNavigator = createStackNavigator({
		Profile: {
			screen: ProfileScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'Profile',
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
