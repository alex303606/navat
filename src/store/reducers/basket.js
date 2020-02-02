import { ADD_TO_BASKET, CLEAR_BASKET } from '../actions/actionTypes';

const initialState = {
	items: [],
	totalPrice: 0,
};

const basketReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_BASKET:
			const items = [...state.items];
			const index = state.items.findIndex(x => x.id === action.item.id);
			if (index >= 0) {
				++items[index].amount;
			} else {
				items.push({...action.item, amount: 1});
			}
			const reducer = (acc, item) => {
				if (!!item.amount) {
					return acc + (item.price * item.amount);
				}
				return acc + item.price;
			};
			const totalPrice = items.reduce(reducer, 0);
			return {...state, items, totalPrice};
		case CLEAR_BASKET:
			return {...state, items: [], totalPrice: 0};
		default:
			return state;
	}
};

export default basketReducer;
