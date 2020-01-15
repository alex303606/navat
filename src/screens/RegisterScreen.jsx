import React, { Component } from 'react';
import { H1 } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import { Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { countries } from '../../config';

class RegisterScreen extends Component {
	emptyMethod = () => null;
	state = {
		value: '',
	};
	
	changeValue = value => {
		let x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})/);
		const xxx = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		return this.setState({value: `${xxx}`});
	};
	
	render() {
		return (
			<ScreenContainer>
				<H1 style={{textAlign: 'center'}}>Register Screen</H1>
				<Image style={{width: 100, height: 60}} source={countries[this.props.location].flag} resizeMode='contain'/>
				<TextInput
					style={{borderWidth: 1, height: 30}}
					value={this.state.value}
					onChangeText={this.changeValue}
					underlineColorAndroid='transparent'
				/>
				<Button
					buttonStyle={{marginTop: 18}}
					onPress={() => this.emptyMethod}
					title='Получить код'/>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	location: state.profile.location,
});

export default connect(mapStateToProps, null)(RegisterScreen);
