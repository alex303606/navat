import { Provider } from 'react-redux';
import React from 'react';
import { persistor, store } from './store/configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const LoadingView = () => (
	<View style={styles.container}>
		<ActivityIndicator size="large" color="#0000ff"/>
	</View>
);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<LoadingView/>} persistor={persistor}>
					<AppNavigator/>
				</PersistGate>
			</Provider>
		);
	}
}
