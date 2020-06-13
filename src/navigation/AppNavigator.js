import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SelectLanguageScreen from '../screens/SelectLanguageScreen';
import GuideScreen from '../screens/GuideScreen';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 414});

const AppNavigator = createStackNavigator({
		SelectLanguage: {
			screen: SelectLanguageScreen,
		},
		Guide: {
			screen: GuideScreen,
		},
	},
	{
		initialRouteName: 'SelectLanguage',
		swipeEnabled: false,
		defaultNavigationOptions: {
			header: null,
			gesturesEnabled: false,
		},
	});

export default App = createAppContainer(AppNavigator);
