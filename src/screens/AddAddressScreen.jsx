import React, { Component, Fragment } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import ScreenContainer from '../components/ScreenContainer';
import EStyleSheet from 'react-native-extended-stylesheet';
import config, { countries } from '../../config';
import Shadow from '../components/Shadow';
import Map from '../assets/images/map.svg';
import { Bold } from '../components/Texts';
import CustomIcon from '../components/CustomIcon';
import Input from '../components/Input';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveAddresses } from '../store/actions/profile';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		paddingBottom: '20rem',
		paddingTop: '10rem',
		paddingHorizontal: '10rem',
	},
	footer: {
		paddingTop: '10rem',
	},
	contentContainerStyle: {
		flexGrow: 1,
	},
	modal: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: '20rem',
		paddingVertical: '20rem',
		borderRadius: '8rem',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
		paddingBottom: '25rem',
	},
	switchContainer: {
		alignItems: 'center',
		paddingTop: '30rem',
		marginBottom: '44rem',
	},
	switch: {
		width: 270,
		height: 50,
		borderWidth: 1,
		borderColor: config.MainColor,
		borderRadius: 6,
		overflow: 'hidden',
		flexDirection: 'row',
	},
	switchItem: {
		width: '50%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: config.MainColor,
		overflow: 'hidden',
	},
	switchItemIcon: {
		marginRight: 10,
	},
	$30: '30rem',
	inputStyle: {
		height: '36rem',
		paddingHorizontal: '10rem',
		fontSize: '18rem',
		backgroundColor: config.InactiveColorFunc(0.1),
	},
	inputWrapper: {
		borderWidth: 0,
	},
	notes: {
		height: '115rem',
		textAlignVertical: 'top',
		paddingVertical: '10rem',
	},
});

class AddAddressScreen extends Component {
	componentDidMount() {
		const {state: {params}} = this.props.navigation;
		if (params) {
			const {type} = params;
			if (type) {
				const selectedAddressIndex = this.props.addresses.findIndex(x => x.type === type);
				this.setState({selectedAddressIndex});
			}
		}
	}
	
	state = {
		addresses: this.props.addresses.map(x => ({...x, city: countries[this.props.location].city})),
		selectedAddressIndex: 0,
	};
	
	renderType = (address, index) => {
		const {selectedAddressIndex} = this.state;
		return (
			<TouchableOpacity
				key={index}
				activeOpacity={0.3}
				onPress={this.changeSelectedTypeHandler(index)}
				style={[styles.switchItem, {
					backgroundColor: index === selectedAddressIndex ? config.MainColor : 'white',
					borderBottomRightRadius: 6,
					borderTopRightRadius: 6,
				}]}>
				<CustomIcon
					style={styles.switchItemIcon}
					color={index === selectedAddressIndex ? 'white' : config.GreyColor}
					name={address.type}
					size={styles.$30}/>
				<Bold style={{color: index === selectedAddressIndex ? 'white' : 'black'}}>
					{translate(address.type)}
				</Bold>
			</TouchableOpacity>
		);
	};
	
	changeSelectedTypeHandler = selectedAddressIndex => () => this.setState({selectedAddressIndex});
	
	changeAddressDescription = value => {
		const index = this.state.selectedAddressIndex;
		const newAddresses = [...this.state.addresses];
		newAddresses[index] = {...newAddresses[index], description: value};
		this.setState({addresses: newAddresses});
	};
	
	changeAddress = value => {
		const index = this.state.selectedAddressIndex;
		const newAddresses = [...this.state.addresses];
		newAddresses[index] = {...newAddresses[index], address: value};
		this.setState({addresses: newAddresses});
	};
	
	saveAddressesHandler = () => {
		this.props.saveAddresses(this.state.addresses);
		this.props.navigation.goBack();
	};
	
	render() {
		const addressesIsNotEmpty = this.state.addresses.find(x => !!x.address.trim());
		const {addresses, selectedAddressIndex} = this.state;
		return (
			<ScreenContainer style={styles.page}>
				<Shadow style={styles.modal}>
					<ScrollView
						scrollEnabled={true}
						contentContainerStyle={styles.contentContainerStyle}
						showsVerticalScrollIndicator={false}
						keyboardShouldPersistTaps='handled'
					>
						{!!addresses && !!addresses.length &&
						<Fragment>
							<View style={styles.iconContainer}>
								<Map width={120} height={120}/>
							</View>
							<View style={styles.switchContainer}>
								<View style={styles.switch}>
									{this.state.addresses.map(this.renderType)}
								</View>
							</View>
							<Input
								style={styles.inputWrapper}
								inputStyle={styles.inputStyle}
								placeholder={translate('addressPlaceholder')}
								onChangeText={this.changeAddress}
								value={this.state.addresses[selectedAddressIndex].address}
								label={translate('address')}/>
							<Input
								style={styles.inputWrapper}
								inputStyle={[styles.inputStyle, styles.notes]}
								placeholder={translate('addressNotesPlaceholder')}
								multiline={true}
								onChangeText={this.changeAddressDescription}
								value={addresses[selectedAddressIndex].description}
								label={translate('addressNotes')}/>
						</Fragment>
						}
					</ScrollView>
					<View style={styles.footer}>
						<Button
							disabled={!addressesIsNotEmpty}
							onPress={this.saveAddressesHandler}
							title={translate('saveAddress')}
						/>
					</View>
				</Shadow>
			</ScreenContainer>
		);
	}
}

const mapStateToProps = state => ({
	addresses: state.profile.addresses,
	location: state.profile.location,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			saveAddresses,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddressScreen);
