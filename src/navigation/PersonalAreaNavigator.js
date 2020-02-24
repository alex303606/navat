import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { translate } from '../localization/i18n';
import Header from '../components/Header';
import { View } from 'react-native';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import PersonalDataScreen from '../screens/PersonalDataScreen';
import TermsScreen from '../screens/TermsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';

const PersonalAreaNavigator = createStackNavigator({
		Profile: {
			screen: ProfileScreen,
		},
		PersonalData: {
			screen: PersonalDataScreen,
		},
		Terms: {
			screen: TermsScreen,
		},
		PrivacyPolicy: {
			screen: PrivacyPolicyScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'Profile',
		defaultNavigationOptions: ({navigation}) => {
			const {state: {routeName}} = navigation;
			return {
				headerTitle: translate(`navigationTitle.${routeName}`),
				headerRight: navigation.isFirstRouteInParent() ? null : <View style={{flex: 1}}/>,
				...Header,
				gesturesEnabled: false,
				headerBackTitle: ' ',
				headerTruncatedBackTitle: '',
			};
		},
		header: null,
	});

export default createAppContainer(PersonalAreaNavigator);
