import React from 'react';
import { connect } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import ProfileNavigator from './ProfileNavigator';

const ProfileNavigationState = (props) => {
	if (props.profile && props.profile.userIsLoggedIn) {
		return <ProfileNavigator/>;
	}
	return <AuthNavigator/>;
};

const mapStateToProps = state => ({
	profile: state.profile,
});

export default connect(mapStateToProps, null)(ProfileNavigationState);
