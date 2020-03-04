import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const Loader = () => (
	<View style={styles.container}>
		<ActivityIndicator size="large" color={config.LoaderColor}/>
	</View>
);

export default Loader;
