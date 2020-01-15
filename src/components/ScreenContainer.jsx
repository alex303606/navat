import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import config from '../../config';
import PropTypes from 'prop-types';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		paddingHorizontal: 10,
	},
});

const ScreenContainer = props => {
	const space = Platform.select({
		ios: -(config.TabBarHeight + getBottomSpace()),
		android: -35,
	});
	
	return (
		<SafeAreaView forceInset={{bottom: 'always', top: 'never'}} style={styles.page}>
			<StatusBar
				backgroundColor={config.BackgroundColor}
				barStyle='dark-content'
			/>
			<View style={[styles.page, props.style]}>
				{props.children}
			</View>
			<KeyboardSpacer
				style={{backgroundColor: 'white'}}
				topSpacing={space}
			/>
		</SafeAreaView>
	);
};

ScreenContainer.propTypes = {
	style: PropTypes.object,
};

export default ScreenContainer;
