import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import config from '../../config';
import PropTypes from 'prop-types';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
	},
	innerPage: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		paddingHorizontal: '10rem',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
});

const ScreenContainer = props => {
	const space = Platform.select({
		ios: -(config.TabBarHeight + getBottomSpace()),
		android: -50,
	});
	
	return (
		<SafeAreaView forceInset={{bottom: 'always', top: 'never'}} style={styles.page}>
			<StatusBar
				backgroundColor={config.BackgroundColor}
				barStyle='dark-content'
			/>
			<View style={[styles.innerPage, props.style]}>
				{props.children}
			</View>
			<KeyboardSpacer
				style={{backgroundColor: config.BackgroundColor}}
				topSpacing={space}
			/>
		</SafeAreaView>
	);
};

ScreenContainer.propTypes = {
	style: PropTypes.object,
};

export default ScreenContainer;
