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
	containers: {
		price: 0,
		amount: 0,
	},
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
	
	const getContainers = (items) => {
		const reducer = (acc, item) => {
			if (!!item.amount && !!item.container && !!item.container.price && !!item.container.amount) {
				acc.price += (item.amount * (item.container.amount * item.container.price));
				acc.amount += item.amount * item.container.amount;
			}
			return acc;
		};
		
		return items.reduce(reducer, {amount: 0, price: 0});
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
			
			if (action.additionalItem) {
				const additionalIndex = state.items.findIndex(x => x.id === action.additionalItem.id);
				if (additionalIndex >= 0) {
					++items[additionalIndex].amount;
				} else {
					const item = {
						title: action.item.title,
						image: action.item.image,
						description: action.item.description,
						rating: action.item.rating,
						amount: 1,
						id: action.additionalItem.id,
						additionalTitle: action.additionalItem.additionalTitle,
						price: action.additionalItem.price,
					};
					items.push({...item});
				}
				return {
					...state,
					items,
					totalPrice: getTotalPrice(items),
					containers: getContainers(items),
				};
			}
			const index = state.items.findIndex(x => x.id === action.item.id);
			if (index >= 0) {
				++items[index].amount;
			} else {
				items.push({...action.item, amount: 1});
			}
			
			return {
				...state,
				items,
				totalPrice: getTotalPrice(items),
				containers: getContainers(items),
			};
		case CLEAR_BASKET:
			return {
				...state,
				items: initialState.items,
				totalPrice: initialState.totalPrice,
				containers: initialState.containers,
			};
		
		case DELETE_BASKET_ITEM:
			const filteredItems = [...state.items.filter(item => item.id !== action.id)];
			return {
				...state,
				items: filteredItems,
				totalPrice: getTotalPrice(filteredItems),
				containers: getContainers(filteredItems),
			};
		
		case INCREASE_BASKET_ITEM:
			const itemsAfterIncrease = getItemsAfterIncrease(state.items, action.id);
			return {
				...state,
				items: itemsAfterIncrease,
				totalPrice: getTotalPrice(itemsAfterIncrease),
				containers: getContainers(itemsAfterIncrease),
			};
		
		case DECREASE_BASKET_ITEM:
			const itemsAfterDecrease = getItemsAfterDecrease(state.items, action.id);
			return {
				...state,
				items: itemsAfterDecrease,
				totalPrice: getTotalPrice(itemsAfterDecrease),
				containers: getContainers(itemsAfterDecrease),
			};
		default:
			return state;
	}
};

export default basketReducer;
