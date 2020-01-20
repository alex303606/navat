import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './Texts';
import config from '../../config';

const styles = StyleSheet.create({
	button: {
		backgroundColor: config.MainColor,
		height: 35,
		borderRadius: 5,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const Button = props => {
	const pressHandler = () => props.disabled ? null : props.onPress();
	
	return (
		<TouchableOpacity
			activeOpacity={0.3}
			style={[
				styles.button,
				{backgroundColor: config.InactiveColorFunc(props.disabled ? 0.3 : 1)},
				props.buttonStyle,
			]}
			onPress={pressHandler}>
			<Text
				style={[
					{color: props.disabled ? config.MainColor : 'white'},
					props.textStyle,
				]}>
				{props.title}
			</Text>
		</TouchableOpacity>
	);
};

Button.propTypes = {
	onPress: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	buttonStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]),
	textStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]),
};

export default Button;
