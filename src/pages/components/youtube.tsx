import React from 'react';
import styled from 'styled-components';

const Desc = styled.span`
	display: block;
	font-size: 1.8vw;
	font-weight: lighter;
	margin-top: 1%;
`;

const YouTubeElementContainer = styled.div``;

const YouTubeContainer = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.25%;
`;

const YouTubeIFrame = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

interface Props {
	videoID: string;
	desc?: string;
	style?: React.CSSProperties;
	className?: string;
}

export const YouTube: React.FC<Props> = (props: Props) => {
	return (
		<YouTubeElementContainer className={props.className} style={props.style}>
			<YouTubeContainer>
				<YouTubeIFrame src={`https://www.youtube.com/embed/${props.videoID}`} allowFullScreen />
			</YouTubeContainer>
			<Desc>{props.desc}</Desc>
		</YouTubeElementContainer>
	);
};
