import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Divider } from './components/divider';
import { DumbEmail } from './components';
import { GamesMade } from './games';

import LogoIMG from '../media/EL_TransparentFull.png';
import { Events } from './broadcast-graphics';
import Stack from '@mui/material/Stack';
import useWindowDimensions from './components/useWindowDimensions';

const HomepageContainer = styled.div`
	color: white;
	font-family: Lato, Arial, sans-serif;
`;

const Logo = styled.img`
	margin: auto;
	margin-top: 5vh;
	width: 60vw;
	height: 30vh;
	object-fit: contain;
	display: block;
`;

const TitleCont = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.span`
	font-family: Inconsolata, Arial, sans-serif;
	text-transform: uppercase;
	font-size: 5rem;
	font-weight: 600;
	margin: 3vh 0;

	@media (max-width: 425px) {
		font-size: 3rem;
	}
`;

const TagLine = styled.span`
	font-size: 1.5rem;
	margin-bottom: 1vw;
	text-align: center;

	@media (max-width: 425px) {
		font-size: 1.2rem;
	}
`;

const Naviagation = styled(Stack)`
	letter-spacing: 0.2em;
	font-size: 1.8rem;

	@media (max-width: 425px) {
		font-size: 1rem;
	}

	@media (max-width: 1100px) {
		font-size: 1.5rem;
	}

	a {
		white-space: nowrap;
	}
`;

const DumbEmailStyled = styled(DumbEmail)`
	font-size: 2rem;
	margin-bottom: 3vw;

	@media (max-width: 425px) {
		font-size: 1.2rem;
	}
`;

const LinkDivider = styled.p`
	/* margin: 0 1vw; */
`;

export const Homepage: React.FC = () => {
	const { width } = useWindowDimensions();
	const vertical = width < 910;

	return (
		<HomepageContainer>
			<Logo src={LogoIMG} />
			<TitleCont>
				<Title>Ewan Lyon</Title>
				<Naviagation direction={vertical ? 'column' : 'row'} justifyContent="center" alignItems={vertical ? 'center' : 'baseline'} divider={!vertical && <LinkDivider>|</LinkDivider>} spacing={1}>
					<TagLine>Game Designer</TagLine>
					<TagLine>Programmer</TagLine>
					<TagLine>Broadcast Designer</TagLine>
				</Naviagation>
				<DumbEmailStyled text="ewan@ewanlyon.com" />
			</TitleCont>
			<Naviagation direction={vertical ? 'column' : 'row'} justifyContent="center" alignItems="center" divider={!vertical && <LinkDivider>-</LinkDivider>} spacing={1}>
				<Link to="/games">Games</Link>
				<Link to="/broadcast">Broadcast</Link>
				<a href="https://github.com/EwanLyon" target="_blank">
					GitHub
				</a>
				<Link to="/alivevr">Alive VR</Link>
				<Link to="/3d-art">3D Art</Link>
				<Link to="/contact">Contact</Link>
			</Naviagation>
			<Divider />
			{GamesMade.sixoclockswill}
			<Divider />
			{Events.asm}
			<Divider />
			{GamesMade.hackermanfrenzy}
			<Divider />
			{Events.csgo}
		</HomepageContainer>
	);
};
