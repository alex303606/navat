import React, { Component } from 'react';
import ReactNative, { FlatList, TouchableOpacity, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { BoxShadow } from 'react-native-shadow';
import { clearBasket, decreaseItem, deleteItem, increaseItem } from '../store/actions/basket';
import { connect } from 'react-redux';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import ImageWithLoader from '../components/ImageWithLoader';
import { Bold, Description, Label, LittleText, SmallText } from '../components/Texts';
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import Price from '../components/Price';
import config from '../../config';
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { assemble, normalizeHeight } from '../utils/utils';
import CustomIcon from '../components/CustomIcon';

Icon.loadFont();

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		paddingVertical: normalizeHeight(10),
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		backgroundColor: 'white',
	},
	itemWrapper: {
		paddingHorizontal: '10rem',
		backgroundColor: 'white',
	},
	image: {
		width: '155rem',
		marginRight: '18rem',
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
		width: '104rem',
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
		fontSize: '22rem',
		lineHeight: '22rem',
		height: '19rem',
	},
	title: {
		marginBottom: normalizeHeight(2),
	},
	additionalTitle: {
		marginBottom: normalizeHeight(4),
	},
	button: {
		width: '36rem',
		height: '36rem',
		borderRadius: '18rem',
		backgroundColor: 'white',
		overflow: 'hidden',
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: '44rem',
		height: '44rem',
		textAlign: 'center',
	},
	amount: {
		fontSize: '24rem',
		color: config.MainColor,
		marginHorizontal: '11rem',
	},
	leftAction: {
		backgroundColor: 'red',
		paddingRight: '10rem',
		paddingLeft: '10rem',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	$shadowSize: '36rem',
	$shadowRadius: '18rem',
	$iconSize: '44rem',
	$border: '4rem',
	imageWithLoader: {
		width: '100%',
		height: normalizeHeight(120),
	},
	price: {
		marginRight: '5rem',
	},
	basketFooter: {
		paddingHorizontal: '13rem',
		paddingTop: normalizeHeight(10),
		borderTopWidth: 1,
		borderColor: config.GreyColor,
		//minHeight: normalizeHeight(115),
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	basketFooterInfo: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
		marginBottom: normalizeHeight(10),
	},
	contentContainerStyle: {
		paddingVertical: '10rem',
		backgroundColor: 'white',
	},
	emptyBasket: {
		flex: 1,
		paddingHorizontal: '10rem',
		paddingVertical: normalizeHeight(10),
		alignItems: 'center',
		justifyContent: 'center',
	},
	separator: {
		height: '10rem',
		backgroundColor: 'white',
	},
	header: {
		paddingHorizontal: '50rem',
		marginBottom: '10rem',
	},
});

class BasketScreen extends Component {
	row: Array<any> = [];
	prevOpenedRow = undefined;
	
	componentDidMount() {
		if (this.props.items.length > 0 && !this.props.navigation.getParam('clearBasket')) {
			this.props.navigation.setParams({clearBasket: this.props.clearBasket});
		}
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (this.props.items.length !== prevProps.items.length) {
			this.props.navigation.setParams({clearBasket: this.props.items.length > 0 ? this.props.clearBasket : undefined});
		}
	}
	
	
	render() {
		const totalAmount = this.props.items.reduce((acc, item) => {
			return acc + item.amount;
		}, 0);
		
		const shippingPrice = this.props.totalPrice >= this.props.freeShippingThreshold ? 0 : this.props.shippingPrice;
		//const totalPrice = this.props.totalPrice + shippingPrice + this.props.containers.price;
		const totalPrice = this.props.totalPrice + shippingPrice;
		const disabledOrderButton = !totalAmount;
		
		if (!this.props.items.length) {
			return (
				<View style={styles.page}>
					<View style={styles.emptyBasket}>
						<CustomIcon
							color={config.GreyColor}
							name={'empty'}
							size={253}/>
					</View>
					<View style={styles.basketFooter}>
						<Button
							onPress={this.navigateToMenu}
							title={translate('navigateToMenu')}
						/>
					</View>
				</View>
			);
		}
		
		return (
			<View style={styles.page}>
				<View style={styles.header}>
					<Bold style={{textAlign: 'center'}}>{translate('swipeRightDescription')}</Bold>
				</View>
				<FlatList
					data={this.props.items}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.contentContainerStyle}
					ItemSeparatorComponent={this.renderSeparator}
				/>
				<View style={[styles.basketFooter, disabledOrderButton && {minHeight: 'auto', borderTopWidth: 0}]}>
					{(!!this.props.totalPrice || !!this.props.containers.amount || !!totalAmount) &&
					<View style={styles.basketFooterInfo}>
						{!!this.props.totalPrice &&
						<SmallText>
							{this.props.totalPrice >= this.props.freeShippingThreshold ?
								translate('freeShipping') :
								assemble(translate('shippingPrice'), {price: this.props.shippingPrice})}
						</SmallText>
						}
						{/*{!!this.props.containers.amount && !!this.props.containers.price &&*/}
						{/*<Fragment>*/}
						{/*	<SmallText>*/}
						{/*		{assemble(translate('numberOfContainers'), {amount: this.props.containers.amount})}*/}
						{/*	</SmallText>*/}
						{/*	<SmallText>*/}
						{/*		{assemble(translate('containersPrice'), {price: this.props.containers.price})}*/}
						{/*	</SmallText>*/}
						{/*</Fragment>*/}
						{/*}*/}
						{!!totalAmount &&
						<SmallText>
							{assemble(translate('itemsInBasket'), {totalAmount})}
						</SmallText>
						}
					</View>
					}
					<Button
						onPress={this.completeOrderHandler(disabledOrderButton)}
						title={disabledOrderButton ?
							translate('addItemsToBasket') :
							assemble(translate('order'), {sum: totalPrice})
						}
					/>
				</View>
			</View>
		);
	}
	
	renderSeparator = () => <View style={styles.separator}/>;
	
	completeOrderHandler = (disabledOrderButton) => () => {
		if (disabledOrderButton) {
			return this.navigateToMenu();
		}
		return this.props.navigation.navigate('Checkout');
	};
	
	renderLeftActions = (id) => () => {
		return (
			<RectButton style={styles.leftAction} onPress={this.deleteItem(id)}>
				<Icon
					style={styles.icon}
					name='ios-close-circle'
					size={styles.$iconSize}
					color={'white'}
				/>
			</RectButton>
		);
	};
	
	navigateToMenu = () => this.props.navigation.navigate('Menu');
	
	renderItem = (value) => {
		const shadowOpt = {
			width: styles.$shadowSize,
			height: styles.$shadowSize,
			color: '#000',
			border: styles.$border,
			radius: styles.$shadowRadius,
			opacity: config.shadowOptOpacity,
			x: 0,
			y: 0,
		};
		const {item, index} = value;
		
		return (
			<View style={styles.itemWrapper}>
				<Swipeable
					renderLeftActions={this.renderLeftActions(item.id)}
					overshootLeft={false}
					ref={ref => this.row[index] = ref}
					friction={2}
					rightThreshold={20}
					onSwipeableOpen={() => this.closeRow(index)}
				>
					<View style={styles.row}>
						<View style={styles.image}>
							<ImageWithLoader
								resizeMode='cover'
								style={styles.imageWithLoader}
								source={item.image}
							/>
						</View>
						<View style={styles.info}>
							<View style={styles.infoTop}>
								<Label numberOfLines={1} style={styles.title}>{item.title}</Label>
								{!!item.additionalTitle &&
								<LittleText
									numberOfLines={1}
									style={styles.additionalTitle}>
									{translate(item.additionalTitle)}
								</LittleText>
								}
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
												size={styles.$iconSize}
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
												size={styles.$iconSize}
												color={config.MainColor}
											/>
										</TouchableOpacity>
									</BoxShadow>
								</View>
								<Price
									style={styles.price}
									textStyle={styles.textStyle}
									title={item.price * item.amount}/>
							</View>
						</View>
					</View>
				</Swipeable>
			</View>
		
		);
	};
	
	closeRow = (index) => {
		if (this.prevOpenedRow && this.prevOpenedRow !== this.row[index]) {
			this.prevOpenedRow.close();
		}
		this.prevOpenedRow = this.row[index];
	};
	
	increaseItem = id => () => this.props.increaseItem(id);
	
	deleteItem = id => () => this.props.deleteItem(id);
	
	decreaseItem = id => () => this.props.decreaseItem(id);
	
	clearBasket = () => this.props.clearBasket();
	
	keyExtractor = (item) => item.title;
}

const mapStateToProps = state => ({
	items: state.basket.items,
	totalPrice: state.basket.totalPrice,
	containers: state.basket.containers,
	freeShippingThreshold: state.menu.freeShippingThreshold,
	shippingPrice: state.menu.shippingPrice,
	location: state.profile.location,
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
