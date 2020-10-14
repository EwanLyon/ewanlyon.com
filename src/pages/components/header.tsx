import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Divider } from './divider';

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Logo = styled.img`
	height: 20vh;
	width: 100%;
	object-fit: contain;
	margin: 5vh 0;
`;

const Title = styled.span`
	font-weight: 700;
	font-size: 2vw;
`;

const Tag = styled.span`
	font-size: 1.5vw;
`;

interface Props {
	title?: string;
	tag?: string;
	noDivider?: boolean;
}

export const Header: React.FC<Props> = (props: Props) => {
	return (
		<HeaderContainer>
			<Link to="/">
				<Logo src={require('../../media/EL_TransparentFull.png')} />
			</Link>
			<Title>{props.title}</Title>
			<Tag>{props.tag}</Tag>
			{props.noDivider ? <></> : <Divider />}
		</HeaderContainer>
	);
};
