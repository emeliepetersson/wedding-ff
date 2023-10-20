import React from 'react';
import styled from 'styled-components';
import { MenuItemProps } from './MenuItem.types';
import { style } from '../../settings';

const MenuItem: React.FC<MenuItemProps> = (props) => {
	return (
		<ScWrapper>
			<ScImgWrapper>
				<ScImg src={props.item.image} />
				<ScImgOverlay />
			</ScImgWrapper>
			<ScTextWrapper>
				<ScHeading>
					{props.item.title}
				</ScHeading>
				<ScText>
					{props.item.description}
				</ScText>
			</ScTextWrapper>
		</ScWrapper>
	);
};

export default MenuItem;

const ScWrapper = styled.div`
    background-color: ${style.color.primaryDark};
    width: 400px;
    height: 280px;
    border-radius: 10px;
    box-shadow: 2px 2px 15px 0px rgba(197, 195, 195, 0.3);
    overflow: hidden;
`;

const ScText = styled.p`
    color: ${style.font.colorBodyLight};
    font-size: ${style.font.sizeBody};
`;

const ScHeading = styled.h3`
    color: ${style.font.colorBodyLight};
    font-size: ${style.font.sizeHeadingXSmall};
`;

const ScTextWrapper = styled.div`
    padding: 8px 16px 16px;
`;

const ScImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    filter: grayscale(100%);
`; 

const ScImgWrapper = styled.div`
    height: 150px;
    width: 100%;
    position: relative;
`;

const ScImgOverlay = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${style.color.primaryDark};
    opacity: 0.4;
    z-index: 10;
    position: absolute;
    top: 0;
`;