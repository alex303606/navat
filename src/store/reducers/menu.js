import { INIT_MENU } from '../actions/actionTypes';

const freeShippingThreshold = 1000;

const shippingPrice = 200;

const containerPrice = 20;

const popularDishes = [
	{
		id: '0',
		title: 'Манты с мясом',
		image: 'http://navat.kg/dostavka/files/products/manty-s-myasom.800x600w.jpg',
		parentCategoryId: '6',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 180,
		rating: 5,
		additionalTitle: 'Порция',
		additionalItem: {
			id: '10',
			additionalTitle: '1 шт',
			price: 40,
			container: {
				amount: 0,
				price: 0,
			},
		},
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '1',
		title: 'Хан плов 1',
		image: 'http://navat.kg/dostavka/files/products/hanplov.800x600w.jpg',
		parentCategoryId: '1',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 200,
		rating: 4.5,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '2',
		title: 'Хан самса мексиканская 1',
		image: 'http://navat.kg/dostavka/files/products/meksikanskaya-han-samsa.800x600w.jpg',
		parentCategoryId: '2',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 620,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '3',
		title: 'Плов Апашкин 1',
		image: 'http://navat.kg/dostavka/files/products/111-apashkin-plov.800x600w.jpg',
		parentCategoryId: '3',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 150,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '4',
		title: 'Хан плов 2',
		image: 'http://navat.kg/dostavka/files/products/hanplov.800x600w.jpg',
		parentCategoryId: '4',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 200,
		rating: 4.5,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '5',
		title: 'Хан самса мексиканская 2',
		image: 'http://navat.kg/dostavka/files/products/meksikanskaya-han-samsa.800x600w.jpg',
		parentCategoryId: '5',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 620,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '6',
		title: 'Плов Апашкин 2',
		image: 'http://navat.kg/dostavka/files/products/111-apashkin-plov.800x600w.jpg',
		parentCategoryId: '6',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 150,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '7',
		title: 'Хан плов 3',
		image: 'http://navat.kg/dostavka/files/products/hanplov.800x600w.jpg',
		parentCategoryId: '7',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 200,
		rating: 4.5,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '8',
		title: 'Хан самса мексиканская 3',
		image: 'http://navat.kg/dostavka/files/products/meksikanskaya-han-samsa.800x600w.jpg',
		parentCategoryId: '8',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 620,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '9',
		title: 'Плов Апашкин 3',
		image: 'http://navat.kg/dostavka/files/products/111-apashkin-plov.800x600w.jpg',
		parentCategoryId: '9',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 150,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
];

const dishes = [
	{
		id: '0',
		title: 'Манты с мясом',
		image: 'http://navat.kg/dostavka/files/products/manty-s-myasom.800x600w.jpg',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 180,
		rating: 5,
		additionalTitle: 'Порция',
		additionalItem: {
			id: '10',
			additionalTitle: '1 шт',
			price: 40,
			container: {
				amount: 0,
				price: 0,
			},
		},
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '1',
		title: 'Хан плов 1',
		image: 'http://navat.kg/dostavka/files/products/hanplov.800x600w.jpg',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 200,
		rating: 4.5,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '2',
		title: 'Хан самса мексиканская 1',
		image: 'http://navat.kg/dostavka/files/products/meksikanskaya-han-samsa.800x600w.jpg',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 620,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '3',
		title: 'Плов Апашкин 1',
		image: 'http://navat.kg/dostavka/files/products/111-apashkin-plov.800x600w.jpg',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 150,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '4',
		title: 'Хан плов 2',
		image: 'http://navat.kg/dostavka/files/products/hanplov.800x600w.jpg',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 200,
		rating: 4.5,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '5',
		title: 'Хан самса мексиканская 2',
		image: 'http://navat.kg/dostavka/files/products/meksikanskaya-han-samsa.800x600w.jpg',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 620,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '6',
		title: 'Лагман',
		image: 'http://navat.kg/dostavka/files/products/boso-lagman.800x600w.jpg',
		description: 'Яркое насыщенное блюдо с мясом телятины, овощей и домашней лапши с пикантно острыми специями',
		price: 230,
		rating: 5,
		additionalTitle: 'Порция',
		additionalItem: {
			id: '11',
			additionalTitle: '0.5',
			price: 150,
			container: {
				amount: 1,
				price: containerPrice,
			},
		},
		container: {
			amount: 2,
			price: containerPrice,
		},
	},
	{
		id: '7',
		title: 'Хан плов 3',
		image: 'http://navat.kg/dostavka/files/products/hanplov.800x600w.jpg',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 200,
		rating: 4.5,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '8',
		title: 'Хан самса мексиканская 3',
		image: 'http://navat.kg/dostavka/files/products/meksikanskaya-han-samsa.800x600w.jpg',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 620,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
	{
		id: '9',
		title: 'Плов Апашкин 3',
		image: 'http://navat.kg/dostavka/files/products/111-apashkin-plov.800x600w.jpg',
		description: 'Нежное тесто с тыквенно-овощной начинкой, готовящиеся на пару с соусом на томатной основе',
		price: 150,
		rating: 3,
		container: {
			amount: 1,
			price: containerPrice,
		},
	},
];

const categories = [
	{
		id: '1',
		title: 'Завтраки',
		icon: 'breakfast',
		color: '#F2994A',
		dishes: dishes,
	},
	{
		id: '2',
		title: 'Закуски',
		icon: 'snack',
		color: '#A67E6C',
		dishes: dishes,
	},
	{
		id: '3',
		title: 'Салаты',
		icon: 'salads',
		color: '#1E8149',
		dishes: dishes,
	},
	{
		id: '4',
		title: 'Супы',
		icon: 'soups',
		color: '#F52D56',
		dishes: dishes,
	},
	{
		id: '5',
		title: 'Хан самса',
		icon: 'hansamsi',
		color: '#5552D3',
		dishes: dishes,
	},
	{
		id: '6',
		title: 'Вторые блюда',
		icon: 'second',
		color: '#2F80ED',
		dishes: dishes,
	},
	{
		id: '7',
		title: 'Плов',
		icon: 'pilaf',
		color: '#9B51E0',
		dishes: dishes,
	},
	{
		id: '8',
		title: 'Гарниры',
		icon: 'side-dishes',
		color: '#FFC700',
		dishes: dishes,
	},
	{
		id: '9',
		title: 'Шашлыки',
		icon: 'barbecue',
		color: '#5C4135',
		dishes: dishes,
	},
	{
		id: '10',
		title: 'Домашняя выпечка',
		icon: 'bakery',
		color: '#A3A0FF',
		dishes: dishes,
	},
	{
		id: '11',
		title: 'Банкетное меню',
		icon: 'banquet-menu',
		color: '#EB5757',
		dishes: dishes,
	},
	{
		id: '12',
		title: 'Десерты',
		icon: 'dessert',
		color: '#65DA65',
		dishes: dishes,
	},
	{
		id: '13',
		title: 'Соусы',
		icon: 'sauces',
		color: '#56CCF2',
		dishes: dishes,
	},
	{
		id: '14',
		title: 'Напитки',
		icon: 'drinks',
		color: '#BDBDBD',
		dishes: dishes,
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

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_MENU:
			return {...state, popularDishes, branches, categories, freeShippingThreshold, shippingPrice};
		default:
			return state;
	}
};

export default menuReducer;
