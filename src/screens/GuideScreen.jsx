import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import config from '../../config';

const guides = {
	1: require('../assets/images/guide1.png'),
	2: require('../assets/images/guide2.png'),
	3: require('../assets/images/guide3.png'),
	4: require('../assets/images/guide4.png'),
	5: require('../assets/images/guide5.png'),
};
const styles = StyleSheet.create({
	page: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	imageContainer: {
		marginBottom: 14,
		position: 'relative',
	},
	image: {
		width: '100%',
	},
	progressBar: {
		position: 'absolute',
		bottom: 15,
		left: 0,
		right: 0,
		zIndex: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	circle: {
		width: 12,
		height: 12,
		borderRadius: 6,
		marginHorizontal: 11,
	},
});
const GuideScreen = () => {
	const [count, setCount] = useState(1);
	const nextGuide = () => endOfGuide ? null : setCount(count + 1);
	const endOfGuide = Object.keys(guides).length === count;
	const renderItem = item => {
		return (
			<View
				key={item}
				style={[styles.circle, {
					backgroundColor: item === count.toString() ? 'white' : '#4F4F4F',
				}]}/>
		);
	};
	
	return (
		<ScreenContainer>
			<View style={styles.page}>
				<View style={styles.imageContainer}>
					<Image
						style={styles.image}
						source={guides[count]}
						resizeMode='cover'/>
					<View style={styles.progressBar}>
						{Object.keys(guides).map(renderItem)}
					</View>
				</View>
				<Button
					buttonStyle={{backgroundColor: config.mainColor}}
					textStyle={{color: 'white'}}
					onPress={nextGuide}
					title={translate(endOfGuide ? 'run' : 'next')}
				/>
			</View>
		</ScreenContainer>
	);
};

export default GuideScreen;
