import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import MyCardsScreen from '../screens/MyCardsScreen';
import AddCardScreen from '../screens/AddCardScreen';

const MyCardsNavigator = createStackNavigator({
		YourCards: {
			screen: MyCardsScreen,
		},
		AddCard: {
			screen: AddCardScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'YourCards',
		defaultNavigationOptions: () => {
			return {
				header: null,
				gesturesEnabled: false,
			};
		},
	});

export default createAppContainer(MyCardsNavigator);
