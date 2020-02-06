import {
	ADD_TO_BASKET,
	CLEAR_BASKET,
	DECREASE_BASKET_ITEM,
	DELETE_BASKET_ITEM,
	INCREASE_BASKET_ITEM,
} from '../actions/actionTypes';

const initialState = {
	items: [],
	totalPrice: 0,
};

const basketReducer = (state = initialState, action) => {
	const getTotalPrice = (items) => {
		const reducer = (acc, item) => {
			if (!!item.amount || item.amount === 0) {
				return acc + (item.price * item.amount);
			}
			return acc + item.price;
		};
		
		return items.reduce(reducer, 0);
	};
	
	const getItemsAfterDecrease = (items, id) => {
		const index = items.findIndex(item => item.id === id);
		if (items[index].amount === 0) {
			return [...items];
		}
		--items[index].amount;
		return [...items];
	};
	
	const getItemsAfterIncrease = (items, id) => {
		const index = items.findIndex(item => item.id === id);
		++items[index].amount;
		return [...items];
	};
	
	switch (action.type) {
		case ADD_TO_BASKET:
			const items = [...state.items];
			const index = state.items.findIndex(x => x.id === action.item.id);
			if (index >= 0) {
				++items[index].amount;
			} else {
				items.push({...action.item, amount: 1});
			}
			
			return {...state, items, totalPrice: getTotalPrice(items)};
		case CLEAR_BASKET:
			return {...state, items: [], totalPrice: 0};
		
		case DELETE_BASKET_ITEM:
			const filteredItems = [...state.items.filter(item => item.id !== action.id)];
			return {...state, items: filteredItems, totalPrice: 0};
		
		case INCREASE_BASKET_ITEM:
			const itemsAfterIncrease = getItemsAfterIncrease(state.items, action.id);
			return {
				...state,
				items: itemsAfterIncrease,
				totalPrice: getTotalPrice(itemsAfterIncrease),
			};
		
		case DECREASE_BASKET_ITEM:
			const itemsAfterDecrease = getItemsAfterDecrease(state.items, action.id);
			console.log(itemsAfterDecrease);
			return {
				...state,
				items: itemsAfterDecrease,
				totalPrice: getTotalPrice(itemsAfterDecrease),
			};
		default:
			return state;
	}
};

export default basketReducer;
