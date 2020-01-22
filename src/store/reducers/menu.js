const initialState = {
	popularDishes: [
		{
			id: '1',
			title: 'Хан плов',
			image: 'https://ic.pics.livejournal.com/stalic/2762948/2864146/2864146_original.jpg',
			category: 'Эксклюзивные рецепты',
			price: '150',
			rating: 4.5,
		},
		{
			id: '2',
			title: 'Хан плов',
			image: 'https://ic.pics.livejournal.com/stalic/2762948/2864146/2864146_original.jpg',
			category: 'Эксклюзивные рецепты',
			price: '150',
			rating: 4.5,
		},
		{
			id: '3',
			title: 'Хан плов',
			image: 'https://ic.pics.livejournal.com/stalic/2762948/2864146/2864146_original.jpg',
			category: 'Эксклюзивные рецепты',
			price: '150',
			rating: 4.5,
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
			title: 'Супы',
			icon: 'soups',
			color: '#F52D56',
		},
		{
			id: '7',
			title: 'Хан самса',
			icon: 'hansamsi',
			color: '#5552D3',
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
