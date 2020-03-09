import React, { Fragment, useState } from 'react';
import { Bold, Text } from './Texts';
import { TouchableOpacity, View } from 'react-native';
import CustomIcon from './CustomIcon';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';

const styles = EStyleSheet.create({
	$backIconSize: '25rem',
	$addressIconSize: '47rem',
	bold: {
		textTransform: 'uppercase',
		fontFamily: getCustomFontFamilyByFontWeight(900),
		marginBottom: '13rem',
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
	text: {
		fontFamily: getCustomFontFamilyByFontWeight(200),
		flex: 1,
		flexWrap: 'wrap',
	},
	selectedItemAddress: {
		flexGrow: 1,
		marginRight: '10rem',
	},
});

const PaymentMethod = (props) => {
	let number = '';
	const defaultCard = (props.cards && !!props.cards.length) ? props.cards.find(card => card.default) : undefined;
	if (defaultCard) {
		const arrOfPart = defaultCard.number.split(' ');
		number = `**** **** **** ${arrOfPart[arrOfPart.length - 1]}`;
	}
	const [paymentMethod, changePaymentMethod] = useState('card');
	const cardPressHandler = () => defaultCard ? changePaymentMethod('card') : navigateToCards();
	const navigateToCards = () => props.navigation.navigate('MyCards', {prevScreen: 'Checkout'});
	
	return (
		<Fragment>
			<Bold style={styles.bold}>Выбор метода оплаты</Bold>
			<TouchableOpacity
				style={[
					styles.paymentMethod,
					{backgroundColor: paymentMethod === 'card' ? 'white' : '#F2F2F2'},
				]}
				activeOpacity={0.3}
				onPress={cardPressHandler}>
				<CustomIcon
					style={styles.selectedItemIcon}
					name={'card'}
					size={styles.$addressIconSize}/>
				<View style={[styles.selectedItemAddress, {marginRight: 0}]}>
					{defaultCard ?
						<Fragment>
							<Bold style={{marginBottom: 5}}>Оплата картой</Bold>
							<Text style={styles.text}>{number}</Text>
						</Fragment> : <Bold>Добавить карту</Bold>
					}
				</View>
				{paymentMethod === 'card' && defaultCard &&
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
				onPress={() => defaultCard ? changePaymentMethod('courier') : null}>
				<CustomIcon
					style={styles.selectedItemIcon}
					color={'black'}
					name={'payment-method'}
					size={styles.$addressIconSize}/>
				<View style={styles.selectedItemAddress}>
					<Bold>Наличными курьеру</Bold>
				</View>
				{(paymentMethod === 'courier' || !defaultCard) &&
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
};

export default PaymentMethod;
