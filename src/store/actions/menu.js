import { INIT_MENU } from './actionTypes';

export const initMenu = () => {
	return dispatch => {
		dispatch({type: INIT_MENU});
	};
};
