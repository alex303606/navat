import { CLEAR_BASKET, ADD_TO_BASKET } from './actionTypes';

export const addToBasket = item => {
	return dispatch => {
		dispatch({type: ADD_TO_BASKET, item});
	};
};

export const clearBasket = () => {
	return dispatch => {
		dispatch({type: CLEAR_BASKET});
	};
};
