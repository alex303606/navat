import React, { Component } from 'react';
import { H1, H3, Label, SmallText } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import { TouchableOpacity, View, ScrollView } from 'react-native';
import Button from '../components/Button';
import config from '../../config';
import { translate } from '../localization/i18n';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import Shadow from '../components/Shadow';
import { bindActionCreators } from 'redux';
import { signIn } from '../store/actions/profile';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';

Icon.loadFont();
IonIcon.loadFont();

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	textStyle: {
		fontFamily: getCustomFontFamilyByFontWeight(500),
		fontSize: '15rem',
		lineHeight: '18rem',
		color: 'white',
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		backgroundColor: 'white',
		paddingHorizontal: '15rem',
		paddingVertical: '25rem',
		borderRadius: '8rem',
		flex: 1,
	},
	modalHeader: {
		marginBottom: '20rem',
	},
	btnClose: {
		width: '25rem',
		height: '25rem',
		position: 'relative',
	},
	rightBtn: {
		width: '30rem',
		height: '30rem',
		position: 'relative',
	},
	iconClose: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-18rem',
		marginLeft: '-18rem',
	},
	iconEye: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-15rem',
		marginLeft: '-15rem',
	},
	modalTitle: {
		marginBottom: '28rem',
	},
	remind: {
		marginTop: '8rem',
		marginBottom: '23rem',
	},
	footer: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingTop: '20rem',
	},
	content: {
		flex: 1,
		paddingVertical: '25rem',
	},
	modalWrap: {
		paddingVertical: '5rem',
		flex: 1,
		marginTop: '10rem',
	},
	$size30: '30rem',
	$size36: '36rem',
	$10: '10rem',
});

class LoginScreen extends Component {
	state = {
		modalVisible: false,
		passwordSecure: true,
		login: '',
		password: '',
	};
	
	//signInHandler = () => this.props.navigation.navigate('Guide');
	signInHandler = () => this.props.signIn();
	
	toggleModal = () => this.setState({modalVisible: !this.state.modalVisible});
	
	changeLogin = login => this.setState({login});
	
	changePassword = password => this.setState({password});
	
	changePasswordSecure = () => this.setState({passwordSecure: !this.state.passwordSecure});
	
	goToRegistration = () => {
		this.toggleModal();
		this.props.navigation.navigate('Register');
	};
	
	renderChangePasswordSecureButton = () => (
		<TouchableOpacity
			style={styles.rightBtn}
			activeOpacity={0.7}
			onPress={this.changePasswordSecure}>
			<IonIcon
				style={styles.iconEye}
				name={this.state.passwordSecure ? 'ios-eye' : 'ios-eye-off'}
				size={styles.$size30}
				color={config.GreyColor}
			/>
		</TouchableOpacity>
	);
	
	render() {
		return (
			<ScreenContainer style={styles.page}>
				{!this.state.modalVisible &&
				<View style={styles.content}>
					<View style={styles.container}>
						<H3 style={{marginBottom: styles.$10}}>
							{translate('youAreNotLoggedIn')}
						</H3>
						<SmallText style={{textAlign: 'center'}}>
							{translate('loginOrRegister')}
						</SmallText>
					</View>
					<Button
						buttonStyle={{backgroundColor: config.MainColor}}
						textStyle={styles.textStyle}
						onPress={this.toggleModal}
						title={translate('enterOrRegister')}
					/>
				</View>
				}
				{this.state.modalVisible &&
				<View style={styles.modalWrap}>
					<Shadow style={styles.modal}>
						<View style={styles.modalHeader}>
							<TouchableOpacity
								style={styles.btnClose}
								activeOpacity={0.7}
								onPress={this.toggleModal}>
								<Icon
									style={styles.iconClose}
									name="close"
									size={styles.$size36}
									color={config.MainColor}
								/>
							</TouchableOpacity>
						</View>
						<ScrollView
							keyboardShouldPersistTaps='handled'
							scrollEnabled={true}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={{flexGrow: 1}}
						>
							<H1 style={styles.modalTitle}>{translate('enter')}</H1>
							<Input
								autoFocus={true}
								onChangeText={this.changeLogin}
								value={this.state.login}
								label={translate('loginText')}
							/>
							<Input
								onChangeText={this.changePassword}
								value={this.state.password}
								label={translate('password')}
								secure={this.state.passwordSecure}
								renderRightButton={this.renderChangePasswordSecureButton}
							/>
							<TouchableOpacity
								style={styles.remind}
								activeOpacity={0.7}>
								<Label style={{color: config.MainColor}}>{translate('remind')}</Label>
							</TouchableOpacity>
							<Button
								textStyle={styles.textStyle}
								onPress={this.signInHandler}
								title={translate('signIn')}
							/>
							<View style={styles.footer}>
								<Button
									textStyle={styles.textStyle}
									onPress={this.goToRegistration}
									title={translate('signUp')}
								/>
							</View>
						</ScrollView>
					</Shadow>
				</View>
				}
			</ScreenContainer>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			signIn,
		},
		dispatch);
};

export default connect(null, mapDispatchToProps)(LoginScreen);
