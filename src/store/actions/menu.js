import axios from 'axios';
import {INIT_MENU, INIT_MENU_ERROR} from './actionTypes';

export const initMenu = () => {
  return dispatch => {
    return axios.get('/cat.php').then(
      response => {
        return dispatch(initMenuSuccess(response.data));
      },
      error => {
        return dispatch(initMenuFailure(error));
      },
    );
  };
};

const initMenuSuccess = menu => {
  return {type: INIT_MENU, categories: menu.categories};
};

const initMenuFailure = error => {
  return {type: INIT_MENU_ERROR, error};
};
