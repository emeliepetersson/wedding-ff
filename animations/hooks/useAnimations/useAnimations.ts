import React, { useContext } from 'react';
import { AnimationsContext } from '../../context/AnimationsContext';
import { AnimationName } from '../../animations.types';

const useAnimations = () => {
	const { animationValues, setAnimations } = useContext(AnimationsContext);

	/**
	 * Updates the animation values
	 * 
	 * @param {AnimationName} animationName
	 * @param {number} value
	 * @returns {void}
	 */
	const setAnimationHandler = React.useCallback((animationName: AnimationName, value = 0) => {
		setAnimations((prevState) => ({
			...prevState,
			[animationName]: value
		}));
	}, [setAnimations]);

	return {
		animationValues,
		setAnimationHandler
	};
};

export default useAnimations;