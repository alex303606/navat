import React, { Component, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { Bold, H2, MiddleText } from '../components/Texts';
import config from '../../config';
import { BoxShadow } from 'react-native-shadow';
import ImageWithLoader from '../components/ImageWithLoader';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';
import Price from '../components/Price';
import EStyleSheet from 'react-native-extended-stylesheet';

const width = Dimensions.get('window').width - 54;

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		paddingHorizontal: '9rem',
	},
	popularDishes: {
		flex: 1,
		borderRadius: '4rem',
		overflow: 'hidden',
		backgroundColor: 'white',
	},
	popularDishesFooter: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		marginTop: '8rem',
		flexGrow: 1,
	},
	wrapper: {
		width: width / 2,
		marginHorizontal: '9rem',
		backgroundColor: '#fff',
	},
	$border: '10rem',
	$radius: '4rem',
	$3: '3rem',
	$5: '5rem',
	$9: '9rem',
	$10: '10rem',
	$11: '11rem',
	$18: '18rem',
	$starSize: '14rem',
	imageWithLoader: {
		width: '100%',
		height: '146rem',
	},
	bold: {
		marginBottom: 3,
	},
});

const ListEmptyComponent = () => (
	<View style={styles.listEmptyComponent}>
		<H2>Нет данных для отображения</H2>
	</View>
);

const Wrapper = props => {
	const [itemHeight, setItemHeight] = useState(0);
	
	const shadowOpt = {
		width: width / 2,
		height: itemHeight,
		color: '#000',
		border: styles.$border,
		radius: styles.$radius,
		opacity: config.shadowOptOpacity,
		x: 0,
		y: 0,
		style: {
			marginHorizontal: styles.$9,
			backgroundColor: '#fff',
		},
	};
	
	const setItemHeightHandler = ({nativeEvent: {layout: {height}}}) => {
		setItemHeight(height);
	};
	
	if (itemHeight === 0) {
		return <View
			onLayout={setItemHeightHandler}
			style={styles.wrapper} {...props}/>;
	}
	
	return (
		<BoxShadow setting={shadowOpt} {...props}/>
	);
};

class PopularDishesScreen extends Component {
	render() {
		return (
			<View style={styles.page}>
				<FlatList
					data={this.props.popularDishes}
					numColumns={2}
					ItemSeparatorComponent={this.renderSeparator}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						flexGrow: 1,
						paddingVertical: styles.$10,
					}}
					ListEmptyComponent={ListEmptyComponent}
				/>
			</View>
		);
	}
	
	renderItem = ({item}) => {
		return (
			<Wrapper>
				<View style={styles.popularDishes}>
					<ImageWithLoader
						resizeMode='cover'
						style={styles.imageWithLoader}
						source={{uri: item.image}}
					/>
					<View style={{padding: styles.$11, flex: 1}}>
						<Bold style={styles.bold}>{item.title}</Bold>
						<MiddleText>{item.category}</MiddleText>
						<View style={styles.popularDishesFooter}>
							<View style={{marginRight: styles.$5}}>
								<Stars
									disabled
									default={item.rating}
									count={5}
									starSize={styles.starSize}
									spacing={styles.$3}
									fullStar={<Icon size={styles.starSize} color={'#FFC700'} name={'star'}/>}
									emptyStar={<Icon size={styles.starSize} color={'#DAD9E2'} name={'star'}/>}
								/>
							</View>
							<Price title={item.price}/>
						</View>
					</View>
				</View>
			</Wrapper>
		);
	};
	
	renderSeparator = () => <View style={{height: styles.$18}}/>;
	
	keyExtractor = (item) => item.id;
}

const mapStateToProps = state => ({
	popularDishes: state.menu.popularDishes,
});

export default connect(mapStateToProps, null)(PopularDishesScreen);
