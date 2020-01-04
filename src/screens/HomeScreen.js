import React from 'react';
import { Button, View, Text } from 'react-native';
import { switchLanguage, translate } from "../localization/i18n";

class HomeScreen extends React.Component {
	changeLang = value => {
		switchLanguage(value, this);
	};
	render() {
		return (
			<View style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center'
			}}>
				<Text>{translate('selectLanguage')}</Text>
				<Button title="Go to ShoppingCard"
						onPress={() => this.props.navigation.navigate('Login')}
				/>
				<Button onPress={() => this.changeLang('ru')} title='Русский'/>
				<Button onPress={() => this.changeLang('en')} title='English'/>
			</View>
		);
	}
}

export default HomeScreen;
