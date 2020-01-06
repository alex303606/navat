import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Text } from './Texts';
import { translate } from '../localization/i18n';
import CustomIcon from './CustomIcon';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
	},
	container: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		backgroundColor: 'white',
		paddingVertical: 7,
	},
	tabbar: {
		shadowColor: '#000',
		backgroundColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: 10,
		elevation: 10,
		borderWidth: 0,
	},
});

const icons = {
	Home: 'home',
	Menu: 'menu',
	PersonalArea: 'profile',
	Search: 'search',
	Basket: 'basket',
};

export class TabBarBottomContainer extends Component {
	render() {
		const {
			navigation,
			tabStyle,
			labelStyle,
			inactiveTintColor,
			activeTintColor,
		} = this.props;
		const {routes, index} = navigation.state;
		const renderItem = (route, routeIndex) => (
			<TouchableWithoutFeedback onPress={this.navigationHandler(route)} key={route.key}>
				<View style={[
					tabStyle,
					{flex: routeIndex === 2 ? 5 : 3},
				]}>
					<CustomIcon
						color={routeIndex === index ? activeTintColor : inactiveTintColor}
						name={icons[route.routeName]}
						size={30}/>
					<Text
						numberOfLines={1}
						style={[
							labelStyle,
							{color: routeIndex === index ? activeTintColor : inactiveTintColor},
						]}>
						{translate(`tabbar.${route.routeName}`)}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		);
		
		return (
			<View style={styles.tabbar}>
				<SafeAreaView forceInset={{bottom: 'always', top: 'never'}} style={styles.page}>
					<View style={styles.container}>
						{routes.map(renderItem)}
					</View>
				</SafeAreaView>
			</View>
		);
	}
	
	navigationHandler = ({routeName}) => () => {
		this.props.navigation.navigate(routeName);
	};
}
