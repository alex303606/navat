import React, { useEffect, useState } from 'react';
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
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import Loader from '../components/Loader';

const settings = [
	// {
	// 	title: 'billingInformation',
	// 	description: 'addYourCard',
	// 	targetScreen: 'MyCards',
	// },
	// {
	// 	title: 'deliveryAddresses',
	// 	description: 'addYourAddresses',
	// 	targetScreen: 'MyAddresses',
	// },
	// {
	// 	title: 'bringFriend',
	// 	description: 'getGift',
	// 	targetScreen: 'Template',
	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda dolorem dolores doloribus excepturi fugiat, id itaque labore laborum modi nisi nobis obcaecati quae reiciendis rem temporibus, vero voluptas, voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem consequatur doloremque eius facere facilis, fugiat hic ipsam iste labore, laudantium magnam molestias mollitia, praesentium rerum sequi sunt veritatis voluptatibus!'
	// },
	{
		title: 'supportService',
		icon: () => <Support/>,
		targetScreen: 'Help',
	},
	// {
	// 	title: 'settings',
	// 	icon: () => <Settings/>,
	// 	targetScreen: 'Settings',
	// },
	{
		title: 'termsOfUse',
		icon: () => <Terms/>,
		targetScreen: 'Terms',
	},
	{
		title: 'privacyPolicy',
		icon: () => <Privacy/>,
		targetScreen: 'PrivacyPolicy',
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
		overflow: 'hidden',
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
	centerVertical: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	footer: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingTop: '20rem',
	},
});

const ProfileScreen = (props) => {
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		if (!props.profile || !props.profile.userIsLoggedIn) {
			//props.navigation.navigate('Auth');
		}
		setLoading(false);
	}, []);
	
	const editProfile = () => props.navigation.navigate('PersonalData');
	const navigateToItemSettings = item => () => props.navigation.navigate(item.targetScreen, {item, prevScreen: 'Profile'});
	
	const renderSettingsItem = (item, index) => {
		return (
			<TouchableOpacity key={index} activeOpacity={0.3} onPress={navigateToItemSettings(item)}>
				<View style={[styles.item, {borderBottomWidth: (settings.length - 1) === index ? 0 : 1}]}>
					<View style={styles.itemLeft}>
						{item.icon && <View style={styles.itemIcon}>{item.icon()}</View>}
						<View>
							<Bold>{translate(item.title)}</Bold>
							{!!item.description &&
							<MiddleText style={{marginTop: 3}}>
								{translate(item.description)}
							</MiddleText>
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
	
	const dataIsValid = !!props.profile.phone && !!props.profile.phone.phone && !!props.profile.fio && !!props.profile.email;
	
	if (loading) {
		return <Loader/>;
	}
	
	const renderHeader = () => (
		<Shadow style={[styles.modal, styles.topModal]}>
			<View style={styles.top}>
				<View style={styles.avatar}>
					{!!props.profile.avatar && props.profile.avatar.uri ?
						<Image
							style={{width: '100%', height: '100%'}}
							resizeMode='contain'
							source={props.profile.avatar}
						/> :
						<Icon
							style={styles.icon}
							name='user'
							size={40}
							color={'white'}
						/>
					}
				</View>
				{dataIsValid ?
					<View style={styles.centerVertical}>
						<ReactNative.Text style={styles.userName}>{props.profile.fio}</ReactNative.Text>
						<Label style={styles.description}>
							{`+${props.profile.phone.code} ${props.profile.phone.phone}`}
						</Label>
						<Label style={styles.description}>{props.profile.email}</Label>
					</View> :
					<View style={styles.centerVertical}>
						<TouchableOpacity
							activeOpacity={0.3}
							onPress={editProfile}>
							<Bold style={{color: 'red'}}>{translate('fillYourDetails')}</Bold>
						</TouchableOpacity>
					</View>
				}
			</View>
			<View style={styles.bottom}>
				<Bold style={{color: '#9B9B9B'}}>{translate('yourDiscount')}</Bold>
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
	);
	
	return (
		<View style={styles.page}>
			{/*{renderHeader()}*/}
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
			<View style={styles.footer}>
				<Button
					onPress={() => props.signOut()}
					title={translate('exitFromApp')}
				/>
			</View>
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
