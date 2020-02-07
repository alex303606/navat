import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import config from '../../config';
import { Description, Label } from '../components/Texts';
import ImageWithLoader from '../components/ImageWithLoader';
import { translate } from '../localization/i18n';
import Button from '../components/Button';
import Price from '../components/Price';
import { bindActionCreators } from 'redux';
import { addToBasket } from '../store/actions/basket';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		padding: '10rem',
	},
	row: {
		flexDirection: 'row',
		flex: 1,
	},
	image: {
		width: '155rem',
		marginRight: '18rem',
	},
	info: {
		flexDirection: 'column',
		flex: 1,
	},
	infoTop: {
		flexDirection: 'column',
		flexGrow: 1,
	},
	buttonStyle: {
		width: '104rem',
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textStyle: {
		fontSize: '22rem',
		lineHeight: '22rem',
		height: '19rem',
	},
	title: {
		marginBottom: '15rem',
	},
	imageWithLoader: {
		width: '100%',
		height: '120rem',
	},
	separator: {
		height: '10rem',
	},
});

class CategoryScreen extends Component {
	componentDidMount() {
		const id = this.props.navigation.getParam('id');
		this.setState({dishes: this.props.categories[id].dishes});
	}
	
	state = {
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
				/>
			</View>
		);
	}
	
	addToBasket = (item) => () => {
		return this.props.addToBasket(item);
	};
	
	renderItem = ({item}) => {
		return (
			<View style={styles.row}>
				<View style={styles.image}>
					<ImageWithLoader
						resizeMode='cover'
						style={styles.imageWithLoader}
						source={{uri: item.image}}
					/>
				</View>
				<View style={styles.info}>
					<View style={styles.infoTop}>
						<Label numberOfLines={1} style={styles.title}>{item.title}</Label>
						<Description numberOfLines={3}>{item.description}</Description>
					</View>
					<View style={styles.footer}>
						<Button
							buttonStyle={styles.buttonStyle}
							onPress={this.addToBasket(item)}
							title={translate('toBasket')}
						/>
						<Price textStyle={styles.textStyle} title={item.price}/>
					</View>
				</View>
			</View>
		);
	};
	
	renderSeparator = () => <View style={styles.separator}/>;
	
	keyExtractor = (item) => item.id;
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
