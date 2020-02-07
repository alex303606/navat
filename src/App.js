import { Provider } from 'react-redux';
import React from 'react';
import { persistor, store } from './store/configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ActivityIndicator, View, Dimensions } from 'react-native';
import AppNavigationState from './navigation/AppNavigationState';
import config from '../config';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 414});

const styles = EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const LoadingView = () => (
	<View style={styles.container}>
		<ActivityIndicator size="large" color={config.LoaderColor}/>
	</View>
);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<LoadingView/>} persistor={persistor}>
					<AppNavigationState/>
				</PersistGate>
			</Provider>
		);
	}
}

module.hot.accept(() => {
	EStyleSheet.clearCache();
	EStyleSheet.build();
});
