export default {
	shadowOptOpacity: 0.15,
	TabBarHeight: 64,
	MainColor: '#1E8149',
	LoaderColor: '#C1C0C9',
	InactiveColorFunc: (opacity) => `rgba(30, 129, 73, ${opacity})`,
	BackgroundColor: '#F5F5F5',
	GreyColor: '#C1C0C9',
};

export const countries = {
	Almaty: {
		flag: require('./src/assets/images/kz.jpg'),
		code: '7',
		phoneMask: '+7 999 999-99-99',
		city: 'Нур-Султан',
		apiUrl: 'http://dostavka-navat.kz/app',
		imageUrl: 'http://dostavka-navat.kz/files/products/',
	},
	NurSultan: {
		flag: require('./src/assets/images/kz.jpg'),
		code: '7',
		phoneMask: '+7 999 999-99-99',
		city: 'Алматы',
		apiUrl: 'http://dostavka-navat.kz/app',
		imageUrl: 'http://dostavka-navat.kz/files/products/',
	},
};
