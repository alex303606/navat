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
		phones: {
			deliveryService: {
				call: '+77719311111',
				display: '+7 771 931 11 11'
			},
			commentsSuggestions: {
				call: '+77778251111',
				display: '+7 777 825 11 11'
			},
		},
		branches: [
			{
				name: 'Чайхана Navat на Сейфуллина',
				address: 'Казахстан, Алматы, проспект Достык 48 ',
				time: '10:00 - 24:00',
				images: [
					'http://navat.com.kz/app/rest/img01.jpg',
					'http://navat.com.kz/app/rest/img02.jpg',
					'http://navat.com.kz/app/rest/img03.jpg',
					'http://navat.com.kz/app/rest/img04.jpg',
					'http://navat.com.kz/app/rest/img05.jpg'
				],
				rating: 5
			},
			{
				name: 'Чайхана Navat на пр. Достык',
				address: 'Казахстан, Алматы, проспект Сейфуллина 500/79 ',
				time: '10:00 - 24:00',
				images: [
					'http://navat.com.kz/app/rest/img11.jpg',
					'http://navat.com.kz/app/rest/img12.jpg',
					'http://navat.com.kz/app/rest/img13.jpg',
					'http://navat.com.kz/app/rest/img14.jpg',
					'http://navat.com.kz/app/rest/img15.jpg'
				],
				rating: 5
			},
			{
				name: 'Чайхана Navat на Аль-Фараби',
				address: 'Казахстан, Алматы, проспект Аль-Фараби, 77/1 ',
				time: '10:00 - 24:00',
				images: [
					'http://navat.com.kz/app/rest/img21.jpg',
					'http://navat.com.kz/app/rest/img22.jpg',
					'http://navat.com.kz/app/rest/img23.jpg',
					'http://navat.com.kz/app/rest/img24.jpg',
					'http://navat.com.kz/app/rest/img25.jpg'
				],
				rating: 5
			},
			{
				name: 'Чайхана Navat на Абылайхана',
				address: 'Казахстан, Алматы, проспект Абылайхана, 58 А ',
				time: '10:00 - 24:00',
				images: [
					'http://navat.com.kz/app/rest/img31.jpg',
					'http://navat.com.kz/app/rest/img32.jpg',
					'http://navat.com.kz/app/rest/img33.jpg',
					'http://navat.com.kz/app/rest/img34.jpg',
					'http://navat.com.kz/app/rest/img35.jpg'
				],
				rating: 5
			},
		],
	},
	NurSultan: {
		flag: require('./src/assets/images/kz.jpg'),
		code: '7',
		phoneMask: '+7 999 999-99-99',
		city: 'Алматы',
		apiUrl: 'http://dostavka-navat.kz/app',
		imageUrl: 'http://dostavka-navat.kz/files/products/',
		phones: {
			deliveryService: {
				call: '+77719311111',
				display: '+7 771 931 11 11'
			},
			commentsSuggestions: {
				call: '+77778251111',
				display: '+7 777 825 11 11'
			},
		},
		branches: [
			{
				name: 'Чайхана Navat',
				address: 'Казахстан, Нур-Султан, Қабанбай батыр проспект, 21',
				time: '10:00 - 24:00',
				images: [
					'http://navat.com.kz/app/rest/img51.jpg',
					'http://navat.com.kz/app/rest/img52.jpg',
					'http://navat.com.kz/app/rest/img53.jpg',
					'http://navat.com.kz/app/rest/img54.jpg',
					'http://navat.com.kz/app/rest/img55.jpg'
				],
				rating: 5
			}
		]
	},
};
