
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
};

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default menuReducer;
