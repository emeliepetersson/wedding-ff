import { ColorHex } from 'react-countdown-circle-timer';
import church from './src/assets/kyrkan.jpeg';
import camera from './src/assets/camera.jpeg';
import gift from './src/assets/gift.jpeg';
import party from './src/assets/party.jpeg';

export const menuItems = [
	{
		title: 'Hitta hit',
		description: 'Så här hittar du till kyrkan och festen',
		image: church
	},
	{
		title: 'Dela dina foton med oss',
		description: 'Dela gärna dina foton med oss som du tagit under bröllopet',
		image: camera
	},
	{
		title: 'Bröllopsgåvor',
		description: 'Vi hjälper er att hitta en passande bröllopsgåva',
		image: gift
	},
	{
		title: 'Önska låt till festen',
		description: 'Hjälp oss att skapa en spellista som alla gillar!',
		image: party
	}
];

const color = {
	primary: '#859D77' as ColorHex,
	primaryLight: '#dbe5d5' as ColorHex,
	primaryDark: '#75896a' as ColorHex,
	white: '#fffefc' as ColorHex
};

const font = {
	sizeBody: '1.6rem',
	sizeHeading: '6rem',
	sizeHeadingMobile: '5rem',
	sizeHeadingSmall: '3rem',
	sizeHeadingXSmall: '2rem',
	colorHeading: color.primary,
	colorBody: color.primaryDark,
	colorBodyLight: color.white,
	fontHeading: 'Julius Sans One'
};

const button = {
	primaryContrastText: color.white,
	sencondaryContrastText: color.primary
};

const breakPoints = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

export const device = {
	mobileS: `(min-width: ${breakPoints.mobileS})`,
	mobileM: `(min-width: ${breakPoints.mobileM})`,
	mobileL: `(min-width: ${breakPoints.mobileL})`,
	tablet: `(min-width: ${breakPoints.tablet})`,
	laptop: `(min-width: ${breakPoints.laptop})`,
	laptopL: `(min-width: ${breakPoints.laptopL})`,
	desktop: `(min-width: ${breakPoints.desktop})`,
	desktopL: `(min-width: ${breakPoints.desktop})`
};
  
export const style = {
	color,
	font,
	button,
	breakPoints,
	device
};