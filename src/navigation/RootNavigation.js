import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import { TabBarBottomContainer } from '../components/TabBarBottomContainer';

const RootNavigation = createBottomTabNavigator({
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: 'Главная',
			},
		},
		Menu: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: 'Меню',
			},
		},
		PersonalArea: {
			screen: LoginScreen,
			navigationOptions: {
				tabBarLabel: 'Личный Кабинет',
			},
		},
		Search: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: 'Поиск',
			},
		},
		Basket: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: 'Корзина',
			},
		},
	},
	{
		initialRouteName: 'Home',
		backBehavior: 'none',
		lazy: true,
		animationEnabled: false,
		swipeEnabled: false,
		tabBarOptions: {
			style: {
				height: 60,
				flexDirection: 'row',
				alignItems: 'stretch',
			},
			activeTintColor: 'black',
			inactiveTintColor: 'black',
			activeBackgroundColor: 'blue',
			inactiveBackgroundColor: 'transparent',
			showIcon: false,
			labelStyle: {
				fontSize: 14,
				fontWeight: '600',
			},
			tabStyle: {
				flex: 1,
				height: 60,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
				borderBottomWidth: 4,
			},
		},
		tabBarComponent: TabBarBottomContainer,
		tabBarPosition: 'bottom',
	});

export default createAppContainer(RootNavigation);
