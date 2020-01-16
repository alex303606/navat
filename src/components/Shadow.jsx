import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: 10,
		elevation: 10,
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
