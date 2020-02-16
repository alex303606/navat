import React from 'react';
import { connect } from 'react-redux';
import NavigationService from '../utils/NavigationService';
import AppNavigator from './AppNavigator';
import AppWithNavigationState from './AppWithNavigationState';

const AppNavigationState = (props) => {
	if (props.profile && props.profile.userIsLoggedIn && props.profile.guideViewed) {
		return <AppWithNavigationState/>;
	}
	return (
		<AppNavigator ref={navigatorRef => {
			NavigationService.setTopLevelNavigator(navigatorRef);
		}}/>
	);
};

const mapStateToProps = state => ({
	profile: state.profile,
});

export default connect(mapStateToProps, null)(AppNavigationState);
