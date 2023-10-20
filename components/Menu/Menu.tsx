import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { menuItems, style } from '../../settings';
import MenuItem from '../MenuItem/MenuItem';
import useAnimations from '../../animations/hooks/useAnimations/useAnimations';

const Menu: React.FC = (_props) => {
	const { animationValues } = useAnimations();

	return (
		<ScMenuWrapper
			animate={{ y: animationValues.menuY }}
			transition={{ ease: 'easeIn', duration: 1 }}
		>
			{menuItems.map(item => (
				<MenuItem
					item={item}
					key={item.title}
				/>
			))}
		</ScMenuWrapper>
	);
};

export default Menu;

const ScMenuWrapper = styled(motion.div)`
	display: flex;
	background-color: ${style.color.white};
	justify-content: space-evenly;
	align-items: center;
	gap: 24px;
	flex-wrap: wrap;
	width: 100%;
	padding: 24px;
`;