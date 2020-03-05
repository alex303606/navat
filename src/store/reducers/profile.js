import {
	SELECT_LOCATION,
	SIGN_IN,
	SIGN_OUT,
	GUIDE_VIEWED,
	CHANGED_AVATAR,
	CHANGED_BIRTHDAY,
	CHANGED_FIO,
	CHANGED_PHONE, CHANGED_EMAIL, SAVE_CARD, SET_DEFAULT_CARD, DELETE_CARD,
} from '../actions/actionTypes';
import config from '../../../config';

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

const initialState = {
	location: config.InitLocation,
	user: {},
	userIsLoggedIn: false,
	guideViewed: false,
	addresses: addresses,
	fio: '',
	email: '',
	avatar: {uri: ''},
	birthday: '',
	phone: {
		phone: '',
		code: '',
	},
	cards: [],
};

const userReducer = (state = initialState, action) => {
	const saveCard = (state, action) => {
		const cards = [...state.cards];
		if (!cards.length) {
			action.card.default = true;
		}
		cards.push(action.card);
		return cards;
	};
	
	const setDefaultCard = (state, action) => {
		const cards = [...state.cards];
		return cards.map(card => {
			card.default = card.number === action.card.number;
			return card;
		});
	};
	
	const deleteCard = (state, action) => {
		const cards = [...state.cards];
		const index = cards.findIndex(card => card.number === action.card.number);
		if (index > -1) {
			cards.splice(index, 1);
		}
		if (cards.length === 1) {
			cards[0].default = true;
		}
		return cards;
	};
	
	switch (action.type) {
		case SELECT_LOCATION:
			return {...state, location: action.location};
		case SIGN_IN:
			return {...state, user: action.user, userIsLoggedIn: true};
		case SIGN_OUT:
			return initialState;
		case GUIDE_VIEWED:
			return {...state, guideViewed: true};
		case CHANGED_AVATAR:
			return {...state, avatar: action.avatar};
		case CHANGED_BIRTHDAY:
			return {...state, birthday: action.birthday};
		case CHANGED_FIO:
			return {...state, fio: action.fio};
		case CHANGED_PHONE:
			return {...state, phone: action.phone};
		case CHANGED_EMAIL:
			return {...state, email: action.email};
		case SAVE_CARD:
			return {...state, cards: saveCard(state, action)};
		case SET_DEFAULT_CARD:
			return {...state, cards: setDefaultCard(state, action)};
		case DELETE_CARD:
			return {...state, cards: deleteCard(state, action)};
		default:
			return state;
	}
};

export default userReducer;
