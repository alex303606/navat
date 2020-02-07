import React from 'react';
import { Image, ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import { H1 } from '../components/Texts';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLocation } from '../store/actions/profile';
import backGround from '../assets/images/background.png';
import logo from '../assets/images/logo.png';
import EStyleSheet from 'react-native-extended-stylesheet';

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
		marginBottom: '13rem',
	},
	$18: '18rem',
});

class SelectLocationScreen extends React.Component {
	selectLocation = location => () => {
		this.props.selectLocation(location);
		this.props.navigation.navigate('SelectLanguage');
	};
	
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
								buttonStyle={{marginBottom: styles.$18, backgroundColor: 'white'}}
								title='Алматы'
								textStyle={{color: 'black'}}
								onPress={this.selectLocation('KZ')}
							/>
							<Button
								buttonStyle={{backgroundColor: 'white'}}
								title='Бишкек'
								textStyle={{color: 'black'}}
								onPress={this.selectLocation('KG')}
							/>
						</View>
					</View>
				</SafeAreaView>
			</ImageBackground>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			selectLocation,
		},
		dispatch);
};

export default connect(null, mapDispatchToProps)(SelectLocationScreen);
