import React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.div`
	height: 1px;
	width: 100%;
	background: white;
	margin: 3vh 0;
`;

interface Props {
	style?: React.CSSProperties;
	className?: string;
}

export const Divider: React.FC<Props> = (props: Props) => {
	return <DividerContainer className={props.className} style={props.style} />;
};
