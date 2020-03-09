import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import MyAddressesScreen from '../screens/MyAddressesScreen';
import AddAddressScreen from '../screens/AddAddressScreen';

const MyAddressesNavigator = createStackNavigator({
		MyAddresses: {
			screen: MyAddressesScreen,
		},
		AddAddress: {
			screen: AddAddressScreen,
		},
	},
	{
		swipeEnabled: false,
		headerMode: 'float',
		initialRouteName: 'MyAddresses',
		defaultNavigationOptions: () => {
			return {
				header: null,
				gesturesEnabled: false,
			};
		},
	});

export default createAppContainer(MyAddressesNavigator);
