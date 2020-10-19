import axios from 'axios';
import {
  GET_BRANCHES_FAILURE,
  GET_BRANCHES_SUCCESS,
  INIT_MENU,
  INIT_MENU_ERROR,
} from './actionTypes';

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

export const getBranches = () => {
  return dispatch => {
    return axios.get('/newdata.json').then(
      response => {
        if (response && response.data && response.data.branch) {
          return dispatch(getBranchesSuccess(response.data));
        }
      },
      error => {
        return dispatch(getBranchesFailure(error));
      },
    );
  };
};

const getBranchesSuccess = data => {
  return {type: GET_BRANCHES_SUCCESS, data};
};

const getBranchesFailure = error => {
  return {type: GET_BRANCHES_FAILURE, error};
};

const initMenuSuccess = menu => {
  return {type: INIT_MENU, categories: menu.categories};
};

const initMenuFailure = error => {
  return {type: INIT_MENU_ERROR, error};
};
