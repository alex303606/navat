import { SELECT_LOCATION } from './actionTypes';

export const selectLocation = location => {
	return dispatch => {
		dispatch({type: SELECT_LOCATION, location});
	}
};
