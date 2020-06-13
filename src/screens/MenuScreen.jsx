import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Shadow from '../components/Shadow';
import { Bold, H2 } from '../components/Texts';
import { translate } from '../localization/i18n';
import { connect } from 'react-redux';
import CustomIcon from '../components/CustomIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
	},
	modal: {
		backgroundColor: 'white',
		paddingHorizontal: '33rem',
		paddingTop: '13rem',
		borderTopLeftRadius: '8rem',
		borderTopRightRadius: '8rem',
		flex: 1,
	},
	modalWrap: {
		paddingBottom: '3rem',
		flex: 1,
		marginTop: '10rem',
	},
	title: {
		textAlign: 'center',
	},
	contentContainerStyle: {
		flexGrow: 1,
		paddingVertical: '8rem',
	},
	separator: {
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: '10rem',
		justifyContent: 'space-between',
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
	},
	itemIcon: {
		width: '65rem',
	},
	arrow: {
		marginRight: '10rem',
	},
	$size: '35rem',
});

class MenuScreen extends Component {
	static navigationOptions = () => {
		return {
			header: null,
		};
	};
	
	render() {
		return (
			<ScreenContainer style={styles.page}>
				<View style={styles.modalWrap}>
					<Shadow style={styles.modal}>
						<H2 style={styles.title}>{translate('tabbar.Menu')}</H2>
						<FlatList
							data={this.props.categories}
							contentContainerStyle={styles.contentContainerStyle}
							ItemSeparatorComponent={this.renderSeparator}
							renderItem={this.renderMenuItem}
							keyExtractor={this.keyExtractor}
							showsVerticalScrollIndicator={false}
						/>
					</Shadow>
				</View>
			</ScreenContainer>
		);
	}
	
	keyExtractor = item => item.id;
	
	renderSeparator = () => <View style={styles.separator}/>;
	
	navigateToCategory = (item, index) => () => {
		this.props.navigation.navigate('Category', {id: index, title: item.title})
	};
	
	renderMenuItem = ({item, index}) => {
		if (!item.dishes || !item.dishes.length) {
			return <View/>;
		}
		return (
			<TouchableOpacity activeOpacity={0.3} onPress={this.navigateToCategory(item, index)}>
				<View style={styles.item}>
					<View style={styles.itemLeft}>
						<View style={styles.itemIcon}>
							<CustomIcon
								color={item.color}
								name={item.icon}
								size={styles.$size}/>
						</View>
						<View style={{flexGrow: 1, marginRight: 10}}>
							<View style={{flexDirection: 'row'}}>
								<Bold
									numberOfLines={2}
									style={{flex: 1, flexWrap: 'wrap'}}
								>{item.title}</Bold>
							</View>
						</View>
					</View>
					<Icon
						style={styles.arrow}
						name="angle-right"
						size={styles.$size}
						color={'#C8C7CC'}
					/>
				</View>
			</TouchableOpacity>
		);
	};
}

const mapStateToProps = state => ({
	categories: state.menu.categories,
});

export default connect(mapStateToProps, null)(MenuScreen);
