import React, { Component, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Bold, H2, MiddleText } from '../components/Texts';
import config from '../../config';
import { BoxShadow } from 'react-native-shadow';
import ImageWithLoader from '../components/ImageWithLoader';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/FontAwesome';
import Price from '../components/Price';

const width = Dimensions.get('window').width - 54;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		paddingHorizontal: 9,
	},
	popularDishes: {
		flex: 1,
		borderRadius: 4,
		overflow: 'hidden',
		backgroundColor: 'white',
	},
	popularDishesFooter: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		marginTop: 8,
		flexGrow: 1,
	},
	wrapper: {
		width: width / 2,
		marginHorizontal: 9,
		backgroundColor: '#fff',
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
		border: 10,
		radius: 4,
		opacity: config.shadowOptOpacity,
		x: 0,
		y: 0,
		style: {
			marginHorizontal: 9,
			backgroundColor: '#fff',
		}
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
						paddingVertical: 10,
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
						style={{width: '100%', height: 146}}
						source={{uri: item.image}}
					/>
					<View style={{padding: 11, flex: 1}}>
						<Bold style={{marginBottom: 3}}>{item.title}</Bold>
						<MiddleText>{item.category}</MiddleText>
						<View style={styles.popularDishesFooter}>
							<View style={{marginRight: 5}}>
								<Stars
									disabled
									default={item.rating}
									count={5}
									starSize={14}
									spacing={3}
									fullStar={<Icon size={14} color={'#FFC700'} name={'star'}/>}
									emptyStar={<Icon size={14} color={'#DAD9E2'} name={'star'}/>}
								/>
							</View>
							<Price title={item.price}/>
						</View>
					</View>
				</View>
			</Wrapper>
		);
	};
	
	renderSeparator = () => <View style={{height: 18}}/>;
	
	keyExtractor = (item) => item.id;
}

const mapStateToProps = state => ({
	popularDishes: state.menu.popularDishes,
});

export default connect(mapStateToProps, null)(PopularDishesScreen);
