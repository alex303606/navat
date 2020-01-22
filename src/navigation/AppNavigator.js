import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SelectLanguageScreen from '../screens/SelectLanguageScreen';
import SelectLocationScreen from '../screens/SelectLocationScreen';
import GuideScreen from '../screens/GuideScreen';
import AuthNavigator from './AuthNavigator';

const AppNavigator = createStackNavigator({
		SelectLocation: {
			screen: SelectLocationScreen,
		},
		SelectLanguage: {
			screen: SelectLanguageScreen,
		},
		Guide: {
			screen: GuideScreen,
		},
		Auth: {
			screen: AuthNavigator,
		},
	},
	{
		initialRouteName: 'SelectLocation',
		swipeEnabled: false,
		defaultNavigationOptions: {
			header: null,
			gesturesEnabled: false,
		},
	});

export default createAppContainer(AppNavigator);
