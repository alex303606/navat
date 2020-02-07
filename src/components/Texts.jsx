import React from 'react';
import ReactNative from 'react-native';
import { Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	font: {
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'black',
	},
	h1: {
		fontSize: '24rem',
		lineHeight: '29rem',
		fontWeight: Platform.select({
			android: 'bold',
			ios: '600',
		}),
	},
	h2: {
		fontSize: '20rem',
		lineHeight: '24rem',
		fontWeight: Platform.select({
			android: 'bold',
			ios: '600',
		}),
	},
	h3: {
		fontSize: '14rem',
		lineHeight: '17rem',
		fontWeight: 'bold',
	},
	text: {
		fontSize: '18rem',
		lineHeight: '21rem',
		fontWeight: 'normal',
	},
	smallText: {
		fontSize: '14rem',
		lineHeight: '17rem',
		fontWeight: 'normal',
	},
	label: {
		fontSize: '15rem',
		lineHeight: '18rem',
		fontWeight: 'normal',
	},
	bold: {
		fontSize: '15rem',
		lineHeight: '18rem',
		fontWeight: Platform.select({
			android: 'bold',
			ios: '500',
		}),
	},
	littleText: {
		fontSize: '12rem',
		lineHeight: '14rem',
		fontWeight: Platform.select({
			android: 'bold',
			ios: '600',
		}),
	},
	middleText: {
		color: '#9B9B9B',
		fontSize: '13rem',
		lineHeight: '16rem',
		fontWeight: 'normal',
	},
	description: {
		fontSize: '10rem',
		lineHeight: '12rem',
		fontWeight: Platform.select({
			android: 'normal',
			ios: '200',
		}),
	},
});

const H1 = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.h1, props.style]}/>
);

const H2 = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.h2, props.style]}/>
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

const LittleText = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.littleText, props.style]}/>
);

const MiddleText = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.middleText, props.style]}/>
);

const Description = props => (
	<ReactNative.Text {...props} style={[styles.font, styles.description, props.style]}/>
);

export {
	H1,
	H2,
	H3,
	Text,
	SmallText,
	Label,
	Bold,
	LittleText,
	MiddleText,
	Description,
};
