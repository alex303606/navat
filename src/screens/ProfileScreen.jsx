import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import config from '../../config';
import Button from '../components/Button';
import { bindActionCreators } from 'redux';
import { signOut } from '../store/actions/profile';

const ProfileScreen = (props) => {
	return (
		<View>
			<Button
				buttonStyle={{backgroundColor: config.MainColor}}
				textStyle={{color: 'white'}}
				onPress={props.signOut}
				title='Exit from application'
			/>
		</View>
	);
};

const mapStateToProps = state => ({
	profile: state.profile,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			signOut,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
