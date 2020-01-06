import React from 'react';
import { H1 } from '../components/Texts';
import ScreenContainer from '../components/ScreenContainer';

const HomeScreen = () => {
	return (
		<ScreenContainer>
			<H1 style={{textAlign: 'center'}}>Second Screen</H1>
		</ScreenContainer>
	);
};

export default HomeScreen;
