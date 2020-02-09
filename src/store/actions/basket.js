import { CLEAR_BASKET, ADD_TO_BASKET, INCREASE_BASKET_ITEM, DECREASE_BASKET_ITEM, DELETE_BASKET_ITEM } from './actionTypes';

export const addToBasket = (item, additionalItem) => {
	return dispatch => {
		dispatch({type: ADD_TO_BASKET, item, additionalItem});
	};
};

export const clearBasket = () => {
	return dispatch => {
		dispatch({type: CLEAR_BASKET});
	};
};

export const increaseItem = (id) => {
	return dispatch => {
		dispatch({type: INCREASE_BASKET_ITEM, id});
	};
};

export const decreaseItem = (id) => {
	return dispatch => {
		dispatch({type: DECREASE_BASKET_ITEM, id});
	};
};

export const deleteItem = (id) => {
	return dispatch => {
		dispatch({type: DELETE_BASKET_ITEM, id});
	};
};
