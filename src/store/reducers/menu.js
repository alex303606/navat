const initialState = {
	popularDishes: [
		{
			id: '1',
			title: 'Хан плов',
			image: 'http://navat.kg/dostavka/files/products/hanplov.800x600w.jpg',
			category: 'Эксклюзивные рецепты',
			price: '200',
			rating: 4.5,
		},
		{
			id: '2',
			title: 'Хан самса мексиканская',
			image: 'http://navat.kg/dostavka/files/products/meksikanskaya-han-samsa.800x600w.jpg',
			category: 'Эксклюзивные рецепты',
			price: '620',
			rating: 3,
		},
		{
			id: '3',
			title: 'Плов Апашкин',
			image: 'http://navat.kg/dostavka/files/products/111-apashkin-plov.800x600w.jpg',
			category: 'Эксклюзивные рецепты',
			price: '150',
			rating: 3,
		},
		{
			id: '4',
			title: 'Хан плов',
			image: 'http://navat.kg/dostavka/files/products/hanplov.800x600w.jpg',
			category: 'Эксклюзивные рецепты',
			price: '200',
			rating: 4.5,
		},
		{
			id: '5',
			title: 'Хан самса мексиканская',
			image: 'http://navat.kg/dostavka/files/products/meksikanskaya-han-samsa.800x600w.jpg',
			category: 'Эксклюзивные рецепты',
			price: '620',
			rating: 3,
		},
		{
			id: '6',
			title: 'Плов Апашкин',
			image: 'http://navat.kg/dostavka/files/products/111-apashkin-plov.800x600w.jpg',
			category: 'Эксклюзивные рецепты',
			price: '150',
			rating: 3,
		},
		{
			id: '7',
			title: 'Хан плов',
			image: 'http://navat.kg/dostavka/files/products/hanplov.800x600w.jpg',
			category: 'Эксклюзивные рецепты',
			price: '200',
			rating: 4.5,
		},
		{
			id: '8',
			title: 'Хан самса мексиканская',
			image: 'http://navat.kg/dostavka/files/products/meksikanskaya-han-samsa.800x600w.jpg',
			category: 'Эксклюзивные рецепты',
			price: '620',
			rating: 3,
		},
		{
			id: '9',
			title: 'Плов Апашкин',
			image: 'http://navat.kg/dostavka/files/products/111-apashkin-plov.800x600w.jpg',
			category: 'Эксклюзивные рецепты',
			price: '150',
			rating: 3,
		},
	],
	categories: [
		{
			id: '1',
			title: 'Завтраки',
			icon: 'breakfast',
			color: '#F2994A',
		},
		{
			id: '2',
			title: 'Закуски',
			icon: 'snack',
			color: '#A67E6C',
		},
		{
			id: '3',
			title: 'Салаты',
			icon: 'salads',
			color: '#1E8149',
		},
		{
			id: '4',
			title: 'Супы',
			icon: 'soups',
			color: '#F52D56',
		},
		{
			id: '5',
			title: 'Хан самса',
			icon: 'hansamsi',
			color: '#5552D3',
		},
		{
			id: '6',
			title: 'Вторые блюда',
			icon: 'second',
			color: '#2F80ED',
		},
		{
			id: '7',
			title: 'Плов',
			icon: 'pilaf',
			color: '#9B51E0',
		},
		{
			id: '8',
			title: 'Гарниры',
			icon: 'side-dishes',
			color: '#FFC700',
		},
		{
			id: '9',
			title: 'Шашлыки',
			icon: 'barbecue',
			color: '#5C4135',
		},
		{
			id: '10',
			title: 'Домашняя выпечка',
			icon: 'bakery',
			color: '#A3A0FF',
		},
		{
			id: '11',
			title: 'Банкетное меню',
			icon: 'banquet-menu',
			color: '#EB5757',
		},
		{
			id: '12',
			title: 'Десерты',
			icon: 'dessert',
			color: '#65DA65',
		},
		{
			id: '13',
			title: 'Соусы',
			icon: 'sauces',
			color: '#56CCF2',
		},
		{
			id: '14',
			title: 'Напитки',
			icon: 'drinks',
			color: '#BDBDBD',
		},
	],
	branches: [
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
	],
};

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default menuReducer;