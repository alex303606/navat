import React, { Fragment, useState } from 'react';
import { Bold, H2 } from './Texts';
import AddressItem from './AddressItem';
import CustomModal from './CustomModal';
import { ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';

const styles = EStyleSheet.create({
	bold: {
		textTransform: 'uppercase',
		fontFamily: getCustomFontFamilyByFontWeight(900),
		marginBottom: '13rem',
	},
	contentContainerStyle: {
		flexGrow: 1,
		padding: '15rem',
	},
});

const DeliveryAddress = (props) => {
	const defaultAddresses = props.addresses.filter(x => !!x.address && !!x.address.trim());
	const [modalVisible, setModalVisible] = useState(false);
	const toggleModal = () => setModalVisible(!modalVisible);
	const [selectedAddress, changeSelectedAddress] = useState(defaultAddresses[0] || undefined);
	
	const renderAddressItem = (item) => (
		<AddressItem
			touchable
			key={item.type}
			address={item}
			onPress={changeSelectedAddressHandler(item)}
		/>
	);
	
	const changeSelectedAddressHandler = item => () => {
		changeSelectedAddress(item);
		toggleModal();
	};
	
	return (
		<View>
			<Bold style={styles.bold}>Адрес доставки</Bold>
			{!!selectedAddress &&
			<Fragment>
				<AddressItem
					address={selectedAddress}
					touchable={defaultAddresses.length > 1}
					onPress={toggleModal}
					dropdown={defaultAddresses.length > 1}
				/>
				{defaultAddresses.length > 1 &&
				<CustomModal
					setModalVisible={toggleModal}
					modalVisible={modalVisible}>
					<H2 style={{textAlign: 'center'}}>Выберите адрес доставки</H2>
					<ScrollView
						scrollEnabled={true}
						contentContainerStyle={styles.contentContainerStyle}
						showsVerticalScrollIndicator={false}
						keyboardShouldPersistTaps='handled'
					>
						{props.addresses.map(renderAddressItem)}
					</ScrollView>
				</CustomModal>
				}
			</Fragment>
			}
		</View>
	);
};

export default DeliveryAddress;
