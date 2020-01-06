import React from 'react';
import { View, ImageBackground, SafeAreaView, Image, StyleSheet, BackHandler, StatusBar } from 'react-native';
import { switchLanguage } from '../localization/i18n';
import Button from '../components/Button';
import { H1 } from '../components/Texts';

const backGround = require('../assets/images/background.png');
const logo = require('../assets/images/logo.png');
const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	backGround: {
		width: '100%',
		height: '100%',
	},
	container: {
		flex: 1,
		paddingVertical: 30,
		flexDirection: 'column',
		alignItems: 'center',
	},
	containerInner: {
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 60,
	},
	title: {
		color: 'white',
	},
});

class SelectLanguageScreen extends React.Component {
	changeLang = value => {
		switchLanguage(value, this);
		this.props.navigation.navigate('Root');
	};
	
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
	}
	
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
	}
	
	onBackButtonPressed = () => true;
	
	render() {
		return (
			<ImageBackground source={backGround} style={styles.backGround}>
				<StatusBar
					backgroundColor='black'
					barStyle='light-content'
				/>
				<SafeAreaView forceInset={{bottom: 'always', top: 'never'}} style={styles.page}>
					<View style={styles.container}>
						<Image source={logo} resizeMode='contain'/>
						<View style={styles.containerInner}>
							<H1 style={styles.title}>Выберите язык</H1>
							<H1 style={[styles.title, {marginBottom: 13}]}>Select language</H1>
							<Button
								buttonStyle={{marginBottom: 18}}
								onPress={() => this.changeLang('ru')}
								title='Русский'/>
							<Button
								buttonStyle={{marginBottom: 18}}
								onPress={() => this.changeLang('en')}
								title='English'/>
							<Button
								buttonStyle={{marginBottom: 18}}
								onPress={() => this.changeLang('kg')}
								title='Кыргыз тили'/>
							<Button
								buttonStyle={{marginBottom: 18}}
								onPress={() => this.changeLang('kz')}
								title='Қазақ тілі'/>
							<Button
								buttonStyle={{marginBottom: 18}}
								onPress={() => this.changeLang('tr')}
								title='Türk dili'/>
						</View>
					</View>
				</SafeAreaView>
			</ImageBackground>
		);
	}
}

export default SelectLanguageScreen;
