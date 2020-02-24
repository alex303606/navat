import React from 'react';
import { ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import { SampleText } from '../components/Texts';
import ControlledSwitch from '../components/ControlledSwitch';

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
});

const SettingsScreen = () => {
	return (
		<View style={styles.page}>
			<Shadow style={[styles.modal]}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{flexGrow: 1}}
				>
					<View>
						<ControlledSwitch />
					</View>
					<View>
						<ControlledSwitch />
					</View>
					<View>
						<ControlledSwitch />
					</View>
				</ScrollView>
			</Shadow>
		</View>
	);
};

export default SettingsScreen;
