import React, { Component, Fragment } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
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
	smallButtonStyle: {
		width: '62rem',
	},
	buttonTextStyle: {
		fontSize: '14rem',
	},
	buttonContainer: {
		width: '134rem',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
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
	smallTextStyle: {
		fontSize: '13rem',
		lineHeight: '13rem',
		height: '13rem',
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
	prices: {
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	$2: '2rem',
});

class CategoryScreen extends Component {
	componentDidMount() {
		const id = this.props.navigation.getParam('id');
		const selectedCategory = this.props.categories.find(x => x.id === id);
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
				/>
			</View>
		);
	}
	
	renderItem = ({item}) => {
		return (
			<TouchableOpacity
				activeOpacity={0.3}
				onPress={this.navigateToDishScreen(item)}>
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
							{item.additionalItem ?
								<Fragment>
									<View style={styles.buttonContainer}>
										<Button
											textStyle={styles.buttonTextStyle}
											buttonStyle={styles.smallButtonStyle}
											onPress={this.addToBasket(item, item.additionalItem)}
											title={item.additionalItem.additionalTitle}
										/>
										<Button
											textStyle={styles.buttonTextStyle}
											buttonStyle={styles.smallButtonStyle}
											onPress={this.addToBasket(item)}
											title={item.additionalTitle || translate('toBasket')}
										/>
									</View>
									<View style={styles.prices}>
										<Price style={{marginBottom: styles.$2}} textStyle={styles.smallTextStyle}
											   title={item.additionalItem.price}/>
										<Price textStyle={styles.textStyle} title={item.price}/>
									</View>
								</Fragment> :
								<Fragment>
									<Button
										textStyle={styles.buttonTextStyle}
										buttonStyle={styles.buttonStyle}
										onPress={this.addToBasket(item)}
										title={translate('toBasket')}
									/>
									<Price textStyle={styles.textStyle} title={item.price}/>
								</Fragment>
							}
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};
	
	addToBasket = (item, additionalItem) => () => {
		return this.props.addToBasket(item, additionalItem);
	};
	
	navigateToDishScreen = (item) => () => {
		this.props.navigation.navigate('Dish', {
			id: item.id,
			categoryId: this.state.categoryId,
			title: item.title,
		});
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
