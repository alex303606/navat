import React from 'react';
import ReactNative from 'react-native';
import {Platform} from 'react-native';

const styles = ReactNative.StyleSheet.create({
	font: {
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'black',
	},
	h1: {
		fontSize: 24,
		lineHeight: 29,
		fontWeight: Platform.select({
			android: 'bold',
			ios: '600',
		}),
	},
	h3: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: 'bold',
	},
	text: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: 'normal',
	},
	smallText: {
		fontSize: 14,
		lineHeight: 17,
		fontWeight: 'normal',
	},
	label: {
		fontSize: 15,
		lineHeight: 18,
		fontWeight: 'normal',
	},
	bold: {
		fontSize: 15,
		lineHeight: 18,
		fontWeight: Platform.select({
			android: 'bold',
			ios: '500',
		}),
	}
});

const H1 = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.h1, props.style]}/>
);

const H3 = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.h3, props.style]}/>
);

const Text = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.text, props.style]}/>
);

const SmallText = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.smallText, props.style]}/>
);

const Label = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.label, props.style]}/>
);

const Bold = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.bold, props.style]}/>
);

export {
	H1,
	H3,
	Text,
	SmallText,
	Label,
	Bold,
};
