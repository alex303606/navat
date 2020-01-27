import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Bold, MiddleText } from './Texts';
import { BoxShadow } from 'react-native-shadow';

const styles = StyleSheet.create({
	slide: {
		width: Dimensions.get('window').width,
		//paddingHorizontal: 13,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	slideText: {
		width: '100%',
		textAlign: 'left',
		fontSize: 20,
	},
});

const Slide = (props: any) => {
	
	const {name, address} = props;
	console.log(props);
	const shadowOpt = {
		width: Dimensions.get('window').width - 26,
		height: 182,
		color: '#000',
		border: 10,
		radius: 4,
		opacity: 0.1,//config.shadowOptOpacity,
		x: 0,
		y: 0,
	};
	return (
		<View style={styles.slide}>
			<BoxShadow setting={shadowOpt}>
				<View style={{
					flex: 1,
					backgroundColor: 'white',
					borderRadius: 4,
					overflow: 'hidden',
					padding: 11,
				}}>
					<Bold>{name}</Bold>
					<MiddleText>{address}</MiddleText>
				</View>
			</BoxShadow>
		</View>
	);
};

export const Carousel = (props: any) => {
	const {items} = props;
	const renderSlide = item => (
		<Slide
			key={item.id}
			{...item}
		/>
	);
	return (
		<ScrollView
			horizontal
			decelerationRate={0}
			showsHorizontalScrollIndicator={false}
			snapToInterval={Dimensions.get('window').width}
			snapToAlignment={'center'}>
			{items.map(renderSlide)}
		</ScrollView>
	);
};

export default Carousel;
