import React from 'react';
import { Alert, Dimensions, ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import CustomIcon from '../components/CustomIcon';
import Button from '../components/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreditCard from 'react-native-credit-card-input/src/CardView';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { deleteCard, setDefaultCard } from '../store/actions/profile';
import { Bold } from '../components/Texts';
import { translate } from '../localization/i18n';

const deviceWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
	$width: deviceWidth,
	$widthWithoutPadding: '$width - 20rem',
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		paddingTop: '10rem',
		paddingBottom: '20rem',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
	},
	cardsContainer: {
		flexGrow: 1,
	},
	contentContainerStyle: {
		flexGrow: 1,
	},
	$iconSize: '200rem',
	footer: {
		paddingTop: '10rem',
		paddingHorizontal: '20rem',
	},
	card: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	rightAction: {
		marginLeft: '-15rem',
		marginVertical: '30rem',
		paddingHorizontal: '10rem',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	$50: '50rem',
	icon: {
		width: '50rem',
		height: '50rem',
		textAlign: 'center',
	},
	rectButton: {
		width: '$50',
		height: '$50',
		borderRadius: '25rem',
		overflow: 'hidden',
	},
	header: {
		paddingHorizontal: '50rem',
		marginBottom: '10rem',
	},
});

const MyCardsScreen = (props) => {
	let row: Array<any> = [];
	let prevOpenedRow;
	const navigateToAddCard = () => props.navigation.navigate('AddCard', {prevScreen: 'YourCards'});
	const setDefaultCardHandler = (card) => () => {
		if (card.default) {
			Alert.alert(translate('defaultCard'));
			return;
		}
		props.setDefaultCard(card);
	};
	
	const deleteCardHandler = (card) => () => {
		Alert.alert(
			translate('deleteThisCard'),
			`№${card.number}`,
			[
				{text: translate('cancel'), style: 'cancel'},
				{text: translate('delete'), onPress: () => props.deleteCard(card)},
			],
			{cancelable: false},
		);
	};
	
	const closeRow = (index) => {
		if (prevOpenedRow && prevOpenedRow !== row[index]) {
			prevOpenedRow.close();
		}
		prevOpenedRow = row[index];
	};
	
	const renderCard = (card, index) => {
		const arrOfPart = card.number.split(' ');
		const number = `**** **** **** ${arrOfPart[arrOfPart.length - 1]}`;
		const scale = styles.$widthWithoutPadding / 300;
		return (
			<View style={styles.card} key={index}>
				<Swipeable
					ref={ref => row[index] = ref}
					friction={2}
					rightThreshold={20}
					renderRightActions={renderRightActions(card)}
					overshootRight={false}
					onSwipeableOpen={() => closeRow(index)}
				>
					<View style={{
						width: deviceWidth,
						flexDirection: 'row',
						justifyContent: 'center',
						minHeight: 200 * scale,
					}}>
						<CreditCard
							scale={scale}
							{...card}
							number={number}
							brand={card.type}
						/>
					</View>
				</Swipeable>
			</View>
		);
	};
	
	const renderRightActions = (card) => () => {
		return (
			<View style={styles.rightAction}>
				<RectButton style={styles.rectButton} onPress={setDefaultCardHandler(card)}>
					<Icon
						style={styles.icon}
						name='ios-checkmark-circle'
						size={styles.$50}
						color={card.default ? '#F52D56' : config.GreyColor}
					/>
				</RectButton>
				<RectButton style={styles.rectButton} onPress={deleteCardHandler(card)}>
					<Icon
						style={styles.icon}
						name='ios-close-circle'
						size={styles.$50}
						color={'black'}
					/>
				</RectButton>
			</View>
		);
	};
	
	return (
		<View style={styles.page}>
			<View style={styles.header}>
				<Bold style={{textAlign: 'center'}}>{translate('swipeLeftDescription')}</Bold>
			</View>
			<ScrollView
				scrollEnabled={true}
				contentContainerStyle={styles.contentContainerStyle}
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps='handled'
			>
				{!props.cards || !props.cards.length ?
					<View style={styles.iconContainer}>
						<CustomIcon
							name={'card'}
							color={config.GreyColor}
							size={styles.$iconSize}/>
					</View> :
					<View style={styles.cardsContainer}>
						{props.cards.map(renderCard)}
					</View>
				}
			</ScrollView>
			<View style={styles.footer}>
				<Button
					onPress={navigateToAddCard}
					title={translate('addCard')}
				/>
			</View>
		</View>
	);
};

const mapStateToProps = state => ({
	cards: state.profile.cards,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			setDefaultCard,
			deleteCard,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCardsScreen);
