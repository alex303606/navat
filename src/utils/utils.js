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
