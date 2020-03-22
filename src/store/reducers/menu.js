import { INIT_MENU } from '../actions/actionTypes';

const freeShippingThreshold = 1000;

const shippingPrice = 200;

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

const branches = [
	{
		id: '1',
		name: 'Чайхана Нават на Киевской',
		address: 'Киевская 141/1 / Тоголоко-Молдо',
		time: '',
		images: [
			'https://teletype.in/files/40/40820609-0d4e-4b99-b469-e151f1020f5c.jpeg',
			'https://teletype.in/files/fa/fa0c61e6-bb49-4a0a-81f8-9b2ca4ae2435.jpeg',
			'https://teletype.in/files/ab/ab3710e0-bf03-480e-9b9d-2d6dd5bc6d94.jpeg',
			'https://teletype.in/files/40/4081f400-63b0-4f59-9789-8daeddf1a1b4.jpeg',
		],
		rating: 4,
	},
	{
		id: '2',
		name: 'Чайхана Нават на Ибраимова',
		address: 'Ибраимова 42 / Московская',
		time: '',
		images: [
			'https://teletype.in/files/40/4081f400-63b0-4f59-9789-8daeddf1a1b4.jpeg',
			'https://teletype.in/files/fa/fa0c61e6-bb49-4a0a-81f8-9b2ca4ae2435.jpeg',
			'https://teletype.in/files/40/40820609-0d4e-4b99-b469-e151f1020f5c.jpeg',
			'https://teletype.in/files/ab/ab3710e0-bf03-480e-9b9d-2d6dd5bc6d94.jpeg',
		],
		rating: 4,
	},
	{
		id: '3',
		name: 'Чайхана Нават на Токомбаева',
		address: 'ул.Токомбаева, 32/4 / Байтик Баатыра',
		time: '',
		images: [
			'https://teletype.in/files/40/40820609-0d4e-4b99-b469-e151f1020f5c.jpeg',
			'https://teletype.in/files/ab/ab3710e0-bf03-480e-9b9d-2d6dd5bc6d94.jpeg',
			'https://teletype.in/files/40/4081f400-63b0-4f59-9789-8daeddf1a1b4.jpeg',
			'https://teletype.in/files/fa/fa0c61e6-bb49-4a0a-81f8-9b2ca4ae2435.jpeg',
		],
		rating: 4,
	},
	{
		id: '4',
		name: 'Чайхана Нават на Малдыбаева',
		address: 'ул.Токомбаева, 32/4 / Байтик Баатыра',
		time: '',
		images: [
			'https://teletype.in/files/40/40820609-0d4e-4b99-b469-e151f1020f5c.jpeg',
			'https://teletype.in/files/ab/ab3710e0-bf03-480e-9b9d-2d6dd5bc6d94.jpeg',
			'https://teletype.in/files/40/4081f400-63b0-4f59-9789-8daeddf1a1b4.jpeg',
			'https://teletype.in/files/fa/fa0c61e6-bb49-4a0a-81f8-9b2ca4ae2435.jpeg',
		],
		rating: 5,
	},
	{
		id: '5',
		name: 'Чайхана Нават на Советской',
		address: 'ул.Токомбаева, 32/4 / Байтик Баатыра',
		time: '',
		images: [
			'https://teletype.in/files/40/40820609-0d4e-4b99-b469-e151f1020f5c.jpeg',
			'https://teletype.in/files/ab/ab3710e0-bf03-480e-9b9d-2d6dd5bc6d94.jpeg',
			'https://teletype.in/files/40/4081f400-63b0-4f59-9789-8daeddf1a1b4.jpeg',
			'https://teletype.in/files/fa/fa0c61e6-bb49-4a0a-81f8-9b2ca4ae2435.jpeg',
		],
		rating: 2,
	},
];

const initialState = {
	popularDishes: [],
	categories: [],
	branches: [],
	freeShippingThreshold: 0,
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
			cat.dishes.forEach((dish, id) => {
				if (dish && dish.featured === '1') {
					dishes.push({...dish, parentCategoryId: index, id });
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
				branches,
				categories: addIcons(action.categories),
				freeShippingThreshold,
				shippingPrice,
			};
		default:
			return state;
	}
};

export default menuReducer;
