import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TabBarBottomContainer } from '../components/TabBarBottomContainer';
import PersonalAreaNavigator from './PersonalAreaNavigator';
import HomeNavigator from './HomeNavigator';
import MenuNavigator from './MenuNavigator';
import SearchNavigator from './SearchNavigator';
import BasketNavigator from './BasketNavigator';
import config from '../../config';

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
		initialRouteName: 'PersonalArea',
		backBehavior: 'none',
		lazy: true,
		animationEnabled: false,
		swipeEnabled: false,
		tabBarOptions: {
			activeTintColor: config.MainColor,
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
				height: config.TabBarHeight,
			},
		},
		tabBarComponent: TabBarBottomContainer,
		tabBarPosition: 'bottom',
	});

export default createAppContainer(RootNavigation);
