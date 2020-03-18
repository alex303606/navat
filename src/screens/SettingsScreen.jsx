import React from 'react';
import { ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import config from '../../config';
import Shadow from '../components/Shadow';
import ControlledSwitch from '../components/ControlledSwitch';
import { Bold, MiddleText } from '../components/Texts';
import { translate } from '../localization/i18n';
import { assemble } from '../utils/utils';

const styles = EStyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: config.BackgroundColor,
		padding: '20rem',
	},
	modal: {
		flex: 1,
		backgroundColor: 'white',
		paddingHorizontal: '25rem',
		paddingVertical: '15rem',
		borderRadius: '8rem',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: '10rem',
		borderBottomWidth: 1,
		borderBottomColor: '#EFEFF4',
	},
	leftSide: {
		flexGrow: 1,
	},
	title: {
		marginBottom: '7rem',
		flex: 1,
		flexWrap: 'wrap',
	},
	text: {
		flex: 1,
		flexWrap: 'wrap',
	},
});

const settings = [
	{
		title: 'PUSH уведомления',
		description: 'Статус доставки, сообщения от курьера',
	},
	{
		title: 'Email рассылка',
		description: 'Статус доставки, сообщения от курьера',
	},
	{
		title: 'Ваш город',
		description: 'Выбран: Бишкек',
	},
	{
		title: 'Выбор языка',
		description: 'Выбран: русский',
	},
];

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
					<View style={styles.row}>
						<View style={styles.leftSide}>
							<View style={{flexDirection: 'row'}}>
								<Bold style={styles.title}>
									{translate('pushNotifications')}
								</Bold>
							</View>
							<View style={{flexDirection: 'row'}}>
								<MiddleText style={styles.text}>
									{translate('pushNotificationsDescription')}
								</MiddleText>
							</View>
						</View>
						<ControlledSwitch/>
					</View>
					<View style={styles.row}>
						<View style={styles.leftSide}>
							<View style={{flexDirection: 'row'}}>
								<Bold style={styles.title}>
									{translate('emailNewsletter')}
								</Bold>
							</View>
							<View style={{flexDirection: 'row'}}>
								<MiddleText style={styles.text}>
									{translate('emailNewsletterDescription')}
								</MiddleText>
							</View>
						</View>
						<ControlledSwitch/>
					</View>
					<View style={styles.row}>
						<View style={styles.leftSide}>
							<Bold style={styles.title}>{translate('yourCity')}</Bold>
							<View style={{flexDirection: 'row'}}>
								<MiddleText style={styles.text}>
									{assemble(translate('selected'), {value: 'Бишкек'})}
								</MiddleText>
							</View>
						</View>
					</View>
					<View style={styles.row}>
						<View style={styles.leftSide}>
							<Bold style={styles.title}>{translate('languageSelection')}</Bold>
							<View style={{flexDirection: 'row'}}>
								<MiddleText style={styles.text}>
									{assemble(translate('selected'), {value: 'русский'})}
								</MiddleText>
							</View>
						</View>
					</View>
				</ScrollView>
			</Shadow>
		</View>
	);
};

export default SettingsScreen;
