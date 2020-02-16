import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { translate } from '../localization/i18n';
import Header from '../components/Header';
import { View } from 'react-native';
import React from 'react';
import SearchScreen from '../screens/SearchScreen';

const SearchNavigator = createStackNavigator({
		SearchScreen: {
			screen: SearchScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'SearchScreen',
		defaultNavigationOptions: ({navigation}) => {
			return {
				headerTitle: translate('tabbar.Search'),
				headerRight: navigation.isFirstRouteInParent() ? null : <View style={{flex: 1}}/>,
				...Header,
				gesturesEnabled: false,
				headerBackTitle: ' ',
				headerTruncatedBackTitle: '',
			};
		},
		header: null,
	});

export default createAppContainer(SearchNavigator);
