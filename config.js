export default {
  shadowOptOpacity: 0.15,
  TabBarHeight: 64,
  MainColor: '#ec323d',
  LoaderColor: '#C1C0C9',
  InactiveColorFunc: opacity => `rgba(236, 50, 61, ${opacity})`,
  BackgroundColor: '#F5F5F5',
  GreyColor: '#C1C0C9',
};

export const countries = {
  Bishkek: {
    flag: require('./src/assets/images/kg.jpg'),
    code: '996',
    phoneMask: '0 999 99-99-99',
    city: 'Бишкек',
    apiUrl: 'http://dostavka.skyberry.kg/app',
    imageUrl: 'http://dostavka.skyberry.kg/files/products/',
    deliveryThreshold: 250,
    deliveryPrice: 200,
    deliveryAfterSalePrice: 0,
    phones: {
      deliveryService: {
        call: '+996227308888',
        display: '+996 227 30-88-88',
      },
      commentsSuggestions: {
        call: '+996227308888',
        display: '+996 227 30-88-88',
      },
    },
  },
};
