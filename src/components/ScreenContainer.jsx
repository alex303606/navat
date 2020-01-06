import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import config from '../../config';

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		paddingHorizontal: 10,
	},
});

const ScreenContainer = props => {
	return (
		<SafeAreaView forceInset={{bottom: 'always', top: 'never'}} style={styles.page}>
			<StatusBar
				backgroundColor={config.BackgroundColor}
				barStyle='dark-content'
			/>
			<View style={styles.page}>
				{props.children}
			</View>
		</SafeAreaView>
	);
};

export default ScreenContainer;
