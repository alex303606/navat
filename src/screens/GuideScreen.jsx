import React, { useState } from 'react';
import { Image, View } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import Button from '../components/Button';
import { translate } from '../localization/i18n';
import config from '../../config';
import { bindActionCreators } from 'redux';
import { setGuideIsViewed } from '../store/actions/profile';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

const guides = {
	1: require('../assets/images/guide1.png'),
	2: require('../assets/images/guide2.png'),
	3: require('../assets/images/guide3.png'),
	4: require('../assets/images/guide4.png'),
	5: require('../assets/images/guide5.png'),
};
const styles = EStyleSheet.create({
	page: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingVertical: '20rem',
	},
	imageContainer: {
		marginBottom: '14rem',
		flex: 1,
		position: 'relative',
	},
	image: {
		width: '100%',
	},
	progressBar: {
		position: 'absolute',
		bottom: '15rem',
		left: 0,
		right: 0,
		zIndex: '20rem',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	circle: {
		width: '12rem',
		height: '12rem',
		borderRadius: '6rem',
		marginHorizontal: '11rem',
	},
});
const GuideScreen = (props) => {
	const [count, setCount] = useState(1);
	const nextGuide = () => endOfGuide ? props.setGuideIsViewed() : setCount(count + 1);
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
						resizeMode='contain'/>
					<View style={styles.progressBar}>
						{Object.keys(guides).map(renderItem)}
					</View>
				</View>
				<Button
					buttonStyle={{backgroundColor: config.MainColor}}
					textStyle={{color: 'white'}}
					onPress={nextGuide}
					title={translate(endOfGuide ? 'run' : 'next')}
				/>
			</View>
		</ScreenContainer>
	);
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
			setGuideIsViewed,
		},
		dispatch);
};

export default connect(null, mapDispatchToProps)(GuideScreen);
