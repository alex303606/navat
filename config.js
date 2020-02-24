export default {
	apiUrl: `http://localhost:8000`,
	InitLocation: 'KG',
	shadowOptOpacity: 0.15,
	TabBarHeight: 64,
	MainColor: '#1E8149',
	LoaderColor: '#C1C0C9',
	InactiveColorFunc: (opacity) => `rgba(30, 129, 73, ${opacity})`,
	BackgroundColor: '#F5F5F5',
	GreyColor: '#C1C0C9',
};

export const countries = {
	KG: {
		flag: require('./src/assets/images/kg.jpg'),
		code: '996',
		phoneMask: '999 99-99-99',
		city: 'Бишкек',
	},
	KZ: {
		flag: require('./src/assets/images/kz.jpg'),
		code: '7',
		phoneMask: '999 999-99-99',
		city: 'Алматы',
	},
};
