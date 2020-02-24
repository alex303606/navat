import React from 'react';
import { ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import { SampleText } from '../components/Texts';

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

const TermsScreen = () => {
	return (
		<View style={styles.page}>
			<Shadow style={[styles.modal]}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{flexGrow: 1}}
				>
					<SampleText>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa esse fuga impedit incidunt iusto maiores mollitia odio perspiciatis voluptatem. Adipisci autem consectetur consequuntur ducimus quia reiciendis reprehenderit, ut voluptatibus.
					</SampleText>
				</ScrollView>
			</Shadow>
		</View>
	);
};

export default TermsScreen;
