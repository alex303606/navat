import React from 'react';
import ReactNative from 'react-native';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';

const styles = EStyleSheet.create({
	price: {
		color: config.MainColor,
		fontSize: '18rem',
		lineHeight: '18rem',
		fontWeight: 'bold',
	},
});

const Price = (props) => {
	const price = props.title ? parseInt(props.title, 10) : '';
	return (
		<ReactNative.Text style={[styles.price, props.textStyle]}>{`${price} с`}</ReactNative.Text>
	);
};

export default Price;
