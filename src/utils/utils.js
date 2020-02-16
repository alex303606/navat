import { Dimensions } from 'react-native';

const entireScreenHeight = Dimensions.get('window').height;

export function assemble(literal, params) {
	let finalString = literal;
	Object.keys(params).forEach((key) => {
		finalString = finalString.replace(`\${${key}}`, params[key]);
	});
	
	return finalString;
}

export const normalizeHeight = value => {
	const scale = entireScreenHeight / 736;
	return value * scale;
};

export const getCustomFontFamilyByFontWeight = weight => {
	switch (weight) {
		case 100:
		case 200:
			return 'SFUIText-Light';
		case 300:
		case 400:
			return 'SFUIText-Regular';
		case 500:
			return 'SFUIText-Medium';
		case 600:
			return 'SFUIText-Semibold';
		case 700:
		case 800:
		case 900:
			return 'SFUIText-Bold';
		default:
			return 'SFUIText-Regular';
	}
};
