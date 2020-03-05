import React, { useEffect, useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Button from '../components/Button';
import { CreditCardInput } from '../components/CreditCardInput';
import ScreenContainer from '../components/ScreenContainer';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveCard } from '../store/actions/profile';
import { translate } from '../localization/i18n';

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

const AddCardScreen = (props) => {
	useEffect(() => {
		const {state: {params}} = props.navigation;
		if (params) {
			const {card} = params;
			if (card) {
				setCard(card);
			}
		}
	}, []);
	
	const [valid, changeValid] = useState(false);
	const [card, setCard] = useState({});
	const onChange = form => {
		changeValid(form.valid);
		if (form.valid) {
			setCard(form.values);
		}
	};
	
	const saveCardHandler = () => {
		const index = props.cards.findIndex(x => x.number === card.number);
		if (index > -1) {
			Alert.alert(translate('cardIsExist'));
			return;
		}
		props.saveCard({...card, default: false});
		props.navigation.goBack();
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
							valuesForEdit={{...card}}
							inputContainerStyle={styles.inputContainerStyle}
							labelStyle={styles.labelStyle}
							inputStyle={styles.inputStyle}
							requiresName={true}
							onChange={onChange}/>
					</View>
					<Button
						onPress={saveCardHandler}
						disabled={!valid}
						title={translate('saveCard')}
					/>
				</ScrollView>
			</View>
		</ScreenContainer>
	);
};

const mapStateToProps = state => ({
	cards: state.profile.cards,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			saveCard,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCardScreen);
