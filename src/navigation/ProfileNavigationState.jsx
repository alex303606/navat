import React from 'react';
import { connect } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import PersonalAreaNavigator from './PersonalAreaNavigator';

const ProfileNavigationState = (props) => {
	if (props.profile && props.profile.userIsLoggedIn) {
		return <PersonalAreaNavigator/>;
	}
	return <AuthNavigator/>;
};

const mapStateToProps = state => ({
	profile: state.profile,
});

export default connect(mapStateToProps, null)(ProfileNavigationState);
