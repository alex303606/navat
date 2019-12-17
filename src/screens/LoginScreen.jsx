import React from 'react';
import { Button, View } from 'react-native';

class LoginScreen extends React.Component {
	render() {
		return (
			<View style={{
				flex: 1,
				alignItems:'center',
				justifyContent:'center'
			}}>
				<Button title="Go to Login"
						onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}

export default LoginScreen;
