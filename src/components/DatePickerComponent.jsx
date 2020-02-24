import React, { useState } from 'react';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { translate } from '../localization/i18n';

const DatePickerComponent = (props) => {
	const [disabled, changeDisabled] = useState(false);
	const currentYear = (new Date()).getFullYear();
	const minDate = moment(`${currentYear - 100}-01-01`).format('DD/MM/YYYY');
	const maxDate = moment().format(props.format || 'DD/MM/YYYY');
	const onDateChangeHandler = (value) => {
		changeDisabled(false);
		props.onChange(value);
	};
	
	const changePickerToDisabled = () => changeDisabled(true);
	const changePickerToEnabled = () => changeDisabled(false);
	
	return (
		<DatePicker
			style={props.style || {}}
			date={props.date}
			mode='date'
			disabled={props.disabled || disabled}
			placeholder={props.placeholder || 'DD/MM/YYYY'}
			format={'DD/MM/YYYY'}
			minDate={minDate}
			maxDate={maxDate}
			confirmBtnText={translate('doneBtnLabel')}
			cancelBtnText={translate('cancelBtnLabel')}
			showIcon={false}
			customStyles={props.customStyles || {}}
			onOpenModal={changePickerToDisabled}
			onCloseModal={changePickerToEnabled}
			onDateChange={onDateChangeHandler}
		/>
	);
};

export default DatePickerComponent;
