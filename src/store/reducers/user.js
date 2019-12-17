import {
	LOGIN_USER_FAILURE,
	LOGIN_USER_SUCCESS,
	LOGOUT_USER,
	NEW_USER_FAILURE,
	NEW_USER_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
	loginError: null,
	user: null,
	token: null,
	newUser: {},
	newUserError: null
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER_SUCCESS:
			return {...state, user: action.user, token: action.token, loginError: null};
		case LOGIN_USER_FAILURE:
			return {...state, loginError: action.error};
		case NEW_USER_SUCCESS:
			return {...state, newUser: action.newUser};
		case NEW_USER_FAILURE:
			return {...state, newUserError: action.newUserError};
		case LOGOUT_USER:
			return {...state, user: null, token: null};
		default:
			return state;
	}
};

export default userReducer;
