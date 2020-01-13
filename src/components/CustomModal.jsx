import React, { Component } from 'react';
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

class CustomModal extends Component {
	static propTypes = {
		setModalVisible: PropTypes.func.isRequired,
		modalVisible: PropTypes.bool.isRequired,
		keyboardIsVisible: PropTypes.bool,
		modalStyle: PropTypes.object,
	};
	
	render() {
		return (
			<Modal
				animationType='none'
				transparent={true}
				visible={this.props.modalVisible}>
				<SafeAreaView
					forceInset={{bottom: 'always', top: 'always'}}
					style={[styles.modal, {marginBottom: this.props.keyboardIsVisible ? 0 : config.TabBarHeight}]}>
					<View style={[styles.modalContainer, this.props.modalStyle]}>
						{this.props.children}
					</View>
				</SafeAreaView>
			</Modal>
		);
	}
}

export default CustomModal;
