import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: '10rem',
		elevation: '10rem',
		borderWidth: 0,
	},
});

const Shadow = (props) => (
	<View
		style={[styles.shadow, props.style]}>
		{props.children}
	</View>
);

export default Shadow;
