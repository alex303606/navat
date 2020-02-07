import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PersonalAreaNavigator from './PersonalAreaNavigator';
import HomeNavigator from './HomeNavigator';
import MenuNavigator from './MenuNavigator';
import SearchNavigator from './SearchNavigator';
import BasketNavigator from './BasketNavigator';
import config from '../../config';
import TabBarBottomContainer from '../components/TabBarBottomContainer';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 414});

const styles = EStyleSheet.create({
	$fontSize: '12rem',
	$lineHeight: '14rem',
	$marginTop:' 4rem',
});

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
			activeTintColor: config.MainColor,
			inactiveTintColor: '#C1C0C9',
			showIcon: false,
			labelStyle: {
				fontSize: styles.$fontSize,
				lineHeight: styles.$lineHeight,
				marginTop: styles.$marginTop,
				fontWeight: 'normal',
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
