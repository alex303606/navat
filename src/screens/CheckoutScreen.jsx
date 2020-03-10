import React, { Fragment, useState } from 'react';
import {
	View,
	ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import Button from '../components/Button';
import { bindActionCreators } from 'redux';
import { clearBasket } from '../store/actions/basket';
import DeliveryAddress from '../components/DeliveryAddress';
import PaymentMethod from '../components/PaymentMethod';
import CheckoutScreenHeader from '../components/CheckoutScreenHeader';
import { translate } from '../localization/i18n';
import CheckoutFields from '../components/CheckoutFields';


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

const CheckoutScreen = (props) => {
	const fieldsIsValid = () => (!!name.trim() && !!phone.trim() && !!address.trim());
	const [name, changeName] = useState('');
	const [phone, changePhone] = useState('');
	const [address, changeAddress] = useState('');
	const [description, changeDescription] = useState('');
	const [fieldsErrors, setFieldsErrors] = useState({
		nameError: false,
		phoneError: false,
		addressError: false,
	});
	const navigateToReadyScreen = () => {
		if (!fieldsIsValid()) {
			return setFieldsErrors({
				nameError: !name.trim(),
				phoneError: !phone.trim(),
				addressError: !address.trim(),
			});
		}
		props.clearBasket();
		props.navigation.navigate('Ready', {prevScreen: 'Home'});
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
			phone={phone}
			address={address}
			fieldsErrors={fieldsErrors}
			description={description}
			changeName={changeName}
			changePhone={changePhone}
			changeAddress={changeAddress}
			changeDescription={changeDescription}
		/>
	);
	
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
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			clearBasket,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);
