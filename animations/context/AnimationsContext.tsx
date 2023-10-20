import React from 'react';
import { AppContextProps } from '../animations.types';

const initalState = {
	animationValues: {
		countDownX: 0,
		countDownOpacity: 1,
		menuY: 0
	}, 
	setAnimations: () => {}
};

export const AnimationsContext = React.createContext<AppContextProps>(initalState);