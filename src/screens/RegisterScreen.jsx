import React, { Component } from 'react';
import { Bold, H1, Text } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import { Image, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { TextInputMask } from 'react-native-masked-text';
import { countries } from '../../config';
import Shadow from '../components/Shadow';
import { translate } from '../localization/i18n';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	page: {
		paddingVertical: '5rem',
		justifyContent: 'flex-end',
	},
	pageInner: {
		flex: 1,
		marginTop: '10rem',
		backgroundColor: 'white',
		borderRadius: '8rem',
		padding: '18rem',
	},
	phone: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: '34rem',
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
		backgroundColor: 'rgba(30,129,73,0.1)',
		height: '36rem',
		paddingHorizontal: '10rem',
		paddingVertical: 0,
		flexGrow: 1,
		fontSize: '18rem',
	},
	title: {
		paddingTop: '48rem',
		textAlign: 'center',
		marginBottom: '64rem',
	},
	info: {
		textAlign: 'center',
		marginBottom: '34rem',
	},
	footer: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingTop: '20rem',
	},
});

class RegisterScreen extends Component {
	state = {
		value: '',
		phoneIsValid: false,
		phoneNumber: '',
	};
	
	phoneIsValid = () => {
		const phoneNumber = parsePhoneNumberFromString(`+${countries[this.props.location].code} ${this.state.value}`);
		if (phoneNumber) {
			const phoneIsValid = phoneNumber.isValid() && phoneNumber.number && phoneNumber.country && phoneNumber.country === this.props.location;
			if (phoneIsValid) {
				this.setState({phoneNumber: phoneNumber.number});
			}
			return phoneIsValid;
		}
		return false;
	};
	
	changeValue = value => {
		return this.setState({value}, () => this.setState({phoneIsValid: this.phoneIsValid()}));
	};
	
	confirmCode = () => this.props.navigation.navigate('ConfirmCode');
	
	render() {
		return (
			<ScreenContainer style={styles.page}>
				<Shadow style={styles.pageInner}>
					<ScrollView
						scrollEnabled={true}
						contentContainerStyle={{flexGrow: 1}}
						keyboardShouldPersistTaps='handled'
					>
						<H1 style={styles.title}>{translate('enterYourPhone')}</H1>
						<View style={styles.phone}>
							<View style={styles.phoneCode}>
								<Image
									style={styles.flag}
									source={countries[this.props.location].flag}
									resizeMode='contain'/>
								<Text>{countries[this.props.location].code}</Text>
							</View>
							<TextInputMask
								autoFocus={true}
								keyboardType='phone-pad'
								underlineColorAndroid='transparent'
								autoCorrect={false}
								type={'custom'}
								options={{mask: countries[this.props.location].phoneMask}}
								value={this.state.value}
								onChangeText={this.changeValue}
								style={styles.phoneInput}
							/>
						</View>
						<Bold style={styles.info}>{translate('SmsInfo')}</Bold>
						<View style={styles.footer}>
							<Button
								disabled={!this.state.phoneIsValid}
								onPress={this.confirmCode}
								title={translate('getCode')}/>
						</View>
					</ScrollView>
				</Shadow>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	location: state.profile.location,
});

export default connect(mapStateToProps, null)(RegisterScreen);
