import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppNavigator from './AppNavigator';
import AppWithNavigationState from './AppWithNavigationState';
import { bindActionCreators } from 'redux';
import { initMenu } from '../store/actions/menu';
import { countries } from '../../config';
import axios from 'axios';

const AppNavigationState = (props) => {
	useEffect(() => {
		if(!!props.profile.location) {
			axios.defaults.baseURL = countries[props.profile.location].apiUrl;
			props.initMenu();
		}
	});
	
	if (props.profile && props.profile.guideViewed) {
		return (
			<AppWithNavigationState/>
		);
	}
	return (
		<AppNavigator/>
	);
};

const mapStateToProps = state => ({
	profile: state.profile,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			initMenu,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigationState);
