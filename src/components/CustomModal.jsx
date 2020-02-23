import React from 'react';
import { View, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import config from '../../config';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	modal: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: config.InactiveColorFunc(0.8),
	},
	modalContainer: {
		paddingHorizontal: '15rem',
		paddingVertical: '25rem',
		backgroundColor: 'white',
		borderRadius: '8rem',
		margin: '10rem',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: '10rem',
		elevation: '10rem',
		borderWidth: 0,
	},
});

const CustomModal = (props) => {
	const emptyMethod = () => null;
	return (
		<Modal
			animationType='fade'
			transparent={true}
			visible={props.modalVisible}>
			<TouchableOpacity activeOpacity={1} style={{flex: 1}} onPress={props.setModalVisible}>
				<SafeAreaView forceInset={{bottom: 'always', top: 'never'}} style={styles.modal}>
					<TouchableWithoutFeedback style={{flex: 1}} onPress={emptyMethod}>
						<View style={styles.modalContainer}>
							{props.children}
						</View>
					</TouchableWithoutFeedback>
				</SafeAreaView>
			</TouchableOpacity>
		</Modal>
	);
};

CustomModal.propTypes = {
	setModalVisible: PropTypes.func.isRequired,
	modalVisible: PropTypes.bool.isRequired,
	keyboardIsVisible: PropTypes.bool,
	modalStyle: PropTypes.object,
};

export default CustomModal;
