import React, { Component } from 'react';
import { H1, H3, Label, SmallText } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import { Keyboard, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import Button from '../components/Button';
import config from '../../config';
import { translate } from '../localization/i18n';
import CustomModal from '../components/CustomModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';

Icon.loadFont();
IonIcon.loadFont();

const styles = StyleSheet.create({
	textStyle: {
		fontWeight: '500',
		fontSize: 15,
		lineHeight: 18,
		color: 'white',
	},
	page: {
		flex: 1,
		paddingVertical: 25,
	},
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
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
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingTop: 20,
	},
});

class LoginScreen extends Component {
	state = {
		modalVisible: false,
		passwordSecure: true,
		login: '',
		password: '',
		keyboardIsVisible: false,
	};
	
	keyboardDidShowListener;
	keyboardDidHideListener;
	
	componentDidMount() {
		this.keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			this.keyboardDidShow,
		);
		this.keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			this.keyboardDidHide,
		);
	}
	
	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}
	
	keyboardDidShow = () => {
		this.setState({keyboardIsVisible: true});
	};
	
	keyboardDidHide = () => {
		this.setState({keyboardIsVisible: false});
	};
	
	emptyMethod = () => null;
	
	toggleModal = () => this.setState({modalVisible: !this.state.modalVisible});
	
	changeLogin = login => this.setState({login});
	
	changePassword = password => this.setState({password});
	
	changePasswordSecure = () => this.setState({passwordSecure: !this.state.passwordSecure});
	
	renderChangePasswordSecureButton = () => (
		<TouchableOpacity
			style={styles.rightBtn}
			activeOpacity={0.7}
			onPress={this.changePasswordSecure}>
			<IonIcon
				style={styles.iconEye}
				name={this.state.passwordSecure ? 'ios-eye-off' : 'ios-eye'}
				size={30}
				color={config.GreyColor}
			/>
		</TouchableOpacity>
	);
	
	render() {
		return (
			<ScreenContainer style={styles.page}>
				<View style={styles.container}>
					<H3 style={{marginBottom: 10}}>
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
				<CustomModal
					modalVisible={this.state.modalVisible}
					setModalVisible={this.toggleModal}
					modalStyle={{flex: this.state.keyboardIsVisible ? 1 : 0.85}}
					keyboardIsVisible={this.state.keyboardIsVisible}
				>
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
						scrollEnabled={true}
						contentContainerStyle={{
							flex: this.state.keyboardIsVisible ? 0 : 1,
						}}
					>
						<H1 style={styles.modalTitle}>{translate('enter')}</H1>
						<Input
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
							buttonStyle={{backgroundColor: config.MainColor}}
							textStyle={styles.textStyle}
							onPress={this.emptyMethod}
							title={translate('signIn')}
						/>
						<View style={[styles.footer, {flex: this.state.keyboardIsVisible ? 0 : 1}]}>
							<Button
								buttonStyle={{backgroundColor: config.InactiveColor}}
								textStyle={styles.textStyle}
								onPress={this.emptyMethod}
								title={translate('signUp')}
							/>
						</View>
					</ScrollView>
				</CustomModal>
			</ScreenContainer>
		);
	}
}

export default LoginScreen;
