import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Gfycat, Image, Paragraph, ShowcaseGrid, Title, YouTube } from './components';
import { Header } from './components/header';

import SOS00 from '../media/games/sixoclockswill/00.webp';
import SOS01 from '../media/games/sixoclockswill/01.webp';
import SOS02 from '../media/games/sixoclockswill/02.webp';
import SOS03 from '../media/games/sixoclockswill/03.webp';
import SOS04 from '../media/games/sixoclockswill/04.webp';
import SOS05 from '../media/games/sixoclockswill/05.webp';

import HM00 from '../media/games/hackerman/00.png';
import HM01 from '../media/games/hackerman/01.png';
import HM02 from '../media/games/hackerman/02.png';
import HM03 from '../media/games/hackerman/03.png';
import HM04 from '../media/games/hackerman/04.png';
import HM05 from '../media/games/hackerman/05.png';

const GamesContainer = styled.div`
	font-size: 1.5vw;

	& a {
		font-weight: bold;
	}
`;

const Event = styled.div``;

// const InfoBox = styled.div`
// 	display: flex;
// 	justify-content: space-around;
// 	padding: 0 15%;
// 	font-weight: lighter;

// 	& > div {
// 		max-width: 50%;
// 	}
// `;

// const InfoTitle = styled.span`
// 	font-weight: bold;
// `;

const Divider = styled.div`
	height: 1px;
	margin: auto;
	width: 80%;
	background: #ffffff;
	margin-top: 5vw;
`;

const Contents = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > a {
		font-size: 1rem;
	}
`;

const ShowcaseGridCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2vh;

	& > * {
		width: 70%;
	}
`;

export const Games: React.FC = () => {
	return (
		<GamesContainer>
			<Header title="Games" />
			<Event>
				<Title id="six-oclock-swill">Six O'clock Swill<br /><i>Lead Designer/Developer</i></Title>
				<Paragraph centred>
					<a href="https://SixOclockSwill.net" target="_blank">
						SixOclockSwill.net
					</a>
					<br />
					<br />
					<a href="https://liquor-license-required.itch.io/six-oclock-swill" target="_blank">
						itch.io
					</a>
				</Paragraph>
				<Paragraph>
					Physics based bar tending game which challenges the player to make and mix drinks with difficult controls.
					This game was shown in PAX Aus 2022 at the Swinburne booth and had very positive reviews.
				</Paragraph>
				<ShowcaseGrid>
					<Image imgSrc={SOS00} />
					<Image imgSrc={SOS01} />
					<Image imgSrc={SOS02} />
					<Image imgSrc={SOS03} />
					<Image imgSrc={SOS04} />
					<Image imgSrc={SOS05} />
				</ShowcaseGrid>
			</Event>
			<Event>
				<Title id="six-oclock-swill">Hackerman<br /><i>Lead Developer</i></Title>
				<Paragraph centred>
					80s themed hacking game with micro games.
				</Paragraph>
				<ShowcaseGrid>
					<Image imgSrc={HM00} />
					<Image imgSrc={HM01} />
					<Image imgSrc={HM02} />
					<Image imgSrc={HM03} />
					<Image imgSrc={HM04} />
					<Image imgSrc={HM05} />
				</ShowcaseGrid>
			</Event>
		</GamesContainer>
	);
};
