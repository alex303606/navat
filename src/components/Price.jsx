import React from 'react';
import ReactNative from 'react-native';
import CustomIcon from './CustomIcon';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';

const styles = EStyleSheet.create({
	price: {
		color: config.MainColor,
		fontSize: '18rem',
		lineHeight: '18rem',
		fontWeight: 'bold',
		height: '15rem',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
	},
	$iconSize: '10rem'
});

const Price = (props) => {
	return (
		<View style={[styles.row, props.style]}>
			<ReactNative.Text style={[styles.price, props.textStyle]}>{`${props.title} `}</ReactNative.Text>
			<CustomIcon
				color={'#1E8149'}
				name={'price'}
				size={styles.$iconSize}/>
		</View>
	);
};

export default Price;
