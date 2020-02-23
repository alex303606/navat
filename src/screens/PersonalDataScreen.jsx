import React from 'react';
import { ScrollView, View } from 'react-native';
import { H1 } from '../components/Texts';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import PickerImage from '../components/PickerImage';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		padding: '20rem',
	},
	modal: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: '20rem',
		paddingVertical: '25rem',
		borderRadius: '8rem',
	},
	header: {
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4'
	},
});

const PersonalDataScreen = (props) => {
	return (
		<View style={styles.page}>
			<Shadow style={[styles.modal, styles.bottomModal]}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{flexGrow: 1}}
				>
				<View style={styles.header}>
				<PickerImage
					// avatar={this.props.photo} savePhoto={this.props.savePhoto}
				/>
				</View>
				</ScrollView>
			</Shadow>
		</View>
	);
};

export default PersonalDataScreen;
