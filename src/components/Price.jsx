import React from 'react';
import ReactNative from 'react-native';
import CustomIcon from './CustomIcon';
import { View } from 'react-native';

const styles = ReactNative.StyleSheet.create({
	price: {
		color: '#1E8149',
		fontSize: 18,
		lineHeight: 18,
		fontWeight: 'bold',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		height: 15,
	},
});

const Price = (props) => {
	return (
		<View style={[styles.row, props.style]}>
			<ReactNative.Text style={[styles.price, props.textStyle]}>{`${props.title} `}</ReactNative.Text>
			<View style={{alignSelf: 'flex-end'}}>
				<CustomIcon
					color={'#1E8149'}
					name={'price'}
					size={10}/>
			</View>
		</View>
	);
};

export default Price;
