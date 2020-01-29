import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Platform } from 'react-native';
import { Bold, MiddleText } from './Texts';
import { BoxShadow } from 'react-native-shadow';
import config from '../../config';
import ImageWithLoader from './ImageWithLoader';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stars from 'react-native-stars';

const styles = StyleSheet.create({
	slide: {
		width: Dimensions.get('window').width,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	slidePhoto: {
		width: 149,
		height: 86,
		marginRight: 9,
		borderRadius: 4,
		overflow: 'hidden',
	},
	slideInner: {
		flex: 1,
		backgroundColor: 'white',
		borderRadius: 4,
		overflow: 'hidden',
		padding: 11,
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	slideInfo: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	slideGallery: {
		height: 86,
		marginBottom: 12,
	},
});

const Slide = (props: any) => {
	const {name, address, images, rating} = props;
	const shadowOpt = {
		width: Dimensions.get('window').width - 26,
		height: 182,
		color: '#000',
		border: 10,
		radius: 4,
		opacity: config.shadowOptOpacity,
		x: 0,
		y: 0,
	};
	
	const renderSlidePhoto = (url, index) => {
		return (
			<View key={index} style={styles.slidePhoto}>
				<ImageWithLoader
					resizeMode='cover'
					style={{width: '100%', height: 86}}
					source={{uri: url}}
				/>
			</View>
		);
	};
	
	return (
		<View style={styles.slide}>
			<BoxShadow setting={shadowOpt}>
				<View style={styles.slideInner}>
					<View style={styles.slideGallery}>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}>
							{images.map(renderSlidePhoto)}
						</ScrollView>
					</View>
					<View style={styles.slideInfo}>
						<Bold style={{marginBottom: 3}}>{name}</Bold>
						<MiddleText style={{marginBottom: 8}}>{address}</MiddleText>
						<Stars
							disabled
							default={rating}
							count={5}
							starSize={16}
							spacing={4}
							fullStar={<Icon size={16} color={'#FFC700'} name={'star'}/>}
							emptyStar={<Icon size={16} color={'#DAD9E2'} name={'star'}/>}
						/>
					</View>
				</View>
			</BoxShadow>
		</View>
	);
};

export const Carousel = (props: any) => {
	const {items} = props;
	const renderSlide = item => (
		<Slide key={item.id} {...item}/>
	);
	if (Platform.OS === 'android') {
		return (
			<View style={{height: 200}}>
				<ScrollView
					decelerationRate={0}
					horizontal={false}
					nestedScrollEnabled={true}
					showsVerticalScrollIndicator={false}
					snapToInterval={200}
					snapToAlignment={'center'}
				>
					{items.map(renderSlide)}
				</ScrollView>
			</View>
		);
	}
	return (
		<ScrollView
			decelerationRate={0}
			horizontal
			showsHorizontalScrollIndicator={false}
			snapToInterval={Dimensions.get('window').width}
			snapToAlignment={'center'}>
			{items.map(renderSlide)}
		</ScrollView>
	);
};

export default Carousel;
