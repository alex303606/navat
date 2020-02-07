import React from 'react';
import {
	View,
	ImageBackground,
	SafeAreaView,
	Image,
	BackHandler,
	StatusBar,
} from 'react-native';
import { switchLanguage } from '../localization/i18n';
import Button from '../components/Button';
import { H1 } from '../components/Texts';
import EStyleSheet from 'react-native-extended-stylesheet';

const backGround = require('../assets/images/background.png');
const logo = require('../assets/images/logo.png');

const styles = EStyleSheet.create({
	page: {
		flex: 1,
	},
	backGround: {
		width: '100%',
		height: '100%',
	},
	container: {
		flex: 1,
		paddingVertical: '30rem',
		flexDirection: 'column',
		alignItems: 'center',
	},
	containerInner: {
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: '60rem',
	},
	title: {
		color: 'white',
	},
	$defaultMarginTop: '18rem',
	$marginBottom: '13rem',
});

class SelectLanguageScreen extends React.Component {
	changeLang = value => {
		switchLanguage(value, this);
		this.props.navigation.navigate('Auth');
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
							<H1 style={[styles.title, {marginBottom: styles.$marginBottom}]}>Select language</H1>
							<Button
								textStyle={{color: 'black'}}
								buttonStyle={{backgroundColor: 'white', marginTop: styles.$defaultMarginTop}}
								onPress={() => this.changeLang('ru')}
								title='Русский'/>
							<Button
								textStyle={{color: 'black'}}
								buttonStyle={{backgroundColor: 'white', marginTop: styles.$defaultMarginTop}}
								onPress={() => this.changeLang('en')}
								title='English'/>
							<Button
								textStyle={{color: 'black'}}
								buttonStyle={{backgroundColor: 'white', marginTop: styles.$defaultMarginTop}}
								onPress={() => this.changeLang('kg')}
								title='Кыргыз тили'/>
							<Button
								textStyle={{color: 'black'}}
								buttonStyle={{backgroundColor: 'white', marginTop: styles.$defaultMarginTop}}
								onPress={() => this.changeLang('kz')}
								title='Қазақ тілі'/>
							<Button
								textStyle={{color: 'black'}}
								buttonStyle={{backgroundColor: 'white', marginTop: styles.$defaultMarginTop}}
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
