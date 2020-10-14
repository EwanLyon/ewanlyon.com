import React from 'react';
import styled from 'styled-components';

interface CentreProps {
	centred?: boolean;
}

const ParagraphContainer = styled.div`
	font-size: 1.5vw;
	padding: 0 15%;
	margin-bottom: 2%;
	font-weight: lighter;
	${(props: CentreProps) => (props.centred ? 'text-align: center;' : '')}
`;

interface ParagraphProps {
	centred?: boolean;
	style?: React.CSSProperties;
	className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = (props: React.PropsWithChildren<ParagraphProps>) => {
	return (
		<ParagraphContainer centred={props.centred} className={props.className} style={props.style}>
			{props.children}
		</ParagraphContainer>
	);
};

const TitleContainer = styled.div`
	font-weight: bold;
	font-size: 1.8vw;
	padding: 0 15%;
	text-align: center;
	margin: 5% 0;
`;

interface TitleProps {
	style?: React.CSSProperties;
	className?: string;
}

export const Title: React.FC<TitleProps> = (props: React.PropsWithChildren<TitleProps>) => {
	return (
		<TitleContainer className={props.className} style={props.style}>
			{props.children}
		</TitleContainer>
	);
};
