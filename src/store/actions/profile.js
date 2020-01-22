import {
	GUIDE_VIEWED,
	SELECT_LOCATION,
	SIGN_IN,
	SIGN_OUT,
} from './actionTypes';
import NavigationService from '../../utils/NavigationService';

export const selectLocation = location => {
	return dispatch => {
		dispatch({type: SELECT_LOCATION, location});
	};
};

export const signIn = () => {
	return dispatch => {
		dispatch({type: SIGN_IN, user: {}});
		NavigationService.navigate('Guide');
	};
};

export const signOut = () => {
	return dispatch => {
		dispatch({type: SIGN_OUT});
	};
};

export const setGuideIsViewed = () => {
	return dispatch => {
		dispatch({type: GUIDE_VIEWED});
	};
};
