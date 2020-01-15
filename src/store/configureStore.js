import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunkMiddleware from 'redux-thunk';
import profileReducer from "./reducers/profile";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
	thunkMiddleware,
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const appReducer = combineReducers({
	profile: profileReducer,
});

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
