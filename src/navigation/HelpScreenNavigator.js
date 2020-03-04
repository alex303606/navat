import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import HelpScreen from '../screens/HelpScreen';
import TemplateScreen from '../screens/TemplateScreen';

const HelpScreenNavigator = createStackNavigator({
		HelpScreen: {
			screen: HelpScreen,
		},
		Template: {
			screen: TemplateScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'HelpScreen',
		defaultNavigationOptions: () => {
			return {
				header: null,
				gesturesEnabled: false,
			};
		},
	});

export default createAppContainer(HelpScreenNavigator);
