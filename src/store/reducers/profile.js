import {
	SELECT_LOCATION,
	SIGN_IN,
	SIGN_OUT,
	GUIDE_VIEWED,
	CHANGED_AVATAR,
	CHANGED_BIRTHDAY,
	CHANGED_FIO,
	CHANGED_PHONE,
	CHANGED_EMAIL,
	SAVE_CARD,
	SET_DEFAULT_CARD,
	DELETE_CARD,
	SAVE_ADDRESSES,
} from '../actions/actionTypes';

const initialState = {
	location: '',
	userIsLoggedIn: false,
	guideViewed: false,
	addresses: [
		{
			type: 'home',
			address: '',
			description: '',
		},
		{
			type: 'office',
			address: '',
			description: '',
		},
	],
	fio: '',
	email: '',
	avatar: {uri: ''},
	birthday: '',
	phone: '',
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
			return {...state, userIsLoggedIn: true};
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
		case SAVE_ADDRESSES:
			return {...state, addresses: action.addresses};
		default:
			return state;
	}
};

export default userReducer;
