import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Stars from 'react-native-stars';
import ReactNative, {
	ImageBackground,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	View,
	Dimensions,
	ScrollView,
} from 'react-native';
import CustomIcon from '../components/CustomIcon';
import stock from '../assets/images/temporaryPictures/stock.png';
import { Bold, H2, LittleText, MiddleText } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import ImageWithLoader from '../components/ImageWithLoader';
import { BoxShadow } from 'react-native-shadow';
import config from '../../config';
import Price from '../components/Price';
import Carousel from '../components/Carousel';

Icon.loadFont();
IonIcon.loadFont();

const pagePadding = 13;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		paddingTop: pagePadding,
		paddingHorizontal: 0,
	},
	item: {
		width: 75,
		height: 97,
		borderRadius: 4,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 7,
		paddingBottom: 9,
		paddingHorizontal: 7,
	},
	showMoreBtn: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	showMoreIconWrapper: {
		width: 16,
		height: 16,
		marginLeft: 4,
	},
	showMoreIcon: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -8,
		marginLeft: -8,
	},
	showMoreText: {
		fontSize: 16,
		lineHeight: 19,
		fontWeight: 'normal',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#F52D56',
	},
	header: {
		height: 150,
		marginBottom: 12,
		paddingHorizontal: pagePadding,
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
		width: 250,
		height: 211,
		borderRadius: 4,
		overflow: 'hidden',
		backgroundColor: 'white',
	},
	popularDishesFooter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 8,
	},
	headerImage: {
		borderRadius: 6,
		overflow: 'hidden',
		width: '100%',
		height: '100%',
	},
	sectionHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
		paddingHorizontal: pagePadding,
	},
});

const ItemSeparatorComponent = (props) => <View style={{width: props.width || 15}}/>;

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
				<ReactNative.Text style={styles.showMoreText}>Показать все</ReactNative.Text>
				<View style={styles.showMoreIconWrapper}>
					<Icon
						style={styles.showMoreIcon}
						name="angle-double-right"
						size={16}
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
	
	navigateToCategory = (id) => () => {
		this.props.navigation.navigate('Category', {id})
	};
	
	renderMenuItem = ({item}) => {
		const shadowOpt = {
			width: 75,
			height: 97,
			color: '#000',
			border: 3,
			radius: 4,
			opacity: config.shadowOptOpacity,
			x: 3,
			y: 3,
			style: {marginHorizontal: 5},
		};
		
		return (
			<TouchableOpacity activeOpacity={0.3} onPress={this.navigateToCategory(item.id)}>
				<BoxShadow setting={shadowOpt}>
					<View style={[styles.item, {backgroundColor: item.color}]}>
						<CustomIcon
							color={'white'}
							name={item.icon}
							size={43}/>
						<LittleText style={{color: 'white'}}>{item.title}</LittleText>
					</View>
				</BoxShadow>
			</TouchableOpacity>
		);
	};
	
	renderPopularDishes = ({item}) => {
		const shadowOpt = {
			width: 250,
			height: 211,
			color: '#000',
			border: 3,
			radius: 4,
			opacity: config.shadowOptOpacity,
			x: 3,
			y: 3,
			style: {marginHorizontal: 5},
		};
		return (
			<BoxShadow setting={shadowOpt}>
				<View
					style={styles.popularDishes}>
					<ImageWithLoader
						resizeMode='cover'
						style={{width: '100%', height: 129}}
						source={{uri: item.image}}
					/>
					<View style={{padding: 11, flex: 1}}>
						<Bold style={{marginBottom: 3}}>{item.title}</Bold>
						<MiddleText>{item.category}</MiddleText>
						<View style={styles.popularDishesFooter}>
							<Stars
								disabled
								default={item.rating}
								count={5}
								starSize={14}
								spacing={3}
								fullStar={<Icon size={14} color={'#FFC700'} name={'star'}/>}
								emptyStar={<Icon size={14} color={'#DAD9E2'} name={'star'}/>}
							/>
							<Price title={item.price}/>
						</View>
					</View>
				</View>
			</BoxShadow>
		);
	};
	
	keyExtractor = item => item.id;
	
	renderSeparator = width => () => (
		<ItemSeparatorComponent width={width}/>
	);
	
	render() {
		const shadowOpt = {
			width: Dimensions.get('window').width - pagePadding * 2,
			height: 150,
			color: '#000',
			border: 4,
			radius: 6,
			opacity: config.shadowOptOpacity,
			x: 0,
			y: 4,
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
						<SectionHeader navigation={this.props.navigation} targetScreen='Menu' title='Меню'/>
						<FlatList
							data={this.props.categories}
							horizontal
							ItemSeparatorComponent={this.renderSeparator(10)}
							renderItem={this.renderMenuItem}
							keyExtractor={this.keyExtractor}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{
								height: 111,
								paddingHorizontal: 8,
								flex: !!this.props.categories.length ? 0 : 1,
							}}
							ListEmptyComponent={ListEmptyComponent}
						/>
					</View>
					<View style={styles.section}>
						<SectionHeader navigation={this.props.navigation} targetScreen='PopularDishes' title='Популярные блюда'/>
						<FlatList
							data={this.props.popularDishes}
							horizontal
							ItemSeparatorComponent={this.renderSeparator(10)}
							renderItem={this.renderPopularDishes}
							keyExtractor={this.keyExtractor}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{
								height: 223,
								paddingHorizontal: 8,
								flex: !!this.props.popularDishes.length ? 0 : 1,
							}}
							ListEmptyComponent={ListEmptyComponent}
						/>
					</View>
					<View style={styles.section}>
						<SectionHeader navigation={this.props.navigation} targetScreen='Branches' title='Наши заведения'/>
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
