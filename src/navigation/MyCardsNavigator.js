import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import YourCardsScreen from '../screens/YourCardsScreen';
import AddCardScreen from '../screens/AddCardScreen';

const MyCardsNavigator = createStackNavigator({
		YourCards: {
			screen: YourCardsScreen,
		},
		AddCard: {
			screen: AddCardScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'YourCards',
		defaultNavigationOptions: ({navigation}) => {
			return {
				header: null,
				gesturesEnabled: false,
			};
		},
	});

export default createAppContainer(MyCardsNavigator);
