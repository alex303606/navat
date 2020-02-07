import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import ReactNative, { View, TouchableWithoutFeedback } from 'react-native';
import { Text } from './Texts';
import { translate } from '../localization/i18n';
import CustomIcon from './CustomIcon';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	page: {
		flexDirection: 'column',
	},
	container: {
		flexDirection: 'row',
		paddingHorizontal: '15rem',
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
		shadowRadius: '10rem',
		elevation: '10rem',
		borderWidth: 0,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		height: '16rem',
		borderRadius: '8rem',
		backgroundColor: '#F24444',
		paddingHorizontal: '3rem',
		position: 'absolute',
		top: '5rem',
		right: 0,
	},
	price: {
		color: 'white',
		fontSize: '11rem',
		lineHeight: '13rem',
		fontWeight: 'normal',
		marginRight: '1rem',
	},
	priceIcon: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-4rem',
		marginLeft: '-4rem',
	},
	priceIconContainer: {
		height: '8rem',
		width: '8rem',
	},
	$size30: '30rem',
	$size8: '8rem',
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
						size={styles.$size30}/>
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
								size={styles.$size8}/>
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
