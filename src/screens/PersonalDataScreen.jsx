import React from 'react';
import { ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import PickerImage from '../components/PickerImage';
import { bindActionCreators } from 'redux';
import { savePhoto } from '../store/actions/profile';
import { connect } from 'react-redux';

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
		borderBottomColor: '#EFEFF4',
		paddingBottom: '20rem',
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
							avatar={props.profile.avatar}
							savePhoto={props.savePhoto}
						/>
					</View>
				</ScrollView>
			</Shadow>
		</View>
	);
};

const mapStateToProps = state => ({
	profile: state.profile,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			savePhoto,
		},
		dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDataScreen);
