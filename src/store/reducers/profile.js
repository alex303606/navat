import {
	SELECT_LOCATION,
} from "../actions/actionTypes";
import config from '../../../config';

const initialState = {
	location: config.InitLocation,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_LOCATION:
			return {...state, location: action.location};
		default:
			return state;
	}
};

export default userReducer;
