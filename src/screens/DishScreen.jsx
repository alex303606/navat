import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { bindActionCreators } from 'redux';
import { addToBasket } from '../store/actions/basket';
import { connect } from 'react-redux';
import ImageWithLoader from '../components/ImageWithLoader';
import { Text } from '../components/Texts';
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import Price from '../components/Price';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		paddingVertical: '15rem',
	},
	contentContainerStyle: {
		paddingHorizontal: '27rem',
		flexGrow: 1,
	},
	imageWithLoader: {
		width: '100%',
		height: '250rem',
		marginBottom: '40rem',
	},
	description: {
		textAlign: 'center',
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: '12rem',
		borderTopWidth: 1,
		borderColor: '#C1C0C9',
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
});

class DishScreen extends Component {
	
	componentDidMount = () => {
		const dishId = this.props.navigation.getParam('id');
		const categoryId = this.props.navigation.getParam('categoryId');
		const selectedCategory = this.props.categories.find(x => x.id === categoryId);
		const item = selectedCategory.dishes.find(x => x.id === dishId);
		this.setState({item});
	};
	
	state = {
		item: {},
	};
	
	render() {
		const {item} = this.state;
		console.log(item);
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
				<View style={styles.footer}>
					<Button
						buttonStyle={styles.buttonStyle}
						onPress={this.addToBasket(item)}
						title={translate('toBasket')}
					/>
					<Price textStyle={styles.textStyle} title={item.price}/>
				</View>
			</View>
		);
	}
	
	addToBasket = (item) => () => {
		return this.props.addToBasket(item);
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
