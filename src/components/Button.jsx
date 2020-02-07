import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text } from './Texts';
import config from '../../config';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	button: {
		backgroundColor: config.MainColor,
		height: '35rem',
		borderRadius: '5rem',
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
