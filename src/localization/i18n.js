import I18n from 'react-native-i18n';
import { ru } from './ru_RU';
import { en } from './en_EN';
import { kz } from './kk_KZ';

I18n.fallbacks = true;

I18n.missingBehaviour = 'guess';

I18n.translations = {
	ru,
	en,
	kz,
};

I18n.langs = [
	'ru',
	'en',
	'kz',
];

export const translate = (msg = '', options) => {
	return I18n.t(msg, options);
};

export const switchLanguage = (lang, component) => {
	I18n.locale = lang;
	component.forceUpdate();
};
