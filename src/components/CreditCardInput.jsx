import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	TextInput,
	ViewPropTypes,
} from 'react-native';

import CreditCard from 'react-native-credit-card-input/src/CardView';
import CCInput from 'react-native-credit-card-input/src/CCInput';
import connectToState, { InjectedProps } from 'react-native-credit-card-input/src/connectToState';
import { translate } from '../localization/i18n';
import EStyleSheet from 'react-native-extended-stylesheet';

const s = EStyleSheet.create({
	container: {},
	form: {
		marginTop: '20rem',
	},
	inputContainer: {
		borderBottomWidth: 0,
	},
	inputLabel: {
		fontWeight: 'bold',
	},
	input: {
		height: '40rem',
		borderBottomWidth: 0,
	},
	smallInput: {
		marginRight: '40rem',
	},
});

/* eslint react/prop-types: 0 */ // https://github.com/yannickcr/eslint-plugin-react/issues/106
class CCF extends Component {
	static propTypes = {
		...InjectedProps,
		labels: PropTypes.object,
		placeholders: PropTypes.object,
		labelStyle: Text.propTypes.style,
		inputStyle: Text.propTypes.style,
		inputContainerStyle: ViewPropTypes.style,
		validColor: PropTypes.string,
		invalidColor: PropTypes.string,
		placeholderColor: PropTypes.string,
		cardImageFront: PropTypes.number,
		cardImageBack: PropTypes.number,
		cardScale: PropTypes.number,
		cardFontFamily: PropTypes.string,
		cardBrandIcons: PropTypes.object,
		additionalInputsProps: PropTypes.objectOf(PropTypes.shape(TextInput.propTypes)),
	};
	
	static defaultProps = {
		cardViewSize: {},
		labels: {
			name: translate('cardHolderName'),
			number: translate('cardNumber'),
			expiry: translate('expiry'),
			cvc: translate('cvc'),
			postalCode: 'POSTAL CODE',
		},
		placeholders: {
			name: translate('fioPlaceholder'),
			number: 'XXXX  XXXX  XXXX  XXXX',
			expiry: 'MM/YY',
			cvc: translate('cvcPlaceholder'),
		},
		inputContainerStyle: {
			borderBottomWidth: 1,
			borderBottomColor: 'black',
		},
		validColor: '',
		invalidColor: 'red',
		placeholderColor: 'gray',
		additionalInputsProps: {},
	};
	
	componentDidMount = () => this._focus(this.props.focused);
	
	componentDidUpdate(prevProps, prevState) {
		if (this.props.focused !== prevProps.focused) {
			this._focus(this.props.focused);
		}
	}
	
	_focus = field => {
		if (!field) {
			return;
		}
		this.refs[field].focus();
	};
	
	_inputProps = field => {
		const {
			inputStyle, labelStyle, validColor, invalidColor, placeholderColor,
			placeholders, labels, values, status,
			onFocus, onChange, onBecomeEmpty, onBecomeValid,
			additionalInputsProps,
		} = this.props;
		
		return {
			inputStyle: [s.input, inputStyle],
			labelStyle: [s.inputLabel, labelStyle],
			validColor, invalidColor, placeholderColor,
			ref: field, field,
			
			label: labels[field],
			placeholder: placeholders[field],
			value: values[field],
			status: status[field],
			
			onFocus, onChange, onBecomeEmpty, onBecomeValid,
			
			additionalInputProps: additionalInputsProps[field],
		};
	};
	
	render() {
		const {
			cardImageFront, cardImageBack, inputContainerStyle,
			values: {number, expiry, cvc, name, type}, focused,
			requiresName, requiresCVC, requiresPostalCode,
			cardScale, cardFontFamily, cardBrandIcons,
		} = this.props;
		
		return (
			<View style={s.container}>
				<View style={{
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 20,
				}}>
					<CreditCard focused={focused}
								brand={type}
								scale={cardScale}
								fontFamily={cardFontFamily}
								imageFront={cardImageFront}
								imageBack={cardImageBack}
								customIcons={cardBrandIcons}
								name={requiresName ? name : ' '}
								number={number}
								expiry={expiry}
								cvc={cvc}/>
				</View>
				<View style={s.form}>
					<CCInput {...this._inputProps('number')}
							 keyboardType="numeric"
							 additionalInputProps={{
								 autoFocus: true,
								 autoCompleteType: 'off',
								 maxLength: 19,
							 }}
							 containerStyle={[s.inputContainer, inputContainerStyle]}/>
					{requiresName &&
					<CCInput {...this._inputProps('name')}
							 additionalInputProps={{
								 autoCompleteType: 'off',
							 }}
							 containerStyle={[s.inputContainer, inputContainerStyle]}/>}
					<View style={{flexDirection: 'row'}}>
						<CCInput {...this._inputProps('expiry')}
								 keyboardType="numeric"
								 additionalInputProps={{
									 autoCompleteType: 'off',
								 }}
								 containerStyle={[s.inputContainer, inputContainerStyle, s.smallInput]}/>
						{requiresCVC &&
						<CCInput {...this._inputProps('cvc')}
								 additionalInputProps={{
									 autoCompleteType: 'off',
								 }}
								 keyboardType="numeric"
								 containerStyle={[s.inputContainer, inputContainerStyle, s.smallInput]}/>}
					</View>
				</View>
			</View>
		);
	}
}

export const CreditCardInput = connectToState(CCF);
