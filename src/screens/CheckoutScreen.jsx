import React, { Fragment, useState } from 'react';
import ReactNative, {
	ImageBackground,
	Platform,
	StatusBar,
	View,
	Dimensions,
	NativeModules,
	TouchableOpacity,
	FlatList,
	ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getCustomFontFamilyByFontWeight, normalizeHeight } from '../utils/utils';
import IonIcon from 'react-native-vector-icons/Ionicons';
import config from '../../config';
import Shadow from '../components/Shadow';
import { Bold, H2, Text } from '../components/Texts';
import Button from '../components/Button';
import CustomIcon from '../components/CustomIcon';
import CustomModal from '../components/CustomModal';
import backGround from '../assets/images/checkout-header-background.png';
import { bindActionCreators } from 'redux';
import { clearBasket } from '../store/actions/basket';

const {StatusBarManager} = NativeModules;
const styles = EStyleSheet.create({
	$backIconSize: '25rem',
	$addressIconSize: '47rem',
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
	},
	backGround: {
		width: Dimensions.get('window').width,
		height: normalizeHeight(239),
	},
	header: {
		paddingTop: '25rem',
		paddingHorizontal: '20rem',
	},
	backButton: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: '20rem',
	},
	backButtonText: {
		color: 'white',
		fontSize: '17rem',
		lineHeight: '20rem',
		fontFamily: getCustomFontFamilyByFontWeight(600),
	},
	backIcon: {
		marginRight: '10rem',
	},
	title: {
		color: 'white',
		fontSize: '34rem',
		lineHeight: '41rem',
		fontFamily: getCustomFontFamilyByFontWeight(900),
	},
	content: {
		flex: 1,
		paddingHorizontal: '10rem',
		paddingBottom: '20rem',
		marginTop: -60,
	},
	modal: {
		backgroundColor: 'white',
		paddingHorizontal: '20rem',
		paddingBottom: '19rem',
		paddingTop: '31rem',
		borderRadius: '8rem',
		flex: 1,
	},
	bold: {
		textTransform: 'uppercase',
		fontFamily: getCustomFontFamilyByFontWeight(900),
		marginBottom: '13rem',
	},
	footer: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingTop: '20rem',
	},
	selectedItem: {
		borderRadius: '6rem',
		borderColor: '#F52D56',
		borderWidth: 1,
		marginBottom: '23rem',
		padding: '14rem',
		paddingRight: '25rem',
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: '80rem',
	},
	addressItem: {
		borderRadius: '6rem',
		borderColor: '#F52D56',
		borderWidth: 1,
		padding: '14rem',
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: '80rem',
	},
	paymentMethod: {
		borderRadius: '6rem',
		borderColor: '#F52D56',
		borderWidth: 1,
		marginBottom: '23rem',
		padding: '14rem',
		paddingRight: '40rem',
		flexDirection: 'row',
		alignItems: 'center',
		minHeight: '80rem',
		position: 'relative',
	},
	paymentMethodIcon: {
		position: 'absolute',
		top: 10,
		right: 7,
	},
	selectedItemIcon: {
		marginRight: '35rem',
	},
	address: {
		fontFamily: getCustomFontFamilyByFontWeight(200),
		flex: 1,
		flexWrap: 'wrap',
	},
	selectedItemAddress: {
		flexGrow: 1,
		marginRight: '10rem',
	},
	separator: {
		height: '23rem',
	},
});

const CheckoutScreen = (props) => {
	const [statusBarHeight, setStatusBarHeight] = useState(0);
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedAddress, changeSelectedAddress] = useState(props.addresses[0]);
	const [paymentMethod, changePaymentMethod] = useState('card');
	const toggleModal = () => setModalVisible(!modalVisible);
	
	if (!statusBarHeight) {
		if (Platform.OS === 'ios') {
			StatusBarManager.getHeight(({height}) => {
				setStatusBarHeight(height);
			});
		} else {
			setStatusBarHeight(StatusBarManager.HEIGHT);
		}
	}
	
	const navigationBack = () => props.navigation.goBack();
	const navigateToReadyScreen = () => {
		props.clearBasket();
		props.navigation.navigate('Ready', {prevScreen: 'Home'});
	};
	
	const renderHeader = () => (
		<ImageBackground
			source={backGround}
			style={[styles.backGround, {paddingTop: statusBarHeight}]}>
			<StatusBar
				translucent={true}
				backgroundColor={'transparent'}
				barStyle='light-content'
			/>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.backButton}
					activeOpacity={0.3}
					onPress={navigationBack}>
					<IonIcon
						style={styles.backIcon}
						name='ios-arrow-back'
						size={styles.$backIconSize}
						color={'white'}
					/>
					<ReactNative.Text style={styles.backButtonText}>Назад</ReactNative.Text>
				</TouchableOpacity>
				<ReactNative.Text style={styles.title}>Оформить заказ</ReactNative.Text>
			</View>
		</ImageBackground>
	);
	
	const renderDeliveryAddress = () => {
		return (
			<Fragment>
				<Bold style={styles.bold}>Адрес доставки</Bold>
				<TouchableOpacity
					style={styles.selectedItem}
					activeOpacity={0.3}
					onPress={toggleModal}>
					<CustomIcon
						style={styles.selectedItemIcon}
						color={config.GreyColor}
						name={selectedAddress.type}
						size={styles.$addressIconSize}/>
					<View style={styles.selectedItemAddress}>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.address}>{selectedAddress.city}</Text>
						</View>
						<View style={{flexDirection: 'row'}}>
							<Text style={styles.address}>{selectedAddress.address}</Text>
						</View>
					</View>
					<IonIcon
						name='ios-arrow-down'
						size={styles.$backIconSize}
						color={config.GreyColor}
					/>
				</TouchableOpacity>
				<CustomModal
					setModalVisible={toggleModal}
					modalVisible={modalVisible}>
					<H2 style={{textAlign: 'center', marginBottom: 30}}>Выберите адрес доставки</H2>
					<FlatList
						data={props.addresses}
						ItemSeparatorComponent={renderSeparator}
						renderItem={renderAddressItem}
						keyExtractor={keyExtractor}
						showsVerticalScrollIndicator={false}
					/>
				</CustomModal>
			</Fragment>
		);
	};
	
	const renderSeparator = () => <View style={styles.separator}/>;
	const keyExtractor = item => item.id;
	const changeSelectedAddressHandler = item => () => {
		changeSelectedAddress(item);
		toggleModal();
	};
	
	const renderAddressItem = ({item}) => (
		<TouchableOpacity
			style={styles.addressItem}
			activeOpacity={0.3}
			onPress={changeSelectedAddressHandler(item)}>
			<CustomIcon
				style={styles.selectedItemIcon}
				color={config.GreyColor}
				name={item.type}
				size={styles.$addressIconSize}/>
			<View style={styles.selectedItemAddress}>
				<View style={{flexDirection: 'row'}}>
					<Text style={styles.address}>{item.city}</Text>
				</View>
				<View style={{flexDirection: 'row'}}>
					<Text style={styles.address}>{item.address}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
	
	const renderPaymentMethod = () => (
		<Fragment>
			<Bold style={styles.bold}>Выбор метода оплаты</Bold>
			<TouchableOpacity
				style={[
					styles.paymentMethod,
					{backgroundColor: paymentMethod === 'card' ? 'white' : '#F2F2F2'},
				]}
				activeOpacity={0.3}
				onPress={() => changePaymentMethod('card')}>
				<CustomIcon
					style={styles.selectedItemIcon}
					name={'card'}
					size={styles.$addressIconSize}/>
				<View style={[styles.selectedItemAddress, {marginRight: 0}]}>
					<Bold style={{marginBottom: 5}}>Оплата картой</Bold>
					<Text style={styles.address}>**** **** **** 0369</Text>
				</View>
				{paymentMethod === 'card' &&
				<IonIcon
					style={styles.paymentMethodIcon}
					name='ios-checkmark-circle'
					size={styles.$backIconSize}
					color={'#F52D56'}
				/>
				}
			</TouchableOpacity>
			<TouchableOpacity
				style={[
					styles.paymentMethod,
					{backgroundColor: paymentMethod === 'courier' ? 'white' : '#F2F2F2'},
				]}
				activeOpacity={0.3}
				onPress={() => changePaymentMethod('courier')}>
				<CustomIcon
					style={styles.selectedItemIcon}
					color={'black'}
					name={'payment-method'}
					size={styles.$addressIconSize}/>
				<View style={styles.selectedItemAddress}>
					<Bold>Наличными курьеру</Bold>
				</View>
				{paymentMethod === 'courier' &&
				<IonIcon
					style={styles.paymentMethodIcon}
					name='ios-checkmark-circle'
					size={styles.$backIconSize}
					color={'#F52D56'}
				/>
				}
			</TouchableOpacity>
		</Fragment>
	);
	
	return (
		<View style={styles.page}>
			{renderHeader()}
			<View style={styles.content}>
				<Shadow style={styles.modal}>
					<ScrollView
						keyboardShouldPersistTaps='handled'
						scrollEnabled={true}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{flexGrow: 1}}
					>
						{renderDeliveryAddress()}
						{renderPaymentMethod()}
						<View style={styles.footer}>
							<Button
								onPress={navigateToReadyScreen}
								title={'ОПЛАТИТЬ'}
							/>
						</View>
					</ScrollView>
				</Shadow>
			</View>
		</View>
	);
};

CheckoutScreen.navigationOptions = () => {
	return {
		header: null,
	};
};

const mapStateToProps = state => ({
	location: state.profile.location,
	addresses: state.profile.addresses,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			clearBasket,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);
