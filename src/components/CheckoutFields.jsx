import React, { Fragment } from 'react';
import Input from './Input';
import { translate } from '../localization/i18n';
import EStyleSheet from 'react-native-extended-stylesheet';
import config, { countries } from '../../config';
import {H2, Label} from './Texts';
import { TextInputMask } from 'react-native-masked-text';

const styles = EStyleSheet.create({
	inputStyle: {
		height: '36rem',
		paddingHorizontal: '10rem',
		fontSize: '18rem',
		backgroundColor: config.InactiveColorFunc(0.1),
	},
	inputWrapper: {
		borderWidth: 0,
	},
	notes: {
		height: '115rem',
		textAlignVertical: 'top',
		paddingVertical: '10rem',
	},
	error: {
		color: 'red',
		textAlign: 'center',
		paddingVertical: '15rem',
	},
	inputError: {
		borderWidth: 1,
		borderColor: 'red',
	},
	phoneInput: {
		backgroundColor: 'rgba(30,129,73,0.1)',
		height: '36rem',
		paddingHorizontal: '10rem',
		paddingVertical: 0,
		fontSize: '18rem',
		marginBottom: '10rem',
	},
	label: {
		marginBottom: '10rem',
	},
});

const CheckoutFields = (props) => {
	const fieldsIsValid = () => !props.fieldsErrors.emailError && !props.fieldsErrors.nameError && !props.fieldsErrors.phoneError && !props.fieldsErrors.addressError;

	return (
		<Fragment>
			<Input
				style={styles.inputWrapper}
				inputStyle={[styles.inputStyle, props.fieldsErrors.nameError && styles.inputError]}
				placeholder={translate('fioPlaceholder')}
				onChangeText={value => props.changeName(value)}
				value={props.name}
				autoCompleteType={'name'}
				label={translate('name')}/>
			<Label style={styles.label}>{translate('phoneLabel')}</Label>
			<TextInputMask
				keyboardType='phone-pad'
				underlineColorAndroid='transparent'
				autoCorrect={false}
				type={'custom'}
				options={{mask: countries[props.location].phoneMask}}
				onChangeText={value => props.changePhone(value)}
				value={props.phone}
				style={[styles.phoneInput, props.fieldsErrors.phoneError && styles.inputError]}
				autoCompleteType={'tel'}
			/>
			<Input
				style={[styles.inputWrapper, props.fieldsErrors.addressError && styles.inputError]}
				inputStyle={styles.inputStyle}
				placeholder={translate('addressPlaceholder')}
				onChangeText={value => props.changeAddress(value)}
				value={props.address}
				autoCompleteType={'street-address'}
				label={translate('address')}/>
			<Input
				style={[styles.inputWrapper, props.fieldsErrors.emailError && styles.inputError]}
				inputStyle={styles.inputStyle}
				placeholder={translate('emailAddressPlaceholder')}
				onChangeText={value => props.changeEmail(value)}
				value={props.email}
				autoCompleteType={'email'}
				autoCapitalize={'none'}
				keyboardType={'email-address'}
				label={translate('emailAddress')}/>
			<Input
				style={styles.inputWrapper}
				inputStyle={[styles.inputStyle, styles.notes]}
				placeholder={translate('addressNotesPlaceholder')}
				multiline={true}
				onChangeText={value => props.changeDescription(value)}
				value={props.description}
				label={translate('addressNotes')}/>
			{!fieldsIsValid() && <H2 style={styles.error}>{translate('fillRequiredFields')}</H2>}
		</Fragment>
	);
};

export default CheckoutFields;
