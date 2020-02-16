import React, { Fragment } from 'react';
import { BackHandler, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import RootNavigation from './RootNavigation';
import { NavigationActions } from 'react-navigation';
import config from '../../config';

class AppWithNavigationState extends React.Component {
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
	}
	
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
	}
	
	onBackPress = () => {
		const {dispatch} = this.props;
		dispatch(NavigationActions.back());
		return true;
	};
	
	render() {
		const AppContainer = createReduxContainer(RootNavigation);
		const {nav, dispatch} = this.props;
		
		return (
			<Fragment>
				<StatusBar
					backgroundColor={config.BackgroundColor}
					barStyle='dark-content'
				/>
				<AppContainer state={nav} dispatch={dispatch}/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({nav: state.nav});

export default connect(mapStateToProps)(AppWithNavigationState);
