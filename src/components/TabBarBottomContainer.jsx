import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import ReactNative, { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Text } from './Texts';
import { translate } from '../localization/i18n';
import CustomIcon from './CustomIcon';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
	},
	container: {
		flexDirection: 'row',
		paddingHorizontal: 15,
		backgroundColor: 'white',
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
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 16,
		borderRadius: 8,
		backgroundColor: '#F24444',
		paddingHorizontal: 3,
		position: 'absolute',
		top: 5,
		right: 0,
	},
	price: {
		color: 'white',
		fontSize: 11,
		lineHeight: 13,
		fontWeight: 'normal',
		marginRight: 1,
	},
	priceIcon: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -4,
		marginLeft: -4,
	},
	priceIconContainer: {
		height: 8,
		width: 8,
	},
});

const icons = {
	Home: 'home',
	Menu: 'menu',
	PersonalArea: 'profile',
	Search: 'search',
	Basket: 'basket',
};

class TabBarBottomContainer extends Component {
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
					{flex: routeIndex === 2 ? 5 : 3, position: 'relative'},
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
					{(route.routeName === 'Basket' && !!this.props.totalPrice) &&
					<View style={styles.row}>
						<ReactNative.Text style={styles.price}>{this.props.totalPrice}</ReactNative.Text>
						<View style={styles.priceIconContainer}>
							<CustomIcon
								style={styles.priceIcon}
								color='white'
								name={'price'}
								size={8}/>
						</View>
					</View>
					}
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

const mapStateToProps = state => ({
	totalPrice: state.basket.totalPrice,
});

export default connect(mapStateToProps, null)(TabBarBottomContainer);
