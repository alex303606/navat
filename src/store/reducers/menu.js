import { INIT_MENU, SELECT_LOCATION } from '../actions/actionTypes';
import { countries } from '../../../config';

const cat = [
	{
		title: 'Завтраки',
		icon: 'breakfast',
		color: '#F2994A',
	},
	{
		title: 'Закуски',
		icon: 'snack',
		color: '#A67E6C',
	},
	{
		title: 'Салаты',
		icon: 'salads',
		color: '#1E8149',
	},
	{
		title: 'Супы',
		icon: 'soups',
		color: '#F52D56',
	},
	{
		title: 'Хан самса',
		icon: 'hansamsi',
		color: '#5552D3',
	},
	{
		title: 'Вторые блюда',
		icon: 'second',
		color: '#2F80ED',
	},
	{
		title: 'Плов',
		icon: 'pilaf',
		color: '#9B51E0',
	},
	{
		title: 'Гарниры',
		icon: 'side-dishes',
		color: '#FFC700',
	},
	{
		title: 'Шашлыки',
		icon: 'barbecue',
		color: '#5C4135',
	},
	{
		title: 'Домашняя выпечка',
		icon: 'bakery',
		color: '#A3A0FF',
	},
	{
		title: 'Банкетное меню',
		icon: 'banquet-menu',
		color: '#EB5757',
	},
	{
		title: 'Десерты',
		icon: 'dessert',
		color: '#65DA65',
	},
	{
		title: 'Соусы',
		icon: 'sauces',
		color: '#56CCF2',
	},
	{
		title: 'Напитки',
		icon: 'drinks',
		color: '#BDBDBD',
	},
];

const initialState = {
	popularDishes: [],
	categories: [],
	branches: [],
};

const addIcons = categories => {
	return categories.map((x, index) => {
		x.icon = cat[index] && cat[index].icon ? cat[index].icon : 'breakfast';
		x.color = cat[index] && cat[index].color ? cat[index].color : '#BDBDBD';
		return x;
	});
};

const getPopularDishes = (categories) => {
	const dishes = [];
	categories.forEach((cat, index) => {
		if (!!cat.dishes && !!cat.dishes.length) {
			cat.dishes.forEach((dish) => {
				if (dish && dish.featured === '1') {
					dishes.push({...dish, parentCategoryId: index});
				}
			})
		}
	});
	
	return dishes;
};

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_MENU:
			return {
				...state,
				popularDishes: getPopularDishes(action.categories),
				categories: addIcons(action.categories),
			};
		case SELECT_LOCATION:
			const branches = countries[action.location].branches;
			return {...state, branches};
		default:
			return state;
	}
};

export default menuReducer;
