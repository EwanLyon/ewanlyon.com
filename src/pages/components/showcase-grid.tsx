import React from 'react';
import styled from 'styled-components';

const ShowcaseGridContainer = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	justify-items: center;
	margin-top: 5vh;
	row-gap: 3vw;

	& > * {
		width: 90%;
	}

	@media (max-width: 768px) {
		grid-template-columns: 100%;
	}
`;

interface Props {
	style?: React.CSSProperties;
	className?: string;
	children?: React.ReactNode;
}

export const ShowcaseGrid: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
	return (
		<ShowcaseGridContainer className={props.className} style={props.style}>
			{props.children}
		</ShowcaseGridContainer>
	);
};
