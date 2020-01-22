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
} from 'react-native';
import CustomIcon from '../components/CustomIcon';
import stock from '../assets/images/temporaryPictures/stock.png';
import { H2, Label, LittleText } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import ImageWithLoader from '../components/ImageWithLoader';

Icon.loadFont();
IonIcon.loadFont();

const styles = StyleSheet.create({
	page: {
		flex: 1,
		padding: 13,
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
		marginBottom: 12,
		borderRadius: 6,
		overflow: 'hidden',
		height: 150,
	},
	section: {
		marginBottom: 12,
	},
	listEmptyComponent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const ItemSeparatorComponent = (props) => <View style={{width: props.width || 15}}/>;

const ListEmptyComponent = () => (
	<View style={styles.listEmptyComponent}>
		<H2>Нет данных для отображения</H2>
	</View>
);

const SectionHeader = (props) => (
	<View style={{
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
	}}>
		<H2>{props.title}</H2>
		<TouchableOpacity
			activeOpacity={0.3}
			onPress={() => alert('show more clicked')}>
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
	renderMenuItem = ({item}) => {
		return (
			<TouchableOpacity activeOpacity={0.3} onPress={() => alert(item.title)}>
				<View style={[styles.item, {backgroundColor: item.color}]}>
					<CustomIcon
						color={'white'}
						name={item.icon}
						size={43}/>
					<LittleText style={{color: 'white'}}>{item.title}</LittleText>
				</View>
			</TouchableOpacity>
		);
	};
	
	renderPopularDishes = ({item}) => {
		return (
			<View
				style={{
					width: 250,
					height: 211,
					borderWidth: 1,
					borderRadius: 4,
					overflow: 'hidden',
				}}>
				<ImageWithLoader
					resizeMode='cover'
					style={{width: '100%', height: 129}}
					source={{uri: item.image}}
				/>
				<View>
					<Label>{item.title}</Label>
					<LittleText>{item.category}</LittleText>
					<ReactNative.Text>{item.price}</ReactNative.Text>
					<Stars
						default={item.rating}
						count={5}
						starSize={20}
						spacing={6}
						fullStar={<Icon size={20} color={'#FFC700'} name={'star'}/>}
						emptyStar={<Icon size={20} color={'#DAD9E2'} name={'star'}/>}
					/>
				</View>
			</View>
		);
	};
	
	keyExtractor = item => item.id;
	
	renderSeparator = width => () => (
		<ItemSeparatorComponent width={width}/>
	);
	
	render() {
		return (
			<ScreenContainer style={styles.page}>
				<View style={styles.header}>
					<ImageBackground source={stock} style={{width: '100%', height: '100%'}}/>
				</View>
				<View style={styles.section}>
					<SectionHeader title='Меню'/>
					<View>
						<FlatList
							data={this.props.categories}
							horizontal
							ItemSeparatorComponent={this.renderSeparator(20)}
							renderItem={this.renderMenuItem}
							keyExtractor={this.keyExtractor}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{height: 97, flex: !!this.props.categories.length ? 0 : 1}}
							ListEmptyComponent={ListEmptyComponent}
						/>
					</View>
				</View>
				<View style={styles.section}>
					<SectionHeader title='Популярные блюда'/>
					<View>
						<FlatList
							data={this.props.popularDishes}
							horizontal
							ItemSeparatorComponent={this.renderSeparator(15)}
							renderItem={this.renderPopularDishes}
							keyExtractor={this.keyExtractor}
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{height: 211, flex: !!this.props.popularDishes.length ? 0 : 1}}
							ListEmptyComponent={ListEmptyComponent}
						/>
					</View>
				</View>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	popularDishes: state.menu.popularDishes,
	categories: state.menu.categories,
});

export default connect(mapStateToProps, null)(HomeScreen);
