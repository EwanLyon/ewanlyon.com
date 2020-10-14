import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div``;

const StyledImg = styled.img`
	object-fit: contain;
	width: 100%;
`;

const Desc = styled.span`
	display: block;
	font-size: 1.8vw;
	font-weight: lighter;
`;

interface ImageProps {
	imgSrc: string;
	desc?: string;
	className?: string;
	style?: React.CSSProperties;
}

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
	return (
		<ImageContainer className={props.className} style={props.style}>
			<StyledImg src={props.imgSrc} />
			<Desc>{props.desc}</Desc>
		</ImageContainer>
	);
};

const GfycatContainer = styled.div``;

const GfycatIFrameCont = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.25%;
`;

interface GfycatProps {
	gfycatId: string;
	desc?: string;
	className?: string;
	style?: React.CSSProperties;
}

export const Gfycat: React.FC<GfycatProps> = (props: GfycatProps) => {
	return (
		<GfycatContainer>
			<GfycatIFrameCont>
				<iframe
					src={`https://gfycat.com/ifr/${props.gfycatId}`}
					frameBorder="0"
					scrolling="no"
					width="100%"
					height="100%"
					style={{ position: 'absolute', top: 0, left: 0 }}
					allowFullScreen
				/>
			</GfycatIFrameCont>
			<Desc>{props.desc}</Desc>
		</GfycatContainer>
	);
};
