import React, { Fragment, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import Button from '../components/Button';
import { bindActionCreators } from 'redux';
import { checkout, clearBasket } from '../store/actions/basket';
import DeliveryAddress from '../components/DeliveryAddress';
import PaymentMethod from '../components/PaymentMethod';
import CheckoutScreenHeader from '../components/CheckoutScreenHeader';
import { translate } from '../localization/i18n';
import CheckoutFields from '../components/CheckoutFields';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { changeEmail, changeFio, changePhone } from '../store/actions/profile';
import { parsePhoneNumberFromString } from 'libphonenumber-js';


const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
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
	footer: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingTop: '20rem',
	},
});

const phoneIsValid = (phone) => {
	const phoneNumber = parsePhoneNumberFromString(phone);
	if (phoneNumber) {
		return phoneNumber.isValid();
	}
	return false;
};

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const CheckoutScreen = (props) => {
	const fieldsIsValid = () => (name.trim().length >= 2 && phoneIsValid(phone) && reg.test(email.trim()) && address.trim().length >= 5);
	const [name, changeName] = useState(props.profile.fio || '');
	const [email, changeEmail] = useState(props.profile.email || '');
	const [phone, changePhone] = useState(props.profile.phone || '');
	const [address, changeAddress] = useState('');
	const [description, changeDescription] = useState('');
	const [fieldsErrors, setFieldsErrors] = useState({
		nameError: false,
		phoneError: false,
		addressError: false,
		emailError: false,
	});
	const navigateToReadyScreen = () => {
		if (!fieldsIsValid()) {
			return setFieldsErrors({
				nameError: name.trim().length < 2,
				phoneError: !phoneIsValid(phone),
				addressError: address.trim().length < 5,
				emailError: !reg.test(email.trim()),
			});
		}
		const data = {
			payment_method_id: '1',
			delivery_id: '1',
			name,
			email,
			address,
			phone,
			comment: description,
			ip: '',
			items: props.items,
		};
		props.changeFio(name);
		props.changePhone(phone);
		props.changeEmail(email);
		props.checkout(data).then((res) => {
			props.clearBasket().then(() => {
				setTimeout(() => {
					props.navigation.navigate('Ready', {
						prevScreen: 'Home',
						OrderID: (res && res.OrderID) ? res.OrderID : '',
					});
				});
			});
		});
	};
	
	const renderWithAuth = () => (
		<Fragment>
			<DeliveryAddress
				navigation={props.navigation}
				addresses={props.addresses}/>
			<PaymentMethod
				navigation={props.navigation}
				cards={props.cards}/>
		</Fragment>
	);
	
	const renderWithoutAuth = () => (
		<CheckoutFields
			name={name}
			email={email}
			phone={phone}
			address={address}
			fieldsErrors={fieldsErrors}
			description={description}
			changeName={changeName}
			changePhone={changePhone}
			changeAddress={changeAddress}
			changeDescription={changeDescription}
			changeEmail={changeEmail}
			location={props.location}
		/>
	);
	
	const space = Platform.select({
		ios: -(config.TabBarHeight + getBottomSpace()),
		android: -50,
	});
	
	return (
		<View style={styles.page}>
			<CheckoutScreenHeader
				navigation={props.navigation}
			/>
			<View style={styles.content}>
				<Shadow style={styles.modal}>
					<ScrollView
						keyboardShouldPersistTaps='handled'
						scrollEnabled={true}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{flexGrow: 1}}
					>
						{props.userIsLoggedIn ? renderWithAuth() : renderWithoutAuth()}
						<View style={styles.footer}>
							<Button
								onPress={navigateToReadyScreen}
								title={translate('pay')}
							/>
						</View>
					</ScrollView>
				</Shadow>
			</View>
			<KeyboardSpacer
				style={{backgroundColor: config.BackgroundColor}}
				topSpacing={space}
			/>
		</View>
	);
};

CheckoutScreen.navigationOptions = () => {
	return {
		header: null,
	};
};

const mapStateToProps = state => ({
	addresses: state.profile.addresses,
	cards: state.profile.cards,
	userIsLoggedIn: state.profile.userIsLoggedIn,
	items: state.basket.items,
	location: state.profile.location,
	profile: state.profile,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			clearBasket,
			checkout,
			changeFio,
			changePhone,
			changeEmail,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);
