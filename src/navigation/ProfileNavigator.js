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
import SettingsScreen from '../screens/SettingsScreen';
import HelpScreenNavigator from './HelpScreenNavigator';
import AuthNavigator from './AuthNavigator';
import MyCardsNavigator from './MyCardsNavigator';
import MyAddressesNavigator from './MyAddressesNavigator';

const ProfileNavigator = createStackNavigator({
		Profile: {
			screen: ProfileScreen,
		},
		MyCards: {
			screen: MyCardsNavigator,
		},
		MyAddresses: {
			screen: MyAddressesNavigator,
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
		Settings: {
			screen: SettingsScreen,
		},
		Help: {
			screen: HelpScreenNavigator,
		},
		Auth: {
			screen: AuthNavigator,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'Profile',
		defaultNavigationOptions: ({navigation}) => {
			const {state: {routeName, index, routes}} = navigation;
			let headerTitle = translate(`navigationTitle.${routeName}`);
			if (index && routes && !!routes.length && routes[index].params) {
				const {item} = routes[index].params;
				if (item && !!item.title) {
					headerTitle = translate(item.title);
				}
			}
			return {
				headerTitle: headerTitle,
				headerRight: navigation.isFirstRouteInParent() ? null : <View style={{flex: 1}}/>,
				...Header,
				gesturesEnabled: false,
				headerBackTitle: ' ',
				headerTruncatedBackTitle: '',
			};
		},
	});

export default createAppContainer(ProfileNavigator);
