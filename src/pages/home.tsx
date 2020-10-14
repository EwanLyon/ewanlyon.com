import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Divider} from './components/divider';

const HomepageContainer = styled.div`
	color: white;
	font-family: Lato, Arial, sans-serif;
`;

const Logo = styled.img`
	margin-top: 5vh;
	width: 100%;
	height: 30vh;
	object-fit: contain;
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
	font-size: 5vw;
	font-weight: 600;
	margin: 3vh 0;
`;

const TagLine = styled.span`
	font-size: 2vw;
	margin-bottom: 3vh;
`;

const Naviagation = styled.nav`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	letter-spacing: 0.2em;
	font-size: 2vw;
`;

const LinkDivider = styled.p`
	margin: 0 1vw;
`;

export const Homepage: React.FC = () => {
	return (
		<HomepageContainer>
			<Logo src={require('../media/EL_TransparentFull.png')} />
			<TitleCont>
				<Title>Ewan Lyon</Title>
				<TagLine>Programmer - Broadcast Designer - 3D Artist</TagLine>
			</TitleCont>
			<Divider />
			<Naviagation>
				<a href="https://github.com/EwanLyon" target="_blank">GitHub</a>
				<LinkDivider>-</LinkDivider>
				<Link to="/alivevr">Alive VR</Link>
				<LinkDivider>-</LinkDivider>
				<Link to="/broadcast-graphics">Broadcast Graphics</Link>
				<LinkDivider>-</LinkDivider>
				<Link to="/3d-art">3D Art</Link>
				<LinkDivider>-</LinkDivider>
				<Link to="/contact">Contact</Link>
			</Naviagation>
		</HomepageContainer>
	);
};
