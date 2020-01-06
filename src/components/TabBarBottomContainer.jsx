import React, { Component } from 'react';
import { SafeAreaView } from "react-navigation";
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Text } from './Texts';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
	},
	container: {
		height: 60,
		flexDirection: 'row',
	},
	gradient: {
		height: 12,
		position: 'absolute',
		top: -12,
		left: 0,
		right: 0,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	}
});
export class TabBarBottomContainer extends Component {
	render() {
		const {
			navigation,
			tabStyle,
			labelStyle,
			activeBackgroundColor,
			inactiveBackgroundColor,
		} = this.props;
		const { routes, index } = navigation.state;
		return (
			<View style={{position: 'relative'}}>
				<SafeAreaView forceInset={{bottom: 'always', top: 'never'}} style={styles.page}>
					<View style={styles.container}>
						{routes.map((route, routeIndex) => {
								return (
									<TouchableWithoutFeedback onPress={this.navigationHandler(route)} key={route.key}>
										<View
											style={[
												tabStyle,
												{borderBottomColor: routeIndex === index ? activeBackgroundColor : inactiveBackgroundColor},
											]}>
											<Text
												style={[
													labelStyle,
													{fontWeight: routeIndex === index ? '500' : '300'},
												]}>
												{route.routeName}
											</Text>
										</View>
									</TouchableWithoutFeedback>
								);
							},
						)}
					</View>
				</SafeAreaView>
			</View>
		);
	}
	
	navigationHandler = ({ routeName }) => () => {
		this.props.navigation.navigate(routeName);
	}
}
