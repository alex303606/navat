import React, { useState } from 'react';
import Shadow from '../components/Shadow';
import { ScrollView, View } from 'react-native';
import { Bold, H1, Label, SampleText, SmallText } from '../components/Texts';
import EStyleSheet from 'react-native-extended-stylesheet';
import config, { countries } from '../../config';
import Button from '../components/Button';
import Map from '../assets/images/map.svg';
import ControlledSwitch from '../components/ControlledSwitch';
import { connect } from 'react-redux';
import { assemble } from '../utils/utils';
import { translate } from '../localization/i18n';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		padding: '20rem',
	},
	modal: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: '20rem',
		paddingVertical: '25rem',
		borderRadius: '8rem',
	},
	header: {
		paddingBottom: '24rem',
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
	},
	content: {
		paddingTop: '20rem',
		alignItems: 'center',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingBottom: '24rem',
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
	},
	textAlignCenter: {
		textAlign: 'center',
	},
	h1: {
		textAlign: 'center',
		paddingBottom: '20rem',
	},
	text: {
		marginBottom: '8rem',
		textAlign: 'center',
	},
	switch: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: '20rem',
	},
});

const SelectAddressScreen = (props) => {
	const completeOrderHandler = () => {
		props.navigation.navigate('Checkout', {deliveryId: free ? 3 : 4});
	};
	const [free, setFree] = useState(false);
	let shippingPrice = countries[props.location].deliveryPrice;
	if (free) {
		shippingPrice = countries[props.location].deliveryAfterSalePrice;
		if (props.totalPrice > countries[props.location].deliveryThreshold) {
			shippingPrice = 0
		}
	}
	const totalPrice = props.totalPrice + shippingPrice;
	
	return (
		<View style={styles.page}>
			<Shadow style={[styles.modal]}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{flexGrow: 1}}
				>
					<View style={styles.iconContainer}>
						<Map width={150}/>
					</View>
					<View style={styles.content}>
						<H1 style={styles.h1}>
							Вы находитесь внутри квадрата бесплатной доставки?
						</H1>
						<SmallText style={styles.textAlignCenter}>
							Квадрат ограничен улицами:
						</SmallText>
						<SmallText style={styles.textAlignCenter}>
							пр.Раимбека - ул. Розыбакиева -
						</SmallText>
						<SmallText style={styles.textAlignCenter}>
							пр. Аль Фараби-ул. Калдаякова.
						</SmallText>
					</View>
					<View style={styles.switch}>
						<Bold style={{marginHorizontal: 20}}>Нет</Bold>
						<ControlledSwitch value={free} onValueChange={() => setFree(!free)}/>
						<Bold style={{marginHorizontal: 20}}>Да</Bold>
					</View>
					<View>
						<SampleText style={styles.text}>
							{assemble(translate('shippingPrice'), {price: shippingPrice})}
						</SampleText>
						<Label style={styles.text}>Итоговая сумма: {totalPrice} тг</Label>
						<SampleText style={styles.text}>
							В случае неправильного выбора зоны,
							доплата производится курьеру при получении.
						</SampleText>
					</View>
				</ScrollView>
				<Button
					onPress={completeOrderHandler}
					title={'Продолжить'}
				/>
			</Shadow>
		</View>
	);
};

const mapStateToProps = state => ({
	totalPrice: state.basket.totalPrice,
	location: state.profile.location,
});

export default connect(mapStateToProps, null)(SelectAddressScreen);
