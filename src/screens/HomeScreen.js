import React from 'react';
import { Button, View } from 'react-native';

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Button title="Go to ShoppingCard"
						onPress={() => this.props.navigation.navigate('Login')}
				/>
			</View>
		);
	}
}

export default HomeScreen;
