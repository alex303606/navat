import React, { Component } from 'react';
import { H1, H3, Label, SmallText } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import { StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
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

Icon.loadFont();
IonIcon.loadFont();

const styles = StyleSheet.create({
	page: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	textStyle: {
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 18,
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
		paddingHorizontal: 15,
		paddingVertical: 25,
		borderRadius: 8,
		flex: 1,
	},
	modalHeader: {
		marginBottom: 20,
	},
	btnClose: {
		width: 25,
		height: 25,
		position: 'relative',
	},
	rightBtn: {
		width: 30,
		height: 30,
		position: 'relative',
	},
	iconClose: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -18,
		marginLeft: -18,
	},
	iconEye: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -15,
		marginLeft: -15,
	},
	modalTitle: {
		marginBottom: 28,
	},
	remind: {
		marginTop: 8,
		marginBottom: 23,
	},
	footer: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingTop: 20,
	},
	content: {
		flex: 1,
		paddingVertical: 25,
	},
	modalWrap: {
		paddingVertical: 5,
		flex: 1,
		marginTop: 10,
	},
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
				size={30}
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
						<H3 style={{marginBottom: 10}}>
							{translate('youAreNotLoggedIn')}
						</H3>
						<SmallText style={{textAlign: 'center'}}>
							{translate('loginOrRegister')}
						</SmallText>
					</View>
					< Button
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
									size={36}
									color={config.MainColor}
								/>
							</TouchableOpacity>
						</View>
						<ScrollView
							keyboardShouldPersistTaps='handled'
							scrollEnabled={true}
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
