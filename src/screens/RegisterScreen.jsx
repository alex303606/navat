import React, { Component } from 'react';
import { H1 } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';

class RegisterScreen extends Component {
	render() {
		return (
			<ScreenContainer>
				<H1 style={{textAlign: 'center'}}>Register Screen</H1>
				<Button
					buttonStyle={{marginTop: 18}}
					onPress={() => props.navigation.navigate('HomeScreen')}
					title='GO HOME'/>
			</ScreenContainer>
		);
	}
}

export default RegisterScreen;
