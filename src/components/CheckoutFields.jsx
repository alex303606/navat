import React, { Fragment } from 'react';
import Input from './Input';
import { translate } from '../localization/i18n';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import { H2 } from './Texts';

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
});

const CheckoutFields = (props) => {
	const fieldsIsValid = () => !props.fieldsErrors.nameError && !props.fieldsErrors.phoneError && !props.fieldsErrors.addressError;
	
	return (
		<Fragment>
			<Input
				style={styles.inputWrapper}
				inputStyle={[styles.inputStyle, props.fieldsErrors.nameError && styles.inputError]}
				placeholder={translate('fioPlaceholder')}
				onChangeText={value => props.changeName(value)}
				value={props.name}
				label={translate('name')}/>
			<Input
				style={[styles.inputWrapper, props.fieldsErrors.phoneError && styles.inputError]}
				inputStyle={styles.inputStyle}
				placeholder={translate('phoneExamplePlaceholder')}
				onChangeText={value => props.changePhone(value)}
				value={props.phone}
				label={translate('phone')}/>
			<Input
				style={[styles.inputWrapper, props.fieldsErrors.addressError && styles.inputError]}
				inputStyle={styles.inputStyle}
				placeholder={translate('addressPlaceholder')}
				onChangeText={value => props.changeAddress(value)}
				value={props.address}
				label={translate('address')}/>
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
