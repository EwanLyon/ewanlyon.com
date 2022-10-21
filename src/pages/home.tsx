import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Divider} from './components/divider';
import { DumbEmail } from './components';
import { Broadcast } from '.';

import LogoIMG from '../media/EL_TransparentFull.png';

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

	@media (max-width: 425px) {
		font-size: 1.2rem;
	}
`;

const Naviagation = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	letter-spacing: 0.2em;
	font-size: 1.8rem;

	@media (max-width: 425px) {
		font-size: 0.9rem;
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
	margin: 0 1vw;
`;

export const Homepage: React.FC = () => {
	return (
		<HomepageContainer>
			<Logo src={LogoIMG} />
			<TitleCont>
				<Title>Ewan Lyon</Title>
				<TagLine>Broadcast Designer</TagLine>
				<DumbEmailStyled text="ewan@ewanlyon.com" />
			</TitleCont>
			<Naviagation>
				<Link to="/games">Games</Link>
				<LinkDivider>-</LinkDivider>
				<a href="https://github.com/EwanLyon" target="_blank">GitHub</a>
				<LinkDivider>-</LinkDivider>
				<Link to="/alivevr">Alive VR</Link>
				<LinkDivider>-</LinkDivider>
				<Link to="/3d-art">3D Art</Link>
				<LinkDivider>-</LinkDivider>
				<Link to="/contact">Contact</Link>
			</Naviagation>
			<Divider />
			<Broadcast />
		</HomepageContainer>
	);
};
