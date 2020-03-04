import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Button from '../components/Button';
import { CreditCardInput } from '../components/CreditCardInput';
import ScreenContainer from '../components/ScreenContainer';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';


const styles = EStyleSheet.create({
	page: {
		backgroundColor: config.BackgroundColor,
	},
	container: {
		flexGrow: 1,
		paddingBottom: '20rem',
	},
	contentContainerStyle: {
		flexGrow: 1,
		paddingHorizontal: '32rem',
		paddingVertical: '20rem',
	},
	inputStyle: {
		height: '36rem',
		paddingHorizontal: '10rem',
		flexGrow: 1,
		fontSize: '18rem',
		paddingVertical: 0,
		backgroundColor: config.InactiveColorFunc(0.1),
		borderWidth: 0,
	},
	labelStyle: {
		marginBottom: '10rem',
		fontSize: '14rem',
		lineHeight: '17rem',
		fontFamily: getCustomFontFamilyByFontWeight(300),
	},
	inputContainerStyle: {
		marginBottom: '23rem',
	},
});

const AddCardScreen = () => {
	const [valid, changeValid] = useState(false);
	const onChange = form => changeValid(form.valid);
	
	const addCard = () => {
		return null;
	};
	
	return (
		<ScreenContainer style={styles.page}>
			<View style={{flex: 1}}>
				<ScrollView
					scrollEnabled={true}
					contentContainerStyle={styles.contentContainerStyle}
					showsVerticalScrollIndicator={false}
					keyboardShouldPersistTaps='handled'
				>
					<View style={styles.container}>
						<CreditCardInput
							inputContainerStyle={styles.inputContainerStyle}
							labelStyle={styles.labelStyle}
							inputStyle={styles.inputStyle}
							requiresName={true}
							onChange={onChange}/>
					</View>
					<Button onPress={addCard} disabled={!valid} title={'Сохранить карту'}/>
				</ScrollView>
			</View>
		</ScreenContainer>
	);
};

export default AddCardScreen;
