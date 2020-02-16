import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './reducers/profile';
import menuReducer from './reducers/menu';
import basketReducer from './reducers/basket';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import RootNavigation from '../navigation/RootNavigation';
import navigationMiddleware from './navigationMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const navReducer = createNavigationReducer(RootNavigation);
const middleware = [
	navigationMiddleware,
	thunkMiddleware,
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const appReducer = combineReducers({
	profile: profileReducer,
	menu: menuReducer,
	basket: basketReducer,
	nav: navReducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: [
		'nav',
	],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
