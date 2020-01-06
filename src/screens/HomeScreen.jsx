import React from 'react';
import { H1 } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';
import CustomIcon from '../components/CustomIcon'

const HomeScreen = () => {
	return (
		<ScreenContainer>
			<H1>HomeScreen</H1>
			<CustomIcon name='menu' />
		</ScreenContainer>
	);
};

export default HomeScreen;
