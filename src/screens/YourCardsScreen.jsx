import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import CustomIcon from '../components/CustomIcon';
import Button from '../components/Button';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		padding: '20rem',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
	},
	$iconSize: '200rem',
});

const YourCardsScreen = (props) => {
	const navigateToAddCard = () => props.navigation.navigate('AddCard');
	
	return (
		<View style={styles.page}>
			<View style={styles.iconContainer}>
				<CustomIcon
					name={'card'}
					color={config.GreyColor}
					size={styles.$iconSize}/>
			</View>
			<Button
				onPress={navigateToAddCard}
				title={'Добавить карту'}
			/>
		</View>
	);
};

export default YourCardsScreen;
