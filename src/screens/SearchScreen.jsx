import React, { Component } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import CustomIcon from '../components/CustomIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import { RectButton } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import { addToBasket } from '../store/actions/basket';
import { connect } from 'react-redux';
import Item from '../components/Item';
import { H2 } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import { translate } from '../localization/i18n';

const styles = EStyleSheet.create({
	$size25: '25rem',
	$clearIconSize: '34rem',
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
	},
	input: {
		backgroundColor: 'white',
		height: '40rem',
		paddingHorizontal: '10rem',
		flexGrow: 1,
		fontSize: '17rem',
		paddingVertical: 0,
	},
	searchHeader: {
		paddingHorizontal: '10rem',
		marginBottom: '10rem',
	},
	searchInput: {
		borderRadius: 8,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: '10rem',
	},
	clearButton: {
		width: '$clearIconSize',
		height: '$clearIconSize',
		borderRadius: '$clearIconSize / 2',
		backgroundColor: 'white',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: '$clearIconSize',
		height: '$clearIconSize',
		textAlign: 'center',
	},
	separator: {
		height: '10rem',
		backgroundColor: 'white',
	},
	contentContainerStyle: {
		paddingVertical: '10rem',
		backgroundColor: 'white',
	},
	listEmptyComponent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const ListEmptyComponent = ({value}) => (
	<View style={styles.listEmptyComponent}>
		<H2>{translate(value.length > 1 ? 'emptySearch' : 'enterDishName')}</H2>
	</View>
);

class SearchScreen extends Component {
	componentDidMount() {
		const value = this.props.navigation.getParam('searchValue');
		if (!!value) {
			this.globalSearch(value);
		}
	}
	
	componentWillUnmount() {
		this.props.navigation.setParams({searchValue: this.state.value});
	}
	
	state = {
		value: '',
		filteredItems: [],
	};
	
	render() {
		return (
			<ScreenContainer style={styles.page}>
				<View style={styles.searchHeader}>
					<View style={styles.searchInput}>
						<CustomIcon
							color={config.GreyColor}
							name='search'
							size={styles.$size25}/>
						<TextInput
							autoFocus={false}
							style={styles.input}
							value={this.state.value}
							onChangeText={this.globalSearch}
							underlineColorAndroid='transparent'
						/>
						{!!this.state.value.length &&
							<RectButton style={styles.clearButton} onPress={this.clearSearchValue}>
								<Icon
									style={styles.icon}
									name='ios-close-circle'
									size={styles.$clearIconSize}
									color={config.GreyColor}
								/>
							</RectButton>
						}
					</View>
				</View>
				<FlatList
					data={this.state.filteredItems}
					ItemSeparatorComponent={this.renderSeparator}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={!!this.state.filteredItems.length ?
						styles.contentContainerStyle :
						{flex: 1, backgroundColor: 'white'}}
					ListEmptyComponent={<ListEmptyComponent value={this.state.value}/>}
				/>
			</ScreenContainer>
		);
	}
	
	renderItem = ({item}) => {
		return <Item
			item={item}
			onPress={this.navigateToDishScreen}
			addToBasket={this.addToBasket}
		/>;
	};
	
	addToBasket = (item, additionalItem) => () => {
		return this.props.addToBasket(item, additionalItem);
	};
	
	navigateToDishScreen = (item) => () => {
		this.props.navigation.navigate('Dish', {
			id: item.id,
			categoryId: '1',
			title: item.title,
			prevScreen: 'SearchScreen',
			searchValue: this.state.value,
		});
	};
	
	renderSeparator = () => <View style={styles.separator}/>;
	
	keyExtractor = (item) => item.id;
	
	globalSearch = value => {
		const filteredItems = value.length > 1 ? this.props.categories[0].dishes.filter(x => {
			return x.title.toLowerCase().includes(value.toLowerCase());
		}) : [];
		this.setState({value, filteredItems});
	};
	
	clearSearchValue = () => this.setState({value: '', filteredItems: []});
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
