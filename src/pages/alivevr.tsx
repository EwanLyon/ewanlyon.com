import React from 'react';
import styled from 'styled-components';
import { Header, Paragraph, Title, YouTube, ShowcaseGrid } from './components';

const AliveVRContainer = styled.div`
	font-size: 1.5vw;
	font-weight: lighter;
`;

const SongListComp = styled.li`
	list-style-type: '✓ ';
`;

const SongListDoing = styled.li`
	list-style-type: disc;
`;

const SongListNotDone = styled.li`
	list-style-type: '– ';
`;

export const AliveVR: React.FC = () => {
	return (
		<AliveVRContainer>
			<Header title="Alive VR" />
			<Paragraph>
				Alive VR is a fan project that recreates Daft Punk's Alive 2006/2007 tour visuals. The experience is run in
				Unity and all graphics and models have been made in Blender.
			</Paragraph>
			<ShowcaseGrid>
				<YouTube videoID="QqMPaf5oHfs" desc="Part 1 Trailer" />
				<YouTube videoID="0MtJxvAJVes" desc="Robot Rock / Oh Yeah" />
				<YouTube videoID="xvbWTSnxDeU" desc="Touch It / Technologic" />
				<YouTube videoID="O6HPjVV_J5M" desc="Television Rules the Nation / Crescendolls" />
				<YouTube videoID="_IyXJ3hCsjQ" desc="Too Long / Steam Machine" />
				<YouTube videoID="GBzvF7KbKGU" desc="Around the World / Harder, Better, Faster, Stronger" />
			</ShowcaseGrid>
			<Title>Song Status</Title>
			<Paragraph centred>
				Part 1{' '}
				<a
					href="https://drive.google.com/file/d/1FjwIeysMPF56DBw_npsxQYaGg3gYtdm7/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					Download
				</a>
			</Paragraph>
			<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
				<ul>
					<SongListComp>Robot Rock / Oh Yeah</SongListComp>
					<SongListComp>Touch It / Technologic</SongListComp>
					<SongListComp>Television Rules the Nation / Crescendolls</SongListComp>
					<SongListComp>Too Long / Steam Machine</SongListComp>
					<SongListComp>Around the World / Harder, Better, Faster, Stronger</SongListComp>
					<SongListComp>Burnin' / Too Long</SongListComp>
				</ul>
			</div>
			<Paragraph centred>Part 2</Paragraph>
			<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
				<ul>
					<SongListComp>Face to Face / Short Circuit</SongListComp>
					<SongListNotDone>One More Time / Aerodynamic</SongListNotDone>
					<SongListComp>Aerodynamic Beats / Gabrielle, Forget About the World</SongListComp>
					<SongListDoing>The Prime Time of Your Life / The Brainwasher / Rollin' & Scratchin' / Alive</SongListDoing>
					<SongListComp>Da Funk / Daftendirekt</SongListComp>
					<SongListNotDone>Superheroes / Human After All / Rock'n Roll</SongListNotDone>
					<SongListDoing>Human After All / Together / One More Time / Music Sounds Better with You</SongListDoing>
				</ul>
			</div>
		</AliveVRContainer>
	);
};
