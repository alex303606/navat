import React from 'react';
import { connect } from 'react-redux';
import ReactNative, { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import config from '../../config';
import { bindActionCreators } from 'redux';
import { signOut } from '../store/actions/profile';
import EStyleSheet from 'react-native-extended-stylesheet';
import Shadow from '../components/Shadow';
import Icon from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Bold, H1, Label, MiddleText } from '../components/Texts';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';
import CustomIcon from '../components/CustomIcon';
import Settings from '../assets/images/settings.svg';
import Support from '../assets/images/support.svg';
import Privacy from '../assets/images/privacy.svg';
import Terms from '../assets/images/terms.svg';

const settings = [
	{
		title: 'Платежная информация',
		description: 'Добавьте свою платежную карту',
	},
	{
		title: 'Адреса доставки',
		description: 'Добавляйте или удаляте ваши адреса',
	},
	{
		title: 'Приведи друга',
		description: 'Получи 500 сом в подарок',
	},
	{
		title: 'Служба поддержки',
		icon: () => <Support/>,
	},
	{
		title: 'Настройки',
		icon: () => <Settings/>,
	},
	{
		title: 'Условия использования',
		icon: () => <Terms/>,
	},
	{
		title: 'Политика конфиденциальности',
		icon: () => <Privacy/>,
	},
];

const styles = EStyleSheet.create({
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
		marginBottom: '13rem',
		position: 'relative',
	},
	bottomModal: {
		flex: 1,
		paddingLeft: '30rem',
		paddingVertical: '10rem',
	},
	top: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#EFEFF4',
		paddingBottom: '10rem',
	},
	avatar: {
		width: '60rem',
		height: '60rem',
		borderRadius: '30rem',
		backgroundColor: '#C8C7CC',
		marginRight: '14rem',
		alignItems: 'center',
		justifyContent: 'center',
	},
	description: {
		color: '#9B9B9B',
	},
	userName: {
		fontSize: '17rem',
		lineHeight: '20rem',
		fontFamily: getCustomFontFamilyByFontWeight(600),
		marginBottom: '4rem',
	},
	bottom: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: '20rem',
	},
	editProfile: {
		position: 'absolute',
		top: '15rem',
		right: '15rem',
	},
	title: {
		textAlign: 'center',
		marginBottom: '8rem',
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: '15rem',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	itemIcon: {
		marginRight: '8rem',
	},
	arrow: {
		marginRight: '10rem',
	},
	$size: '35rem',
});

const ProfileScreen = (props) => {
	const editProfile = () => props.navigation.navigate('PersonalData');
	const navigateToItemSettings = () => props.signOut();
	
	const renderSettingsItem = (item, index) => {
		return (
			<TouchableOpacity key={index} activeOpacity={0.3} onPress={navigateToItemSettings}>
				<View style={[styles.item, {borderBottomWidth: (settings.length - 1) === index ? 0 : 1}]}>
					<View style={styles.itemLeft}>
						{item.icon && <View style={styles.itemIcon}>{item.icon()}</View>}
						<View>
							<Bold>{item.title}</Bold>
							{!!item.description &&
							<MiddleText style={{marginTop: 3}}>{item.description}</MiddleText>
							}
						</View>
					</View>
					<IconFontAwesome
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
				<View style={styles.top}>
					<View style={styles.avatar}>
						<Icon
							style={styles.icon}
							name='user'
							size={40}
							color={'white'}
						/>
					</View>
					<View>
						<ReactNative.Text style={styles.userName}>Василий Петров</ReactNative.Text>
						<Label style={styles.description}>+996 706 11 00 24</Label>
						<Label style={styles.description}>petrov_vasilii@gmail.com</Label>
					</View>
				</View>
				<View style={styles.bottom}>
					<Bold style={{color: '#9B9B9B'}}>Ваша скидка</Bold>
					<H1 style={{color: config.MainColor}}>5%</H1>
				</View>
				<TouchableOpacity
					style={styles.editProfile}
					activeOpacity={0.3}
					onPress={editProfile}>
					<CustomIcon
						color={'#1E8149'}
						name={'pencil'}
						size={20}/>
				</TouchableOpacity>
			</Shadow>
			<Shadow style={[styles.modal, styles.bottomModal]}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{flexGrow: 1}}
				>
					{settings.map(renderSettingsItem)}
				</ScrollView>
			</Shadow>
		</View>
	);
};

const mapStateToProps = state => ({
	profile: state.profile,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			signOut,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
