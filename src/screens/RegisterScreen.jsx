import React, { Component } from 'react';
import { H1 } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import { TextInput } from 'react-native';

class RegisterScreen extends Component {
	emptyMethod = () => null;
	state = {
		value: '',
	};
	
	changeValue = value => {
		let x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
		const xxx = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		return this.setState({value: `${xxx}`});
	};
	
	render() {
		return (
			<ScreenContainer>
				<H1 style={{textAlign: 'center'}}>Register Screen</H1>
				<TextInput
					style={{borderWidth: 1, height: 30}}
					value={this.state.value}
					onChangeText={this.changeValue}
					underlineColorAndroid='transparent'
				/>
				<Button
					buttonStyle={{marginTop: 18}}
					onPress={() => this.emptyMethod}
					title='Получить код'/>
			</ScreenContainer>
		);
	}
}

export default RegisterScreen;
