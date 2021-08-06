import React from 'react';
import styled from 'styled-components';
import { Header } from './components/header';
import { DumbEmail } from './components/dumb-email';

const ContactContainer = styled.div``;

const ContactDetails = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 1.8rem;
`;

const ContactLink = styled.a`
	margin: 1vh 0;
`;

export const Contact: React.FC = () => {
	return (
		<ContactContainer>
			<Header title="Contact" />
			<ContactDetails>
				<ContactLink href="https://www.linkedin.com/in/ewan-lyon-a57734173/" target="_blank">
					LinkedIn
				</ContactLink>
				<DumbEmail style={{ margin: '1vh' }} text="ewan@ewanlyon.com" />
				<ContactLink href="https://twitter.com/Clubwhom" target="_blank">
					Twitter
				</ContactLink>
				<ContactLink href="https://github.com/EwanLyon" target="_blank">
					GitHub
				</ContactLink>
				<ContactLink href="https://www.youtube.com/channel/UCegx-UqkpUx9HjQ6lcXKzdg" target="_blank">
					YouTube
				</ContactLink>
			</ContactDetails>
		</ContactContainer>
	);
};
