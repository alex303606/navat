import React from 'react';
import ReactNative, { ScrollView, View, Linking } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import CustomIcon from '../components/CustomIcon';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';
import Icon from 'react-native-vector-icons/FontAwesome';

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
});

const HelpScreen = () => {
	const pressCall = (phone) => () => {
		try {
			return Linking.openURL(`tel:${phone}`);
		} catch (e) {
			console.log(e);
		}
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
				</ScrollView>
			</Shadow>
		</View>
	);
};

export default HelpScreen;
