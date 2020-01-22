import React, { Component, createRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';
import { H1, Text } from '../components/Texts';
import Shadow from '../components/Shadow';
import ScreenContainer from '../components/ScreenContainer';
import Link from '../components/Link';
import { bindActionCreators } from 'redux';
import { signIn } from '../store/actions/profile';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	page: {
		paddingVertical: 5,
		justifyContent: 'flex-end',
	},
	pageInner: {
		flex: 1,
		marginTop: 10,
		backgroundColor: 'white',
		borderRadius: 8,
		paddingHorizontal: 18,
		paddingTop: 49,
		paddingBottom: 18,
	},
	inputWrapStyle: {
		height: 60,
		marginBottom: 38,
	},
	input: {
		borderBottomWidth: 4,
		borderColor: '#EFEFF4',
		color: '#fff',
		fontSize: 30,
		fontWeight: '600',
	},
	inputNotEmpty: {
		backgroundColor: 'white',
		color: '#000',
	},
	title: {
		textAlign: 'center',
		marginBottom: 64,
	},
	resendCode: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	errorCode: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 38,
	},
	errorText: {
		color: 'red',
		fontWeight: '600',
	},
});

class ConfirmCodeScreen extends Component {
	
	state = {
		codeIsSuccessful: false,
		codeIsInvalid: false,
	};
	
	onFinishCheckingCode = code => {
		if (code === '1234') {
			this.props.signIn();
			//this.props.navigation.navigate('Guide');
			// return this.setState({codeIsSuccessful: true});
		}
		
		return this.setState({codeIsInvalid: true}, () => this.codeInputRef.current.clear());
	};
	
	cellProps = ({hasValue}) => ({style: hasValue ? [styles.input, styles.inputNotEmpty] : styles.input});
	
	codeInputRef = createRef();
	
	render() {
		return (
			<ScreenContainer style={styles.page}>
				<Shadow style={styles.pageInner}>
					<ScrollView
						scrollEnabled={true}
						contentContainerStyle={{flexGrow: 1}}
					>
						<H1 style={styles.title}>
							Для проверки вашего номера
							ведите ваш код
						</H1>
						<CodeFiled
							autoFocus={true}
							ignoreCase={true}
							ref={this.codeInputRef}
							inputPosition="full-width"
							caretHidden={true}
							variant="border-b"
							codeLength={4}
							size={60}
							returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
							keyboardType={'numeric'}
							cellProps={this.cellProps}
							containerProps={{style: styles.inputWrapStyle}}
							onFulfill={this.onFinishCheckingCode}
						/>
						{this.state.codeIsInvalid &&
						<View style={styles.errorCode}>
							<Text style={styles.errorText}>Не верный код</Text>
						</View>
						}
						<View style={styles.resendCode}>
							<Text>Не получили код? </Text>
							<Link onPress={() => null} title={'Отправить ещё раз'}/>
						</View>
						{/*<View style={styles.footer}>*/}
						{/*	<Button*/}
						{/*		disabled={!this.state.codeIsSuccessful}*/}
						{/*		buttonStyle={{marginTop: 41}}*/}
						{/*		onPress={() => null}*/}
						{/*		title='Продолжить'/>*/}
						{/*</View>*/}
					</ScrollView>
				</Shadow>
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

export default connect(null, mapDispatchToProps)(ConfirmCodeScreen);
