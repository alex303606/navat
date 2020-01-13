import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import config from '../../config';

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		backgroundColor: 'transparent',
		marginBottom: config.TabBarHeight,
	},
	modalContainer: {
		paddingHorizontal: 15,
		paddingVertical: 25,
		backgroundColor: 'white',
		borderTopRightRadius: 8,
		borderTopLeftRadius: 8,
		margin: 6,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.2,
		shadowRadius: 10,
		elevation: 10,
		borderWidth: 0,
	},
});

const CustomModal = props => {
	return (
		<Modal
			animationType='none'
			transparent={true}
			visible={props.modalVisible}>
			<SafeAreaView forceInset={{bottom: 'always', top: 'always'}} style={styles.modal}>
				<View style={[styles.modalContainer, props.modalStyle]}>
					{props.children}
				</View>
			</SafeAreaView>
		</Modal>
	);
};

CustomModal.propTypes = {
	setModalVisible: PropTypes.func.isRequired,
	modalVisible: PropTypes.bool.isRequired,
	modalStyle: PropTypes.object,
};

export default CustomModal;
