import {GET_BRANCHES_SUCCESS, INIT_MENU} from '../actions/actionTypes';

const cat = [
  {
    title: 'Завтраки',
    icon: 'breakfast',
    color: '#F2994A',
  },
  {
    title: 'Сэндвичи',
    icon: 'snack',
    color: '#A67E6C',
  },
  {
    title: 'Закуски',
    icon: 'bakery',
    color: '#F52D56',
  },
  {
    title: 'Салаты',
    icon: 'salads',
    color: '#1E8149',
  },
  {
    title: 'Супы',
    icon: 'soups',
    color: '#5552D3',
  },
  {
    title: 'Хан-Самсы',
    icon: 'hansamsi',
    color: '#5552D3',
  },
  {
    title: 'Вторые блюда',
    icon: 'barbecue',
    color: '#2F80ED',
  },
  {
    title: 'Гарниры',
    icon: 'pilaf',
    color: '#EB5757',
  },
  {
    title: 'Паназиатская кухня',
    icon: 'side-dishes',
    color: '#9B51E0',
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
    color: '#A3A0FF',
  },
  {
    title: 'Спиртные напитки',
    icon: 'banquet-menu',
    color: '#BDBDBD',
  },
  {
    title: 'Бар',
    icon: 'drinks',
    color: '#BDBDBD',
  },
  {
    title: 'Паста',
    icon: 'second',
    color: '#FFC700',
  },
  {
    title: 'Детское меню',
    icon: 'children_menu',
    color: '#56CCF2',
  },
  {
    title: 'Стейк',
    icon: 'steak',
    color: '#5C4135',
  },
  {
    title: 'Стейки',
    icon: 'steak',
    color: '#5C4135',
  },
];

const initialState = {
  popularDishes: [],
  categories: [],
  branches: [],
  banners: [],
};

const addIcons = categories => {
  return categories.map(x => {
    const item = cat.find(y => y.title === x.title);
    x.icon = item && item.icon ? item.icon : 'banquet-menu';
    x.color = item && item.color ? item.color : '#BDBDBD';
    return x;
  });
};

const getPopularDishes = categories => {
  const dishes = [];
  categories.forEach((cat, index) => {
    if (!!cat.dishes && !!cat.dishes.length) {
      cat.dishes.forEach(dish => {
        if (dish && dish.featured === '1') {
          dishes.push({...dish, parentCategoryId: index});
        }
      });
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
    case GET_BRANCHES_SUCCESS:
      return {
        ...state,
        branches: [action.data.branch],
        banners: action.data.banner,
      };
    default:
      return state;
  }
};

export default menuReducer;
