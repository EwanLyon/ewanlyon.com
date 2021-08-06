import React from 'react';
import styled from 'styled-components';

const DumbEmailContainer = styled.div``;

interface Props {
	text: string;
	style?: React.CSSProperties;
	className?: string;
}

export const DumbEmail: React.FC<Props> = (props: Props) => {
	const spanArray = props.text.split('').map((letter, i) => {
		return <span key={i}>{letter}</span>;
	});

	return (
		<DumbEmailContainer className={props.className} style={props.style}>
			{spanArray}
		</DumbEmailContainer>
	);
};
