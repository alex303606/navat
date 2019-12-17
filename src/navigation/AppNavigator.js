import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen,
	},
	Login: {
		screen: LoginScreen,
	},
});

export default createAppContainer(AppNavigator);
