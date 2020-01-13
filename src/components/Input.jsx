import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import config from '../../config';
import { Label } from './Texts';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	row: {
		marginBottom: 10,
	},
	label: {
		marginBottom: 12,
	},
	input: {
		height: 30,
		paddingHorizontal: 10,
		flexGrow: 1,
	},
	inputWrapper: {
		borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: config.GreyColor,
	}
});

const Input = props => {
	return (
		<View style={styles.row}>
			<Label style={styles.label}>{props.label}</Label>
			<View style={styles.inputWrapper}>
				<TextInput
					style={styles.input}
					value={props.value}
					onChangeText={props.onChangeText}
					underlineColorAndroid='transparent'
					secureTextEntry={props.secure}
				/>
				{
					props.renderRightButton && props.renderRightButton()
				}
			</View>
		</View>
	);
};

Input.propTypes = {
	onChangeText: PropTypes.func.isRequired,
	renderRightButton: PropTypes.func,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	secure: PropTypes.bool,
};

export default Input;
