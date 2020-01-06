import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TabBarBottomContainer } from '../components/TabBarBottomContainer';
import PersonalAreaNavigator from './PersonalAreaNavigator';
import HomeNavigator from './HomeNavigator';
import MenuNavigator from './MenuNavigator';
import SearchNavigator from './SearchNavigator';
import BasketNavigator from './BasketNavigator';

const RootNavigation = createBottomTabNavigator({
		Home: {
			screen: HomeNavigator,
		},
		Menu: {
			screen: MenuNavigator,
		},
		PersonalArea: {
			screen: PersonalAreaNavigator,
		},
		Search: {
			screen: SearchNavigator,
		},
		Basket: {
			screen: BasketNavigator,
		},
	},
	{
		initialRouteName: 'Home',
		backBehavior: 'none',
		lazy: true,
		animationEnabled: false,
		swipeEnabled: false,
		tabBarOptions: {
			activeTintColor: '#1E8149',
			inactiveTintColor: '#C1C0C9',
			showIcon: false,
			labelStyle: {
				fontSize: 12,
				lineHeight: 14,
				fontWeight: 'normal',
				marginTop: 4,
			},
			tabStyle: {
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			},
		},
		tabBarComponent: TabBarBottomContainer,
		tabBarPosition: 'bottom',
	});

export default createAppContainer(RootNavigation);
