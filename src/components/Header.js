import config from '../../config';
import EStyleSheet from 'react-native-extended-stylesheet';
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
		fontWeight: 'bold',
		flex: 1,
		textAlign: 'center',
	},
	headerTintColor: 'black',
};

export default Header;
