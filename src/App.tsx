
import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import bgImage from './assets/bg-desktop.jpg';
import { StyledAppProps } from './App.types.ts';
import { style } from '../settings.ts';
import CountDown from '../components/CountDown/CountDown.tsx';
import Menu from '../components/Menu/Menu.tsx';
import { AnimationsContext } from '../animations/context/AnimationsContext.tsx';

const theme = createTheme({
	palette: {
	  primary:{
			main: style.color.primary,
			contrastText: style.button.primaryContrastText,
			light: style.color.primaryLight,
			dark: style.color.primaryDark
	  },
	  secondary: {
			main: style.color.white,
			contrastText: style.button.sencondaryContrastText,
			light: style.color.primaryLight,
			dark: style.color.primaryLight
	  }
	}
});
	
const App = () => {
	const [isOverflowHidden, setIsOverflowHidden] = React.useState<boolean>(true);
	const [animationValues, setAnimations] = React.useState({
		countDownX: 0,
		countDownOpacity: 1,
		menuY: 0
	});

	/**
	 * Update the isOverflowHidden state to false when animating the countdown
	 * 
	 * @returns {void}
	 */
	const animationCallbackHandler = React.useCallback((): void => {
		setIsOverflowHidden(false);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<AnimationsContext.Provider value={{ animationValues, setAnimations }}>
				<ScAppContainer isOverflowHidden={isOverflowHidden}>
					<ScWrapper>
						<ScOverlay>
							<ScBgText>
								F
							</ScBgText>
							<ScHeading>
								Fredrik & Frida
							</ScHeading>

							<ScContentWrapper>
								<CountDown animationCallback={animationCallbackHandler} />
							</ScContentWrapper>
						</ScOverlay>
					</ScWrapper>

					<Menu />
				</ScAppContainer>
			</AnimationsContext.Provider>
		</ThemeProvider>
	);
};

export default App;

const ScAppContainer = styled.div<StyledAppProps>`
	height: 100vh;
	overflow: ${props => props.isOverflowHidden ? 'hidden' : 'auto'};
`;

const ScWrapper = styled.div`
	background-image: url(${bgImage});
	width: 100%;
	background-size: cover;
	background-position: center;
	height: 100vh;
	position: relative;
`;

const ScOverlay = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(255, 254, 255, 0.6);
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;
`;

const ScBgText = styled.span`
	color: rgba(255, 254, 255, 0.7);
	font-family: 'Passions Conflict', sans-serif;
	font-size: 45rem;
	transform: rotate(-30deg);
	position: absolute;
	top: 0;
`;

const ScHeading = styled.h1`
	color: ${style.font.colorHeading};
	font-size:  ${style.font.sizeHeadingMobile};
	font-family: ${style.font.fontHeading}, sans-serif;
	text-align: center;
	text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
	line-height: 1;
	z-index: 10;
	margin-top: 56px;

	@media ${style.device.mobileL} { 
		font-size: ${style.font.sizeHeading};
 	}
`;

const ScContentWrapper = styled.div`
	width: 100%;
	display: flex;
	padding: 40px 16px;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	min-height: 60vh;
`;

