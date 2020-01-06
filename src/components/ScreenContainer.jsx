import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
});

const ScreenContainer = props => {
	return (
		<SafeAreaView forceInset={{bottom: 'always', top: 'never'}} style={styles.page}>
			<StatusBar
				backgroundColor='white'
				barStyle='dark-content'
			/>
			<View style={styles.page}>
				{props.children}
			</View>
		</SafeAreaView>
	);
};

export default ScreenContainer;
