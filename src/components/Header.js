import config from '../../config';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 414});
const styles = EStyleSheet.create({
	$fontSize: '18rem',
});

const Header = {
	headerStyle: {
		backgroundColor: config.BackgroundColor,
		elevation: 0,
		shadowColor: 'transparent',
		borderBottomWidth: 0,
		shadowOpacity: 0,
		shadowOffset: {
			height: 0,
		},
		shadowRadius: 0,
	},
	headerTitleStyle: {
		backgroundColor: config.BackgroundColor,
		fontSize: styles.$fontSize,
		fontFamily: getCustomFontFamilyByFontWeight(600),
		flex: 1,
		textAlign: 'center',
	},
	headerTintColor: 'black',
};

export default Header;
