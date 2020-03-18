import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import config from '../../config';
import CustomIcon from './CustomIcon';
import { Text } from './Texts';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getCustomFontFamilyByFontWeight } from '../utils/utils';
import { translate } from '../localization/i18n';

const styles = EStyleSheet.create({
	$addressIconSize: '47rem',
	$backIconSize: '25rem',
	$20: '20rem',
	$30: '30rem',
	selectedItemIcon: {
		marginRight: '20rem',
	},
	address: {
		fontFamily: getCustomFontFamilyByFontWeight(200),
		flex: 1,
		flexWrap: 'wrap',
	},
	selectedItemAddress: {
		flexGrow: 1,
		marginRight: '10rem',
	},
	addressItem: {
		flex: 1,
		backgroundColor: 'white',
		padding: 14,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 6,
		marginVertical: '10rem',
		borderWidth: 1,
	},
	icons: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
});

const AddressItem = (props) => {
	const {address} = props;
	if (!address.address.trim()) {
		return <View key={address.type}/>;
	}
	
	const deleteHandler = () => {
		Alert.alert(
			translate('deleteThisAddress'),
			address.address,
			[
				{text: translate('cancel'), style: 'cancel'},
				{text: translate('delete'), onPress: () => props.deleteAddress(address.type)},
			],
			{cancelable: false},
		);
	};
	
	const editHandler = () => props.editAddress(address.type);
	
	return (
		<TouchableOpacity
			onPress={props.onPress}
			activeOpacity={props.touchable ? 0.5 : 1}
			style={[styles.addressItem, props.style]}>
			<CustomIcon
				style={styles.selectedItemIcon}
				color={config.GreyColor}
				name={address.type}
				size={styles.$addressIconSize}/>
			<View style={styles.selectedItemAddress}>
				<View style={{flexDirection: 'row'}}>
					<Text numberOfLines={2} style={styles.address}>{address.address}</Text>
				</View>
			</View>
			{props.editable &&
			<View style={styles.icons}>
				<TouchableOpacity
					activeOpacity={0.3}
					onPress={deleteHandler}>
					<IonIcon
						name='ios-close-circle'
						size={styles.$30}
						color={'black'}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.3}
					onPress={editHandler}>
					<CustomIcon
						color={'#1E8149'}
						name={'pencil'}
						size={styles.$20}/>
				</TouchableOpacity>
			</View>
			}
			{props.dropdown &&
			<IonIcon
				name='ios-arrow-down'
				size={styles.$backIconSize}
				color={config.GreyColor}
			/>
			}
		</TouchableOpacity>
	);
};

export default AddressItem;
