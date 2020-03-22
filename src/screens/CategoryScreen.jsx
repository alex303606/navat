import React, { Component } from 'react';
import { View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import config from '../../config';
import { bindActionCreators } from 'redux';
import { addToBasket } from '../store/actions/basket';
import EStyleSheet from 'react-native-extended-stylesheet';
import Item from '../components/Item';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
	},
	separator: {
		height: '10rem',
		backgroundColor: 'white',
	},
	contentContainerStyle: {
		paddingVertical: '10rem',
		backgroundColor: 'white',
	},
});

class CategoryScreen extends Component {
	componentDidMount() {
		const id = this.props.navigation.getParam('id');
		const selectedCategory = this.props.categories[id];
		this.setState({
			dishes: selectedCategory.dishes,
			categoryId: id,
		});
	}
	
	state = {
		categoryId: '',
		dishes: [],
	};
	
	render() {
		return (
			<View style={styles.page}>
				<FlatList
					data={this.state.dishes}
					ItemSeparatorComponent={this.renderSeparator}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.contentContainerStyle}
				/>
			</View>
		);
	}
	
	renderItem = ({item, index}) => {
		return <Item
			location={this.props.profile.location}
			item={item}
			onPress={this.navigateToDishScreen(index)}
			addToBasket={this.addToBasket}
		/>
	};
	
	addToBasket = (item, additionalItem) => () => {
		return this.props.addToBasket(item, additionalItem);
	};
	
	navigateToDishScreen = index => (item) => () => {
		this.props.navigation.navigate('Dish', {
			id: index,
			categoryId: this.state.categoryId,
			title: item.title,
		});
	};
	
	renderSeparator = () => <View style={styles.separator}/>;
	
	keyExtractor = (item) => item.title;
}

const mapStateToProps = state => ({
	categories: state.menu.categories,
	profile: state.profile,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			addToBasket,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
