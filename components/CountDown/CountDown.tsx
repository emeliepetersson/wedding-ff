import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CountDownProps } from './CountDown.types';
import { style } from '../../settings';
import useAnimations from '../../animations/hooks/useAnimations/useAnimations';

const yearInSeconds = 31536000;
const dayInSeconds = 86400;
const weddingDate = new Date('2024-08-01 18:00:00');

const CountDown: React.FC<CountDownProps> = (props) => {
	const { animationCallback } = props;
	const [remainingTime, setRemainingTime] = React.useState<number>();
	const { animationValues, setAnimationHandler } = useAnimations();
	const [showCountDown, setShowCountDown] = React.useState<boolean>(true);

	/**
	 * Fade out the countdown and move it to the left
	 * 
	 * @returns {void}
	 */
	const fadeOutCountDownHandler = React.useCallback((): void => {
		setAnimationHandler('countDownX', -1000);
		setAnimationHandler('countDownOpacity', 0);
		setAnimationHandler('menuY', -400);
		setShowCountDown(false);

		animationCallback();
	}, [setAnimationHandler, animationCallback]);

	/**
	 * Hide Countdown after 7 seconds
	 */
	React.useEffect(() => {
		// set the countdown duration to seconds from today until the wedding date
		const today = new Date();
		const diffTime = Math.abs(weddingDate.getTime() - today.getTime());
		const diffSeconds = Math.ceil(diffTime / (1000));
		setRemainingTime(diffSeconds);
	}, []);

	if(!remainingTime) return null;
    
	return (
		<AnimatePresence>
			{showCountDown && (
				<ScCountdownWrapper>
					<motion.div
						animate={{ x: animationValues.countDownX }}
						exit={{ x: -1000 }}
						transition={{ ease: 'easeOut', duration: 2 }}
					>
						<motion.div
							animate={{ opacity: animationValues.countDownOpacity }}
							exit={{ opacity: 0 }}
							transition={{ ease: 'easeOut', duration: 0.5 }}
						>
							<ScWrapper>
								<CountdownCircleTimer
									isPlaying
									initialRemainingTime={remainingTime}
									duration={remainingTime < dayInSeconds ? dayInSeconds : yearInSeconds}
									colors={[style.color.primary, style.color.primaryDark]}
									colorsTime={[7, 5]}
									size={200}
									strokeWidth={8}
								>
									{({ remainingTime }) => {
            	    const days = Math.floor(remainingTime / 86400);
            	    const hours = Math.floor((remainingTime % 86400) / 3600);
            	    const minutes = Math.floor(((remainingTime % 86400) % 3600) / 60);
                    
            	    return (
	                    <ScCountdownContent> 
		                    {days > 0 && (
			                    <ScTimeText>
				                    {days}
				                    {' '}
				                    dagar kvar till bröllopet
			                    </ScTimeText>
	                        )}
		                    {days <= 0 && (
			                    <ScTimeText>
				                    {hours}
				                    h och
				                    {' '}
				                    {minutes}
				                    min kvar till bröllopet
			                    </ScTimeText>
	                        )}
	                    </ScCountdownContent>
            	    );
									}}
								</CountdownCircleTimer>
							</ScWrapper>
						</motion.div>
					</motion.div>

					<ScButtonWrapper>
						<motion.div
							animate={{ opacity: animationValues.countDownOpacity }}
							transition={{ ease: 'easeOut', duration: 0.1 }}
							exit={{ opacity: 0 }}
						>
							<ScButton
								onClick={fadeOutCountDownHandler}
								variant="text"
								color="primary"
								sx={{ fontSize: '1.5rem' }}
							>
								Gå vidare
								<KeyboardArrowDownIcon fontSize="large" />
							</ScButton>
						</motion.div>
					</ScButtonWrapper>
				</ScCountdownWrapper>
			)}
		</AnimatePresence>
	);
};

export default CountDown;

const ScWrapper = styled.div`
`;

const ScCountdownContent = styled.div`
	color: ${style.font.colorHeading};
	text-align: center;
	line-height: 1.2;
	margin: 32px;
`;

const ScTimeText = styled.p`
	font-size: 2rem;
	margin: 0;
`;

const ScButtonWrapper = styled.div`
    margin-top: 32px;
`;

const ScCountdownWrapper = styled(motion.div)`
	width: 100%;
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ScButton = styled(Button)`
	flex-direction: column;
`;