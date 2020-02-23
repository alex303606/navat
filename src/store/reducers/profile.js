import {
	SELECT_LOCATION,
	SIGN_IN,
	SIGN_OUT,
	GUIDE_VIEWED,
	CHANGED_AVATAR,
} from '../actions/actionTypes';
import config from '../../../config';

const initialState = {
	location: config.InitLocation,
	user: {},
	userIsLoggedIn: false,
	guideViewed: false,
	addresses: [],
	avatar: {
		uri: '',
	},
};

const addresses = [
	{
		id: '1',
		type: 'home',
		city: 'Бишкек',
		address: 'ул. Байтик-баатыра 106 кв. 187',
		description: 'Дом',
	},
	{
		id: '2',
		type: 'office',
		city: 'Бишкек',
		address: 'ул. Донецкая 1Б кв. 3',
		description: 'Работа',
	},
];

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SELECT_LOCATION:
			return {...state, location: action.location};
		case SIGN_IN:
			return {...state, user: action.user, userIsLoggedIn: true, addresses};
		case SIGN_OUT:
			return initialState;
		case GUIDE_VIEWED:
			return {...state, guideViewed: true};
		case CHANGED_AVATAR:
			return {...state, avatar: action.avatar};
		default:
			return state;
	}
};

export default userReducer;
