import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { clearBasket } from '../store/actions/basket';
import { connect } from 'react-redux';
import ImageWithLoader from '../components/ImageWithLoader';
import { Description, Label } from '../components/Texts';
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import Price from '../components/Price';
import config from '../../config';

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		padding: 10,
	},
	row: {
		flexDirection: 'row',
		flex: 1,
	},
	image: {
		width: 155,
		marginRight: 18,
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
		width: 104,
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	textStyle: {
		fontSize: 22,
		lineHeight: 26,
	},
	title: {
		marginBottom: 15,
	},
});

class BasketScreen extends Component {
	render() {
		return (
			<View style={styles.page}>
				<FlatList
					data={this.props.items}
					ItemSeparatorComponent={this.renderSeparator}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
					showsVerticalScrollIndicator={false}
				/>
				<Button
					onPress={this.clearBasket}
					title={translate('clearBasket')}
				/>
			</View>
		);
	}
	
	renderItem = ({item}) => {
		return (
			<View style={styles.row}>
				<View style={styles.image}>
					<ImageWithLoader
						resizeMode='cover'
						style={{width: '100%', height: 120}}
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
							onPress={() => null}
							title={translate('toBasket')}
						/>
						<Price style={{height: 25}} textStyle={styles.textStyle} title={item.price}/>
					</View>
				</View>
			</View>
		);
	};
	
	clearBasket = () => this.props.clearBasket();
	
	renderSeparator = () => <View style={{height: 10}}/>;
	
	keyExtractor = (item) => item.id;
}

const mapStateToProps = state => ({
	items: state.basket.items,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			clearBasket,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
