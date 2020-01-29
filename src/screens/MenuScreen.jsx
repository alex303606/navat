import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Shadow from '../components/Shadow';
import { Bold, H2 } from '../components/Texts';
import { translate } from '../localization/i18n';
import { connect } from 'react-redux';
import CustomIcon from '../components/CustomIcon';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
	page: {
		flex: 1,
	},
	modal: {
		backgroundColor: 'white',
		paddingHorizontal: 33,
		paddingTop: 13,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		flex: 1,
	},
	modalWrap: {
		paddingBottom: 3,
		flex: 1,
		marginTop: 10,
	},
	title: {
		textAlign: 'center',
		marginBottom: 8,
	},
	separator: {
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		justifyContent: 'space-between',
	},
	itemLeft: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	itemIcon: {
		width: 65,
	},
	arrow: {
		marginRight: 10,
	},
	
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
	
	renderSeparator = () => (
		<View style={styles.separator}/>
	);
	
	renderMenuItem = ({item}) => {
		return (
			<TouchableOpacity activeOpacity={0.3} onPress={() => alert(item.title)}>
				<View style={styles.item}>
					<View style={styles.itemLeft}>
						<View style={styles.itemIcon}>
							<CustomIcon
								color={item.color}
								name={item.icon}
								size={35}/>
						</View>
						<Bold>{item.title}</Bold>
					</View>
					<Icon
						style={styles.arrow}
						name="angle-right"
						size={35}
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
