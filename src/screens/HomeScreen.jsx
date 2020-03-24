import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stars from 'react-native-stars';
import ReactNative, {
	ImageBackground,
	FlatList,
	TouchableOpacity,
	View,
	Dimensions,
	ScrollView,
} from 'react-native';
import CustomIcon from '../components/CustomIcon';
import stock from '../assets/images/temporaryPictures/stock.jpg';
import { Bold, H2, LittleText, MiddleText } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import ImageWithLoader from '../components/ImageWithLoader';
import { BoxShadow } from 'react-native-shadow';
import config from '../../config';
import Price from '../components/Price';
import Carousel from '../components/Carousel';
import EStyleSheet from 'react-native-extended-stylesheet';
import { translate } from '../localization/i18n';

Icon.loadFont();

const pagePadding = 13;

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		paddingTop: `${pagePadding}rem`,
		paddingHorizontal: 0,
	},
	item: {
		width: '75rem',
		height: '97rem',
		borderRadius: '4rem',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: '7rem',
		paddingBottom: '9rem',
		paddingHorizontal: '7rem',
	},
	showMoreBtn: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	showMoreIconWrapper: {
		width: '16rem',
		height: '16rem',
		marginLeft: '4rem',
	},
	showMoreIcon: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-8rem',
		marginLeft: '-8rem',
	},
	showMoreText: {
		fontSize: '16rem',
		lineHeight: '19rem',
		fontWeight: 'normal',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#F52D56',
	},
	header: {
		height: '150rem',
		marginBottom: '12rem',
		paddingHorizontal: `${pagePadding}rem`,
	},
	section: {
		marginBottom: 0,
	},
	listEmptyComponent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	popularDishes: {
		width: '250rem',
		height: '230rem',
		borderRadius: '4rem',
		overflow: 'hidden',
		backgroundColor: 'white',
	},
	popularDishesFooter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: '8rem',
	},
	headerImage: {
		borderRadius: '6rem',
		overflow: 'hidden',
		width: '100%',
		height: '100%',
	},
	sectionHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '20rem',
		paddingHorizontal: `${pagePadding}rem`,
	},
	$pagePadding: `${pagePadding}rem`,
	$15: '15rem',
	$size: '16rem',
	$width: '75rem',
	$height: '97rem',
	$border: '3rem',
	$radius: '4rem',
	$3: '3rem',
	$5: '5rem',
	$10: '10rem',
	$11: '11rem',
	$150: '150rem',
	$4: '4rem',
	$6: '6rem',
	$iconSize: '43rem',
	$width2: '250rem',
	$height2: '230rem',
	$starSize: '14rem',
	imageWithLoader: {
		width: '100%',
		height: '129rem',
	},
	contentContainerStyle1: {
		height: '111rem',
		paddingHorizontal: '8rem',
	},
	contentContainerStyle2: {
		height: '242rem',
		paddingHorizontal: '8rem',
	},
});

const ItemSeparatorComponent = (props) => <View style={{width: props.width || styles.$15}}/>;

const ListEmptyComponent = () => (
	<View style={styles.listEmptyComponent}>
		<H2>Нет данных для отображения</H2>
	</View>
);

const SectionHeader = (props) => (
	<View style={styles.sectionHeader}>
		<H2>{props.title}</H2>
		<TouchableOpacity
			activeOpacity={0.3}
			onPress={() => props.navigation.navigate(props.targetScreen)}>
			<View style={styles.showMoreBtn}>
				<ReactNative.Text style={styles.showMoreText}>
					{translate('showAll')}
				</ReactNative.Text>
				<View style={styles.showMoreIconWrapper}>
					<Icon
						style={styles.showMoreIcon}
						name="angle-double-right"
						size={styles.$size}
						color={'#F52D56'}
					/>
				</View>
			</View>
		</TouchableOpacity>
	</View>
);

class HomeScreen extends Component {
	static navigationOptions = () => {
		return {
			header: null,
		};
	};
	
	navigateToCategory = (item, index) => () => {
		this.props.navigation.navigate('Category', {id: index, title: item.title, prevScreen: 'Home'});
	};
	
	renderMenuItem = ({item, index}) => {
		if (!item.dishes || !item.dishes.length) {
			return <View/>;
		}
		const shadowOpt = {
			width: styles.$width,
			height: styles.$height,
			border: styles.$border,
			radius: styles.$radius,
			color: '#000',
			opacity: config.shadowOptOpacity,
			x: styles.$3,
			y: styles.$3,
			style: {marginHorizontal: styles.$5},
		};

		return (
			<TouchableOpacity activeOpacity={0.3} onPress={this.navigateToCategory(item, index)}>
				<BoxShadow setting={shadowOpt}>
					<View style={[styles.item, {backgroundColor: item.color}]}>
						<CustomIcon
							color={'white'}
							name={item.icon}
							size={styles.$iconSize}/>
						<LittleText style={{color: 'white', textAlign: 'center'}}>{item.title}</LittleText>
					</View>
				</BoxShadow>
			</TouchableOpacity>
		);
	};
	
	renderPopularDishes = ({item}) => {
		const shadowOpt = {
			width: styles.$width2,
			height: styles.$height2,
			color: '#000',
			border: styles.$border,
			radius: styles.$radius,
			opacity: config.shadowOptOpacity,
			x: styles.$3,
			y: styles.$3,
			style: {marginHorizontal: styles.$5},
		};
		const parenCategory = this.props.categories[item.parentCategoryId];
		const parenCategoryTitle = !!parenCategory ? parenCategory.title : '';

		return (
			<TouchableOpacity
				activeOpacity={0.3}
				onPress={this.navigateToDishScreen(item)}>
				<BoxShadow setting={shadowOpt}>
					<View
						style={styles.popularDishes}>
						<ImageWithLoader
							resizeMode='cover'
							style={styles.imageWithLoader}
							source={item.image}
						/>
						<View style={{padding: styles.$11, flex: 1}}>
							<View style={{flexGrow: 1}}>
								<Bold numberOfLines={2} style={{marginBottom: styles.$3}}>{item.title}</Bold>
								<MiddleText numberOfLines={1}>{parenCategoryTitle}</MiddleText>
							</View>
							<View style={styles.popularDishesFooter}>
								<Stars
									disabled
									default={5}
									count={5}
									starSize={styles.$starSize}
									spacing={styles.$3}
									fullStar={<Icon size={styles.$starSize} color={'#FFC700'} name={'star'}/>}
									emptyStar={<Icon size={styles.$starSize} color={'#DAD9E2'} name={'star'}/>}
								/>
								<Price title={item.price}/>
							</View>
						</View>
					</View>
				</BoxShadow>
			</TouchableOpacity>
		);
	};
	
	navigateToDishScreen = (item) => () => {
		this.props.navigation.navigate('Dish', {
			id: item.id,
			categoryId: item.parentCategoryId,
			title: item.title,
			prevScreen: 'Home',
		});
	};
	
	keyExtractor = item => item.title;
	
	renderSeparator = () => <ItemSeparatorComponent width={styles.$10}/>;
	
	render() {
		const shadowOpt = {
			width: Dimensions.get('window').width - styles.$pagePadding * 2,
			height: styles.$150,
			color: '#000',
			border: styles.$4,
			radius: styles.$6,
			opacity: config.shadowOptOpacity,
			x: 0,
			y: styles.$4,
		};
		return (
			<ScreenContainer style={styles.page}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					contentContainerStyle={{flexGrow: 1}}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.header}>
						<BoxShadow setting={shadowOpt}>
							<ImageBackground source={stock} style={styles.headerImage}/>
						</BoxShadow>
					</View>
					<View style={styles.section}>
						<SectionHeader
							navigation={this.props.navigation}
							targetScreen='Menu'
							title={translate('navigationTitle.Menu')}/>
						<FlatList
							data={this.props.categories}
							horizontal
							ItemSeparatorComponent={this.renderSeparator}
							renderItem={this.renderMenuItem}
							keyExtractor={this.keyExtractor}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={[
								styles.contentContainerStyle1,
								{flex: !!this.props.categories.length ? 0 : 1},
							]}
							ListEmptyComponent={ListEmptyComponent}
						/>
					</View>
					<View style={styles.section}>
						<SectionHeader
							navigation={this.props.navigation}
							targetScreen='PopularDishes'
							title={translate('navigationTitle.PopularDishes')}/>
						<FlatList
							data={this.props.popularDishes}
							horizontal
							ItemSeparatorComponent={this.renderSeparator}
							renderItem={this.renderPopularDishes}
							keyExtractor={this.keyExtractor}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={[
								styles.contentContainerStyle2,
								{flex: !!this.props.popularDishes.length ? 0 : 1},
							]}
							ListEmptyComponent={ListEmptyComponent}
						/>
					</View>
					<View style={styles.section}>
						<SectionHeader
							navigation={this.props.navigation} targetScreen='Branches'
							title={translate('navigationTitle.Branches')}/>
						<Carousel items={this.props.branches}/>
					</View>
				</ScrollView>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	popularDishes: state.menu.popularDishes,
	categories: state.menu.categories,
	branches: state.menu.branches,
});

export default connect(mapStateToProps, null)(HomeScreen);
