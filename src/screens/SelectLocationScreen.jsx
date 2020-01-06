import React from 'react';
import { Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { H1 } from '../components/Texts';
import Button from '../components/Button';

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
		marginBottom: 13,
	},
});

class SelectLocationScreen extends React.Component {
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
							<H1 style={styles.title}>Выберите город</H1>
							<Button
								buttonStyle={{marginBottom: 18}}
								title='Алматы'
								onPress={() => this.props.navigation.navigate('SelectLanguage')}
							/>
							<Button
								style={{backGroundColor: 'white'}}
								title='Бишкек'
								onPress={() => this.props.navigation.navigate('SelectLanguage')}
							/>
						</View>
					</View>
				</SafeAreaView>
			</ImageBackground>
		);
	}
}

export default SelectLocationScreen;
