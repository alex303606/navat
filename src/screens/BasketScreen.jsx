import React, { Component } from 'react';
import ReactNative, { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { BoxShadow } from 'react-native-shadow';
import { clearBasket, decreaseItem, deleteItem, increaseItem } from '../store/actions/basket';
import { connect } from 'react-redux';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import ImageWithLoader from '../components/ImageWithLoader';
import { Description, Label } from '../components/Texts';
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import Price from '../components/Price';
import config from '../../config';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		padding: 10,
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		paddingVertical: 5,
	},
	image: {
		width: 155,
		marginRight: 18,
	},
	info: {
		flexDirection: 'column',
		flex: 1,
	},
	infoTop: {
		flexDirection: 'column',
		flexGrow: 1,
	},
	buttonStyle: {
		width: 104,
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	footerLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textStyle: {
		fontSize: 22,
		lineHeight: 26,
	},
	title: {
		marginBottom: 15,
	},
	button: {
		width: 36,
		height: 36,
		borderRadius: 18,
		backgroundColor: 'white',
		overflow: 'hidden',
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: 44,
		height: 44,
		textAlign: 'center',
	},
	amount: {
		fontSize: 24,
		color: config.MainColor,
		marginHorizontal: 11,
	},
	leftAction: {
		backgroundColor: 'red',
		marginVertical: 5,
		paddingHorizontal: 5,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

class BasketScreen extends Component {
	render() {
		return (
			<View style={styles.page}>
				<FlatList
					data={this.props.items}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
					showsVerticalScrollIndicator={false}
				/>
				<Button
					onPress={this.clearBasket}
					title={translate('clearBasket')}
				/>
			</View>
		);
	}
	
	renderLeftActions = (id) => () => {
		return (
			<RectButton style={styles.leftAction} onPress={this.deleteItem(id)}>
				<Icon
					style={styles.icon}
					name='ios-close-circle'
					size={44}
					color={'white'}
				/>
			</RectButton>
		);
	};
	
	renderItem = ({item}) => {
		const shadowOpt = {
			width: 36,
			height: 36,
			color: '#000',
			border: 4,
			radius: 18,
			opacity: config.shadowOptOpacity,
			x: 0,
			y: 0,
		};
		
		return (
			<Swipeable
				renderLeftActions={this.renderLeftActions(item.id)}
				overshootLeft={false}
			>
				<View style={styles.row}>
					<View style={styles.image}>
						<ImageWithLoader
							resizeMode='cover'
							style={{width: '100%', height: 120}}
							source={{uri: item.image}}
						/>
					</View>
					<View style={styles.info}>
						<View style={styles.infoTop}>
							<Label numberOfLines={1} style={styles.title}>{item.title}</Label>
							<Description numberOfLines={3}>{item.description}</Description>
						</View>
						<View style={styles.footer}>
							<View style={styles.footerLeft}>
								<BoxShadow setting={shadowOpt}>
									<TouchableOpacity
										activeOpacity={0.3}
										style={styles.button}
										onPress={this.increaseItem(item.id)}>
										<Icon
											style={styles.icon}
											name='ios-add-circle-outline'
											size={44}
											color={config.MainColor}
										/>
									</TouchableOpacity>
								</BoxShadow>
								<ReactNative.Text style={styles.amount}>{item.amount}</ReactNative.Text>
								<BoxShadow setting={shadowOpt}>
									<TouchableOpacity
										activeOpacity={0.3}
										style={styles.button}
										onPress={this.decreaseItem(item.id)}>
										<Icon
											style={styles.icon}
											name='ios-remove-circle-outline'
											size={44}
											color={config.MainColor}
										/>
									</TouchableOpacity>
								</BoxShadow>
							</View>
							<Price
								style={{height: 25}}
								textStyle={styles.textStyle}
								title={item.price * item.amount}/>
						</View>
					</View>
				</View>
			</Swipeable>
		);
	};
	
	increaseItem = id => () => this.props.increaseItem(id);
	
	deleteItem = id => () => this.props.deleteItem(id);
	
	decreaseItem = id => () => this.props.decreaseItem(id);
	
	clearBasket = () => this.props.clearBasket();
	
	keyExtractor = (item) => item.id;
}

const mapStateToProps = state => ({
	items: state.basket.items,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			clearBasket,
			increaseItem,
			decreaseItem,
			deleteItem,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
