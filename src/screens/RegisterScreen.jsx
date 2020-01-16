import React, { Component } from 'react';
import { Bold, H1, Text } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import ReactNative, { Image, ScrollView, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { TextInputMask } from 'react-native-masked-text';
import config, { countries } from '../../config';
import Shadow from '../components/Shadow';
import { translate } from '../localization/i18n';

const styles = ReactNative.StyleSheet.create({
	page: {
		paddingVertical: 5,
		justifyContent: 'flex-end',
	},
	pageInner: {
		flex: 1,
		marginTop: 10,
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 18,
	},
	phone: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 34,
	},
	phoneCode: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(30,129,73,0.1)',
		borderRadius: 5,
		paddingHorizontal: 10,
		height: 36,
		marginRight: 15,
	},
	flag: {
		width: 33,
		height: 20,
		marginRight: 6,
	},
	phoneInput: {
		backgroundColor: 'rgba(30,129,73,0.1)',
		height: 36,
		paddingHorizontal: 10,
		paddingVertical: 0,
		flexGrow: 1,
		fontSize: 18,
	},
	title: {
		paddingTop: 48,
		textAlign: 'center',
		marginBottom: 64,
	},
	info: {
		textAlign: 'center',
		marginBottom: 34,
	},
	footer: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
});

class RegisterScreen extends Component {
	emptyMethod = () => null;
	state = {
		value: '',
	};
	
	changeValue = value => {
		return this.setState({value});
	};
	
	render() {
		return (
			<ScreenContainer style={styles.page}>
				<Shadow style={styles.pageInner}>
					<ScrollView
						scrollEnabled={true}
						contentContainerStyle={{flexGrow: 1}}
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
								buttonStyle={{backgroundColor: config.InactiveColor}}
								textStyle={{color: config.MainColor}}
								onPress={() => this.emptyMethod}
								title='Получить код'/>
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
