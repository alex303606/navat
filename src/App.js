import { Provider } from 'react-redux';
import React from 'react';
import { persistor, store } from './store/configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Dimensions } from 'react-native';
import AppNavigationState from './navigation/AppNavigationState';
import EStyleSheet from 'react-native-extended-stylesheet';
import Loader from './components/Loader';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 414});

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<Loader/>} persistor={persistor}>
					<AppNavigationState/>
				</PersistGate>
			</Provider>
		);
	}
}
