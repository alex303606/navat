import {
	GUIDE_VIEWED,
	SELECT_LOCATION,
	SIGN_IN,
	SIGN_OUT,
	CHANGED_AVATAR,
	CHANGED_BIRTHDAY,
	CHANGED_PHONE,
	CHANGED_FIO,
	CHANGED_EMAIL,
} from './actionTypes';
import NavigationService from '../../utils/NavigationService';

export const selectLocation = location => {
	return dispatch => {
		dispatch({type: SELECT_LOCATION, location});
	};
};

export const signIn = () => {
	return dispatch => {
		dispatch({type: SIGN_IN, user: {}});
		NavigationService.navigate('Guide');
	};
};

export const signOut = () => {
	return dispatch => {
		dispatch({type: SIGN_OUT});
	};
};

export const setGuideIsViewed = () => {
	return dispatch => {
		dispatch({type: GUIDE_VIEWED});
	};
};

export const savePhoto = (avatar: { uri: string }) => {
	return {
		avatar,
		type: CHANGED_AVATAR,
	};
};

export const changeBirthday = (birthday: string) => {
	return {
		birthday,
		type: CHANGED_BIRTHDAY,
	};
};

export const changeFio = (fio: string) => {
	return {
		fio,
		type: CHANGED_FIO,
	};
};

export const changePhone = (phone: string) => {
	return {
		phone,
		type: CHANGED_PHONE,
	};
};

export const changeEmail = (email: string) => {
	return {
		email,
		type: CHANGED_EMAIL,
	};
};
