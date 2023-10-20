export type AnimationName = 'countDownX' | 'countDownOpacity' | 'menuY';

export interface AnimationValues { 
	countDownX: number; 
	countDownOpacity: number;
	menuY: number; 
}

export type AnimationsSetter = React.Dispatch<React.SetStateAction<AnimationValues>>;

export interface AppContextProps {
	animationValues: AnimationValues;
	setAnimations: AnimationsSetter;
}