import React from 'react';
import { View, Dimensions, ScrollView, Platform } from 'react-native';
import { Bold, MiddleText } from './Texts';
import { BoxShadow } from 'react-native-shadow';
import config from '../../config';
import ImageWithLoader from './ImageWithLoader';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stars from 'react-native-stars';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	slide: {
		width: Dimensions.get('window').width,
		height: '200rem',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	slidePhoto: {
		width: '149rem',
		height: '86rem',
		marginRight: '9rem',
		borderRadius: '4rem',
		overflow: 'hidden',
	},
	slideInner: {
		flex: 1,
		backgroundColor: 'white',
		borderRadius: '4rem',
		overflow: 'hidden',
		padding: '11rem',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	slideInfo: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	slideGallery: {
		height: '86rem',
		marginBottom: '12rem',
	},
	$width: '26rem',
	$height: '182rem',
	$border: '10rem',
	$radius: '4rem',
	$size: '14rem',
	$10: '10rem',
	$8: '8rem',
	$3: '3rem',
	$200: '200rem',
	imageWithLoader: {
		width: '100%',
		height: '86rem',
	},
});

const Slide = (props: any) => {
	const {name, address, images, rating} = props;
	const shadowOpt = {
		width: Dimensions.get('window').width - styles.$width,
		height: styles.$height,
		color: '#000',
		border: styles.$border,
		radius: styles.$radius,
		opacity: config.shadowOptOpacity,
		x: 0,
		y: 0,
	};
	
	const renderSlidePhoto = (url, index) => {
		return (
			<View key={index} style={styles.slidePhoto}>
				<ImageWithLoader
					resizeMode='cover'
					style={styles.imageWithLoader}
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
						<Bold style={{marginBottom: styles.$3}}>{name}</Bold>
						<MiddleText style={{marginBottom: styles.$8}}>{address}</MiddleText>
						<Stars
							disabled
							default={rating}
							count={5}
							starSize={styles.$size}
							spacing={styles.$3}
							fullStar={<Icon size={styles.$size} color={'#FFC700'} name={'star'}/>}
							emptyStar={<Icon size={styles.$size} color={'#DAD9E2'} name={'star'}/>}
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
	if (Platform.OS === 'android' || props.vertical) {
		return (
			<View style={props.vertical ? {flex: 1} : {height: styles.$200}}>
				<ScrollView
					decelerationRate={0}
					horizontal={false}
					nestedScrollEnabled={true}
					showsVerticalScrollIndicator={false}
					snapToInterval={styles.$200}
					snapToAlignment={'center'}
					contentContainerStyle={props.vertical ? {
						flexGrow: 1,
						paddingTop: styles.$10,
					} : {}}
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
