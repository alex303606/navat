import React from 'react';
import ReactNative, { ScrollView, View, Linking, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import CustomIcon from '../components/CustomIcon';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Bold, MiddleText } from '../components/Texts';

const styles = EStyleSheet.create({
	$marginBottom: '13rem',
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		padding: '20rem',
	},
	modal: {
		backgroundColor: 'white',
		paddingHorizontal: '20rem',
		paddingVertical: '25rem',
		borderRadius: '8rem',
	},
	topModal: {
		marginBottom: '20rem',
	},
	bottomModal: {
		flex: 1,
	},
	$50: '50rem',
	centerView: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: '17rem',
		lineHeight: '20rem',
		fontFamily: getCustomFontFamilyByFontWeight(600),
		marginBottom: '4rem',
	},
	text: {
		fontSize: '17rem',
		lineHeight: '20rem',
		fontFamily: getCustomFontFamilyByFontWeight(200),
		color: '#262628',
	},
	hasBorderBottom: {
		paddingBottom: '13rem',
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
		marginBottom: '$marginBottom',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconPhone: {
		marginRight: '5rem',
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: '10rem',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
	},
	itemLeft: {
		flexDirection: 'column',
	},
	itemIcon: {
		width: '65rem',
	},
	arrow: {
		marginRight: '10rem',
	},
	$size: '35rem',
});

const items = [
	{
		key: '0',
		title: 'Как заказать?',
		description: 'Все шаги от заказа до получения',
		targetScreen: 'Template',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda dolorem dolores doloribus excepturi fugiat, id itaque labore laborum modi nisi nobis obcaecati quae reiciendis rem temporibus, vero voluptas, voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem consequatur doloremque eius facere facilis, fugiat hic ipsam iste labore, laudantium magnam molestias mollitia, praesentium rerum sequi sunt veritatis voluptatibus!'
	},
	{
		key: '1',
		title: 'Вопрос 1',
		description: 'Краткое описание',
		targetScreen: 'Template',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda dolorem dolores doloribus excepturi fugiat, id itaque labore laborum modi nisi nobis obcaecati quae reiciendis rem temporibus, vero voluptas, voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem consequatur doloremque eius facere facilis, fugiat hic ipsam iste labore, laudantium magnam molestias mollitia, praesentium rerum sequi sunt veritatis voluptatibus!'
	},
	{
		key: '2',
		title: 'Вопрос 2',
		description: 'Краткое описание',
		targetScreen: 'Template',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda dolorem dolores doloribus excepturi fugiat, id itaque labore laborum modi nisi nobis obcaecati quae reiciendis rem temporibus, vero voluptas, voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem consequatur doloremque eius facere facilis, fugiat hic ipsam iste labore, laudantium magnam molestias mollitia, praesentium rerum sequi sunt veritatis voluptatibus!'
	},
];

const HelpScreen = (props) => {
	const pressCall = (phone) => () => {
		try {
			return Linking.openURL(`tel:${phone}`);
		} catch (e) {
			console.log(e);
		}
	};
	
	const navigateToCategory = (item) => () => {
		props.navigation.navigate(item.targetScreen, {item, prevScreen: 'Help'});
	};
	
	const renderItem = (item) => {
		return (
			<TouchableOpacity key={item.key} activeOpacity={0.3} onPress={navigateToCategory(item)}>
				<View style={styles.item}>
					<View style={styles.itemLeft}>
						<Bold>{item.title}</Bold>
						<MiddleText style={{marginTop: 3}}>{item.description}</MiddleText>
					</View>
					<Icon
						style={styles.arrow}
						name="angle-right"
						size={styles.$size}
						color={'#C8C7CC'}
					/>
				</View>
			</TouchableOpacity>
		);
	};
	
	return (
		<View style={styles.page}>
			<Shadow style={[styles.modal, styles.topModal]}>
				<View style={[styles.centerView, {marginBottom: styles.$marginBottom}]}>
					<CustomIcon
						color={config.MainColor}
						name={'ico_support'}
						size={styles.$50}/>
				</View>
				<View style={[styles.centerView, styles.hasBorderBottom]}>
					<ReactNative.Text style={styles.title}>Отзывы и предложения:</ReactNative.Text>
					<View style={styles.row}>
						<Icon
							style={styles.iconPhone}
							name={'phone'}
							size={20}
							color={config.GreyColor}
						/>
						<ReactNative.Text
							onPress={pressCall('+996555555555')}
							style={styles.text}>
							+996 555 55-55-55
						</ReactNative.Text>
					</View>
				</View>
				<View style={styles.centerView}>
					<ReactNative.Text style={styles.title}>Служба доставки:</ReactNative.Text>
					<View style={styles.row}>
						<Icon
							style={styles.iconPhone}
							name={'phone'}
							size={20}
							color={config.GreyColor}
						/>
						<ReactNative.Text
							onPress={pressCall('+996555555555')}
							style={styles.text}>
							+996 555 55-55-55
						</ReactNative.Text>
					</View>
				</View>
			</Shadow>
			<Shadow style={[styles.modal, styles.bottomModal]}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{flexGrow: 1}}
				>
					{items.map(renderItem)}
				</ScrollView>
			</Shadow>
		</View>
	);
};

export default HelpScreen;
