import React from 'react';
import styled from 'styled-components';

import { RatingImage, Ratings } from './ratings/ratings';

const NoticeboardMovieContainer = styled.div`
	padding-bottom: 63.87%;
	width: 100%;
	box-sizing: border-box;
	background: white;
	border: 0.75vw solid black;
	position: relative;
	font-family: Roboto, arial, sans-serif;
`;

const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	height: 100%;
`;

const PosterImg = styled.img`
	height: 100%;
	width: auto;
	object-fit: cover;
`;

const DataCont = styled.div`
	flex-grow: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TitleCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	height: 21%;
	width: 100%;
	margin-bottom: 3%;
	padding-bottom: 0.75vw;
`;

const Title = styled.span`
	font-weight: bold;
`;

const GenreContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8%;
`;

const Genre = styled.div`
	background: #e2e2e2;
	padding: 0.5vw;
    font-size: 1vw;
	text-transform: uppercase;
`;

const Desc = styled.div`
	font-size: 1vw;
	width: 86%;
	height: 45%;
	display: flex;
	align-items: center;
`;

const MetaInfo = styled.span`
	font-size: 1.2vw;
	margin: 0.5rem 0;
	width: 100%;
    text-align: center;
`;

const InfoBoxes = styled.div`
	width: 100%;
	padding: 4% 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 15%;
`;

const FWTCLogo = styled.img`
	height: 100%;
`;

const SideLabel = styled.span`
	font-weight: lighter;
	font-style: italic;
	font-size: 1.2vw;
	margin: 0 1.2vw;
	white-space: pre-line;
	text-align: center;
`;

export type NoticeboardTypes = 'Normal' | 'FWTC' | 'AS' | 'VExtra' | 'SE';

interface Props {
	type: NoticeboardTypes;
	title: string;
	subtitle?: string;
	genres?: string;
	desc: string;
	imageUrl: string;
	releaseDate?: string;
	length?: string | number;
	rating: Ratings;
	imdbRating?: string;
	className?: string;
	style?: React.CSSProperties;
}

export const NoticeboardMovie: React.FC<Props> = (props: Props) => {
	let primaryColour = '';
	switch (props.type) {
		case 'Normal':
			primaryColour = '#000000';
			break;
		case 'FWTC':
			primaryColour = '#E2328C';
			break;
		case 'AS':
			primaryColour = '#2A1D68';
			break;
		case 'VExtra':
			primaryColour = '#042048';
			break;
		case 'SE':
			primaryColour = '#FF0000';
			break;
		default:
			primaryColour = '#000000';
			break;
	}

	let sideInfo = <></>;
	switch (props.type) {
		case 'FWTC':
			sideInfo = <FWTCLogo src={require('./images/FWTC.png')} />;
			break;
		case 'AS':
			sideInfo = (
				<SideLabel>
					Advance
					<br />
					Screening
				</SideLabel>
			);
			break;
		case 'SE':
			sideInfo = (
				<SideLabel>
					Special
					<br />
					Event
				</SideLabel>
			);
			break;
		case 'VExtra':
			sideInfo = <SideLabel>V-Extra</SideLabel>;
			break;
		default:
			break;
	}

	const genreBoxes = props.genres?.split(',').map((genre, index) => {
		return <Genre key={index}>{genre}</Genre>;
	});

	return (
		<NoticeboardMovieContainer style={{ borderColor: primaryColour }} className={props.className}>
			<Content>
				{/* <Poster> */}
					<PosterImg src={props.imageUrl} style={{ minWidth: props.imageUrl ? '' : '45%', outline: '' }} />
				{/* </Poster> */}
				<DataCont>
					<TitleCont
						style={{
							background: primaryColour === '#000000' ? '' : primaryColour,
							color: primaryColour === '#000000' ? '' : '#ffffff',
						}}
					>
						{sideInfo}
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
							<Title style={{ fontSize: props.subtitle ? '2vw' : '3vw' }}>{props.title ? props.title : 'Title'}</Title>
							{props.subtitle ? <Title style={{ fontSize: '1.8rem' }}>{props.subtitle}</Title> : <></>}
						</div>
					</TitleCont>
					<GenreContainer>{props.genres ? genreBoxes : <></>}</GenreContainer>
					<Desc>
						<span style={{ fontFamily: 'Roboto', whiteSpace: 'pre-line' }}>
							{props.desc ? props.desc : 'Description'}
						</span>
					</Desc>
					<MetaInfo>
						Release date: <b>{props.releaseDate ? props.releaseDate : 'TBA'}</b>
					</MetaInfo>
					<MetaInfo>{props.length ? `${props.length} mins` : 'Length TBA'}</MetaInfo>
					<InfoBoxes>
						{props.imdbRating ? <IMDbBox rating={parseFloat(props.imdbRating || '')} /> : <></>}
						<RatingImage style={{ height: '100%', width: 'auto' }} rating={props.rating} />
					</InfoBoxes>
				</DataCont>
			</Content>
		</NoticeboardMovieContainer>
	);
};

// IMDb Info Box

const IMDbContainer = styled.div`
	height: 100%;
	background: #e6b91e;
	display: flex;
	align-items: center;

	border: 1px solid #000000;
	box-sizing: border-box;
	border-radius: 6px;

	font-size: 1.5vw;
	padding-right: 7%;
`;

const IMDbLogo = styled.img`
	height: 100%;
	width: auto;

	border-right: 1px solid #000000;
`;

const IMDbTextCont = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	padding: 10%;
`;

interface IMDbBoxProps {
	rating?: number;
}

const IMDbBox: React.FC<IMDbBoxProps> = (props: IMDbBoxProps) => {
	return (
		<IMDbContainer>
			<IMDbLogo src={require('./images/IMDbLogo.png')} />
			<IMDbTextCont>
				<span>{props.rating ? `${props.rating}/10` : 'N/A'}</span>
			</IMDbTextCont>
		</IMDbContainer>
	);
};
