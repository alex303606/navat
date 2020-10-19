import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Header from '../components/Header';
import HomeScreen from '../screens/HomeScreen';
import {View} from 'react-native';
import React from 'react';
import BranchesScreen from '../screens/BranchesScreen';
import {translate} from '../localization/i18n';
import PopularDishesScreen from '../screens/PopularDishesScreen';

const HomeNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    Branches: {
      screen: BranchesScreen,
    },
    PopularDishes: {
      screen: PopularDishesScreen,
    },
  },
  {
    swipeEnabled: false,
    headerMode: 'float',
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: ({navigation}) => {
      const {
        state: {routeName},
      } = navigation;
      return {
        headerTitle: translate(`navigationTitle.${routeName}`),
        headerRight: navigation.isFirstRouteInParent() ? null : (
          <View style={{flex: 1}} />
        ),
        ...Header,
        gesturesEnabled: false,
        headerBackTitle: ' ',
        headerTruncatedBackTitle: '',
      };
    },
  },
);

export default createAppContainer(HomeNavigator);
