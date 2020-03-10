import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config, { countries } from '../../config';
import Shadow from '../components/Shadow';
import PickerImage from '../components/PickerImage';
import { bindActionCreators } from 'redux';
import { changeBirthday, changeEmail, changeFio, changePhone, savePhoto } from '../store/actions/profile';
import { connect } from 'react-redux';
import { translate } from '../localization/i18n';
import Input from '../components/Input';
import { Label, Text } from '../components/Texts';
import { TextInputMask } from 'react-native-masked-text';
import DatePickerComponent from '../components/DatePickerComponent';
import moment from 'moment';
import Button from '../components/Button';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';
import ScreenContainer from '../components/ScreenContainer';

const customStyles = EStyleSheet.create({
	dateInput: {
		marginLeft: 0,
		borderWidth: 0,
		alignItems: 'center',
		backgroundColor: config.InactiveColorFunc(0.1),
		height: '30rem',
	},
	dateTouchBody: {
		flex: 1,
	},
	dateText: {
		fontSize: '18rem',
		lineHeight: '21rem',
		textAlign: 'center',
		fontFamily: getCustomFontFamilyByFontWeight(300),
		color: 'black',
	},
});

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		padding: '20rem',
	},
	modal: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: '20rem',
		paddingVertical: '25rem',
		borderRadius: '8rem',
	},
	header: {
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
		paddingBottom: '20rem',
	},
	phone: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: '23rem',
	},
	phoneCode: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(30,129,73,0.1)',
		borderRadius: '5rem',
		paddingHorizontal: '10rem',
		height: '36rem',
		marginRight: '15rem',
	},
	flag: {
		width: '33rem',
		height: '20rem',
		marginRight: '6rem',
	},
	phoneInput: {
		backgroundColor: config.InactiveColorFunc(0.1),
		height: '36rem',
		paddingHorizontal: '10rem',
		paddingVertical: 0,
		flexGrow: 1,
		fontSize: '18rem',
	},
	label: {
		marginBottom: '10rem',
	},
	birthdayField: {
		borderWidth: 0,
	},
	footer: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingTop: '20rem',
	},
	inputStyle: {
		fontSize: '18rem',
		lineHeight: '21rem',
		fontFamily: getCustomFontFamilyByFontWeight(300),
	},
	content: {
		paddingTop: '63rem',
	},
	rowStyle: {
		marginBottom: '23rem',
	},
});

const currentYear = (new Date()).getFullYear();
const defaultDate = moment(`${currentYear - 30}-01-01`).format('DD/MM/YYYY');

const PersonalDataScreen = (props) => {
	const [fio, changeFio] = useState(props.profile.fio || '');
	const [phone, changePhone] = useState((props.profile.phone && props.profile.phone.phone) ? props.profile.phone.phone : '');
	const [birthday, changeBirthday] = useState(props.profile.birthday || defaultDate);
	const [email, changeEmail] = useState(props.profile.email || '');
	
	const changeFioHandler = value => {
		return changeFio(value);
	};
	
	const changeEmailHandler = value => {
		return changeEmail(value);
	};
	
	const changePhoneHandler = value => {
		changePhone(value);
	};
	
	const changeBirthdayHandler = (birthday: string) => {
		return changeBirthday(birthday);
	};
	
	const saveProfileData = () => {
		props.changeBirthday(birthday);
		props.changeFio(fio);
		props.changePhone({
			phone,
			code: countries[props.location].code,
		});
		props.changeEmail(email);
		props.navigation.goBack();
	};
	
	return (
		<ScreenContainer style={styles.page}>
			<Shadow style={[styles.modal, styles.bottomModal]}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{flexGrow: 1}}
				>
					<View style={styles.header}>
						<PickerImage
							avatar={props.profile.avatar}
							savePhoto={props.savePhoto}
						/>
					</View>
					<View style={styles.content}>
						<Input
							rowStyle={styles.rowStyle}
							autoCompleteType={'name'}
							textContentType={'name'}
							inputStyle={styles.inputStyle}
							onChangeText={changeFioHandler}
							value={fio}
							label={translate('fioLabel')}
							placeholder={translate('fioPlaceholder')}
							style={{
								backgroundColor: config.InactiveColorFunc(0.1),
								borderWidth: 0,
							}}
						/>
						<Input
							rowStyle={styles.rowStyle}
							autoCompleteType={'email'}
							keyboardType={'email-address'}
							textContentType={'emailAddress'}
							inputStyle={styles.inputStyle}
							onChangeText={changeEmailHandler}
							value={email}
							label={translate('emailLabel')}
							placeholder={translate('emailPlaceholder')}
							style={{
								backgroundColor: config.InactiveColorFunc(0.1),
								borderWidth: 0,
							}}
						/>
						<Label style={styles.label}>{translate('phoneLabel')}</Label>
						<View style={styles.phone}>
							<View style={styles.phoneCode}>
								<Image
									style={styles.flag}
									source={countries[props.location].flag}
									resizeMode='contain'/>
								<Text>{countries[props.location].code}</Text>
							</View>
							<TextInputMask
								keyboardType='phone-pad'
								underlineColorAndroid='transparent'
								autoCorrect={false}
								type={'custom'}
								options={{mask: countries[props.location].phoneMask}}
								value={phone}
								onChangeText={changePhoneHandler}
								style={styles.phoneInput}
								placeholder={translate('phoneExamplePlaceholder')}
							/>
						</View>
						<Label style={styles.label}>{translate('birthdayDate')}</Label>
						<DatePickerComponent
							style={styles.birthdayField}
							customStyles={customStyles}
							date={birthday}
							onChange={changeBirthdayHandler}
						/>
					</View>
					<View style={styles.footer}>
						<Button
							disabled={false}
							onPress={saveProfileData}
							title={translate('save')}/>
					</View>
				</ScrollView>
			</Shadow>
		</ScreenContainer>
	);
};

const mapStateToProps = state => ({
	profile: state.profile,
	location: state.profile.location,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			savePhoto,
			changeBirthday,
			changeFio,
			changePhone,
			changeEmail,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDataScreen);
