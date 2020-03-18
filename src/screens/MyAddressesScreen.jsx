import React from 'react';
import { ScrollView, View } from 'react-native';
import { translate } from '../localization/i18n';
import config from '../../config';
import Button from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../assets/images/map.svg';
import AddressItem from '../components/AddressItem';
import { saveAddresses } from '../store/actions/profile';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		paddingBottom: '20rem',
	},
	contentContainerStyle: {
		flexGrow: 1,
		paddingHorizontal: '20rem',
	},
	footer: {
		paddingTop: '20rem',
		paddingHorizontal: '20rem',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1,
	},
	content: {
		paddingTop: '20rem',
	},
});

const MyAddressesScreen = (props) => {
	const navigateToAddAddress = () => props.navigation.navigate('AddAddress', {prevScreen: 'MyAddresses'});
	
	const editAddress = (type) => props.navigation.navigate('AddAddress', {type, prevScreen: 'MyAddresses'});
	
	const deleteAddress = (type) => {
		const addresses = [...props.addresses];
		const index = addresses.findIndex(x => x.type === type);
		addresses[index] = {...addresses[index], address: '', description: ''};
		props.saveAddresses(addresses);
	};
	
	const addressesIsNotEmpty = props.addresses.find(x => !!x.address.trim());
	
	const renderAddress = (address) => (
		<AddressItem
			editable
			key={address.type}
			address={address}
			editAddress={editAddress}
			deleteAddress={deleteAddress}
			style={{
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 0,
				},
				shadowOpacity: 0.2,
				shadowRadius: 5,
				elevation: 5,
				borderWidth: 0,
				minHeight: 100,
			}}
		/>
	);
	
	return (
		<View style={styles.page}>
			<ScrollView
				scrollEnabled={true}
				contentContainerStyle={styles.contentContainerStyle}
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps='handled'
			>
				{!addressesIsNotEmpty ?
					<View style={styles.iconContainer}>
						<Map width={150}/>
					</View> :
					<View style={styles.content}>
						{props.addresses.map(renderAddress)}
					</View>
				}
			</ScrollView>
			<View style={styles.footer}>
				<Button
					onPress={navigateToAddAddress}
					title={translate('addAddress')}
				/>
			</View>
		</View>
	);
};

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

export default connect(mapStateToProps, mapDispatchToProps)(MyAddressesScreen);
