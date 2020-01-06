import React from 'react';
import ReactNative from 'react-native';

const styles = ReactNative.StyleSheet.create({
	font: {
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'black',
	},
	h1: {
		fontSize: 24,
		lineHeight: 29,
		fontWeight: '500',
	},
	text: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: 'normal',
	},
});

const H1 = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.h1, props.style]}/>
);

const Text = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.text, props.style]}/>
);

export {
	H1,
	Text,
};
