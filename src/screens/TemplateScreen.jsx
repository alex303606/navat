import React, { useEffect, useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import { ScrollView, View } from 'react-native';
import { Bold, SampleText } from '../components/Texts';

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
		paddingBottom: '24rem',
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
	},
	content: {
		paddingTop: '30rem',
	},
});

const TemplateScreen = (props) => {
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	
	useEffect(() => {
		const {state: {params}} = props.navigation;
		if (params) {
			const {item: {title, text}} = params;
			setTitle(title || '');
			setText(text || '');
		}
	}, []);
	
	return (
		<View style={styles.page}>
			<Shadow style={[styles.modal]}>
				<ScrollView
					keyboardShouldPersistTaps='handled'
					scrollEnabled={true}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{flexGrow: 1}}
				>
					<View style={styles.header}>
						<Bold>{title}</Bold>
					</View>
					<View style={styles.content}>
						<SampleText>{text}</SampleText>
					</View>
				</ScrollView>
			</Shadow>
		</View>
	);
};

export default TemplateScreen;
