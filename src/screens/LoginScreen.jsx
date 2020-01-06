import React from 'react';
import { H1 } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';

const LoginScreen = (props) => {
	return (
		<ScreenContainer>
			<H1 style={{textAlign: 'center'}}>First Screen</H1>
			<Button
				buttonStyle={{marginTop: 18}}
				onPress={() => props.navigation.navigate('HomeScreen')}
				title='GO HOME'/>
		</ScreenContainer>
	);
};

export default LoginScreen;
