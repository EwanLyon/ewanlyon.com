import React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface CentreProps {
	centred?: boolean;
}

const ParagraphContainer = styled.div`
	font-size: 1.5rem;
	padding: 0 15%;
	margin-bottom: 2%;
	font-weight: lighter;
	${(props: CentreProps) => (props.centred ? 'text-align: center;' : '')}
	
	@media (max-width: 425px) {
		font-size: 1rem;
	}
`;

interface ParagraphProps {
	centred?: boolean;
	style?: React.CSSProperties;
	className?: string;
	children?: React.ReactNode;
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
	font-size: 2rem;
	padding: 0 15%;
	text-align: center;
	margin: 5% 0;

	@media (max-width: 425px) {
		font-size: 1.5rem;
	}
`;

interface TitleProps {
	style?: React.CSSProperties;
	className?: string;
	id?: string;
	children?: React.ReactNode;
}

export const Title: React.FC<TitleProps> = (props: React.PropsWithChildren<TitleProps>) => {
	return (
		<TitleContainer id={props.id} className={props.className} style={props.style}>
			{props.children}
		</TitleContainer>
	);
};
