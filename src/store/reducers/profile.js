import {
	SELECT_LOCATION,
	SIGN_IN,
	SIGN_OUT,
	GUIDE_VIEWED,
} from '../actions/actionTypes';
import config from '../../../config';

const initialState = {
	location: config.InitLocation,
	user: {},
	userIsLoggedIn: false,
	guideViewed: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_LOCATION:
			return {...state, location: action.location};
		case SIGN_IN:
			return {...state, user: action.user, userIsLoggedIn: true};
		case SIGN_OUT:
			return initialState;
		case GUIDE_VIEWED:
			return {...state, guideViewed: true};
		default:
			return state;
	}
};

export default userReducer;
