import React from 'react';
import ReactNative from 'react-native';
import CustomIcon from './CustomIcon';
import { View } from 'react-native';

const styles = ReactNative.StyleSheet.create({
	price: {
		color: '#1E8149',
		fontSize: 18,
		lineHeight: 21,
		fontWeight: 'bold',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

const Price = (props) => {
	return (
		<View style={styles.row}>
			<ReactNative.Text style={styles.price}>{`${props.title} `}</ReactNative.Text>
			<CustomIcon
				color={'#1E8149'}
				name={'price'}
				size={10}/>
		</View>
	);
};

export default Price;
