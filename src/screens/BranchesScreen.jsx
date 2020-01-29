import React from 'react';
import { View } from 'react-native';
import Carousel from '../components/Carousel';
import { connect } from 'react-redux';
import config from '../../config';

const BranchesScreen = props => {
	return (
		<View style={{flex: 1, backgroundColor: config.BackgroundColor}}>
			<Carousel vertical items={props.branches}/>
		</View>
	);
};

const mapStateToProps = state => ({
	branches: state.menu.branches,
});

export default connect(mapStateToProps, null)(BranchesScreen);
