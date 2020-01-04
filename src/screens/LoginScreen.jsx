import React from 'react';
import { Button, View } from 'react-native';
import { translate } from '../localization/i18n';

class LoginScreen extends React.Component {
	render() {
		return (
			<View style={{
				flex: 1,
				alignItems:'center',
				justifyContent:'center'
			}}>
				<Button title={translate('menu')}
						onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}

export default LoginScreen;
