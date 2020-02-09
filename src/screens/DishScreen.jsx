import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { bindActionCreators } from 'redux';
import { addToBasket } from '../store/actions/basket';
import { connect } from 'react-redux';
import ImageWithLoader from '../components/ImageWithLoader';
import { LittleText, Text } from '../components/Texts';
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import Price from '../components/Price';
import config from '../../config';
import { normalizeHeight } from '../utils/utils';

const paddingHorizontal = 27;

const styles = EStyleSheet.create({
	$width: `100% - ${paddingHorizontal * 2}rem`,
	page: {
		flex: 1,
		paddingVertical: normalizeHeight(15),
	},
	contentContainerStyle: {
		paddingHorizontal: `${paddingHorizontal}rem`,
		flexGrow: 1,
	},
	imageWithLoader: {
		width: '100%',
		height: '$width * 0.7',
		marginBottom: normalizeHeight(40),
	},
	description: {
		textAlign: 'center',
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: normalizeHeight(12),
		borderTopWidth: 1,
		borderColor: config.GreyColor,
	},
	buttonStyle: {
		width: '104rem',
		marginRight: '40rem',
	},
	textStyle: {
		fontSize: '22rem',
		lineHeight: '22rem',
		height: '19rem',
	},
	switch: {
		borderColor: config.MainColor,
		borderWidth: 1,
		borderRadius: '5rem',
		height: normalizeHeight(24),
		flexDirection: 'row',
		overflow: 'hidden',
	},
	switchContainer: {
		paddingBottom: normalizeHeight(30),
		paddingHorizontal: '42rem',
	},
	switchTitle: {
		textAlign: 'center',
		marginBottom: normalizeHeight(15),
	},
});

class DishScreen extends Component {
	
	componentDidMount = () => {
		this.setSelectedDish();
	};
	
	componentDidUpdate(prevProps, prevState) {
		this.setSelectedDish();
	}
	
	state = {
		item: {},
		view: 'main',
	};
	
	render() {
		const {item} = this.state;
		const additionalTitle = this.state.view === 'main' ? item.additionalTitle : item.additionalItem ? item.additionalItem.additionalTitle : '';
		const price = this.state.view === 'main' ? item.price : item.additionalItem.price;
		const color = this.state.view === 'main' ? 'white' : config.MainColor;
		const additionalColor = this.state.view === 'additional' ? 'white' : config.MainColor;
		return (
			<View style={styles.page}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					contentContainerStyle={styles.contentContainerStyle}
				>
					<ImageWithLoader
						resizeMode='cover'
						style={styles.imageWithLoader}
						source={{uri: item.image}}
					/>
					<Text style={styles.description}>{item.description}</Text>
				</ScrollView>
				{item.additionalItem &&
				<View style={styles.switchContainer}>
					<Text style={styles.switchTitle}>
						{additionalTitle || 'Порция'}
					</Text>
					<View style={styles.switch}>
						<TouchableOpacity
							activeOpacity={0.3}
							style={{
								width: '50%',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: color,
							}}
							onPress={this.switchHandler('additional')}>
							<LittleText
								style={{color: additionalColor}}>{item.additionalItem.additionalTitle || '1 шт'}</LittleText>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.3}
							style={{
								width: '50%',
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: additionalColor,
							}}
							onPress={this.switchHandler('main')}>
							<LittleText style={{color}}>{item.additionalTitle || 'Порция'}</LittleText>
						</TouchableOpacity>
					</View>
				</View>
				}
				<View style={styles.footer}>
					<Button
						buttonStyle={styles.buttonStyle}
						onPress={this.addToBasket}
						title={translate('toBasket')}
					/>
					<Price textStyle={styles.textStyle} title={price}/>
				</View>
			</View>
		);
	}
	
	switchHandler = view => () => {
		this.setState({view});
	};
	
	setSelectedDish = () => {
		const dishId = this.props.navigation.getParam('id');
		const categoryId = this.props.navigation.getParam('categoryId');
		if (dishId === this.state.item.id) {
			return;
		}
		const selectedCategory = this.props.categories.find(x => x.id === categoryId);
		const item = selectedCategory.dishes.find(x => x.id === dishId);
		this.setState({item});
	};
	
	addToBasket = () => {
		const {item} = this.state;
		return this.props.addToBasket({
			...this.state.item,
			price: this.state.view === 'main' ? item.price : item.additionalItem.price,
			id: this.state.view === 'main' ? item.id : item.additionalItem.id,
			additionalTitle: this.state.view === 'main' ? item.additionalTitle : item.additionalItem.additionalTitle,
		});
	};
}

const mapStateToProps = state => ({
	categories: state.menu.categories,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			addToBasket,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DishScreen);
