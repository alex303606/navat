import React from 'react';
import { TextInput, View } from 'react-native';
import config from '../../config';
import { Label } from './Texts';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	row: {
		marginBottom: '10rem',
	},
	label: {
		marginBottom: '10rem',
	},
	input: {
		height: '30rem',
		paddingHorizontal: '10rem',
		flexGrow: 1,
		fontSize: '14rem',
		paddingVertical: 0,
	},
	inputWrapper: {
		borderWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: config.GreyColor,
	},
});

const Input = props => {
	return (
		<View style={[styles.row, props.rowStyle]}>
			<Label style={styles.label}>{props.label}</Label>
			<View style={[styles.inputWrapper, props.style]}>
				<TextInput
					autoFocus={props.autoFocus}
					autoCompleteType={props.autoCompleteType}
					keyboardType={props.keyboardType}
					textContentType={props.textContentType}
					style={[styles.input, props.inputStyle]}
					value={props.value}
					onChangeText={props.onChangeText}
					underlineColorAndroid='transparent'
					secureTextEntry={!!props.secure}
					placeholder={props.placeholder}
					placeholderTextColor={config.GreyColor}
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
	autoFocus: PropTypes.bool,
	placeholder: PropTypes.string,
	autoCompleteType: PropTypes.string,
	keyboardType: PropTypes.string,
	textContentType: PropTypes.string,
	style: PropTypes.any,
	inputStyle: PropTypes.any,
	rowStyle: PropTypes.any,
};

export default Input;
