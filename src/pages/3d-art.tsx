import React from 'react';
import styled from 'styled-components';
import { Header } from './components/header';


import All4FImg from '../media/art/All4F.png';
import ApacheImg from '../media/art/ApacheModel.png';
import CrosswindImg from '../media/art/CrosswindonRunway12.png';
import SpaceShuttleImg from '../media/art/SpaceShuttleWhitePadding.png';
import IsometricImg from '../media/art/IsometricBloom.png';
import PlanePopImg from '../media/art/PlanePopArt2.png';
import F35Img from '../media/art/F35Side.png';
import RoyalBlueImg from '../media/art/Render4-RoyalBlue.png';
import Neon1Img from '../media/art/Neon1.png';
import SpaceShuttle2Img from '../media/art/SpaceShuttleSide.png';
import PioneerImg from '../media/art/PioneerSide.png';
import PortalGunImg from '../media/art/LowPolyPortalGun.png';
import AngledImg from '../media/art/Angled.png';
import F22Img from '../media/art/F22Top.png';
import SpaceShuttle3Img from '../media/art/SpaceShuttleTiles.png';
import F4Img from '../media/art/F-4Phantom.png';
import SpaceXImg from '../media/art/SpaceMirror4.png';
import F35FrontImg from '../media/art/F35Front.png';
import PioneerFrontImg from '../media/art/PioneerFront.png';

const ArtContainer = styled.div``;

const ArtGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0 4px;
`;

const ArtColumn = styled.div`
	flex: 25%;
	padding: 0 4px;

	@media (max-width: 425px) {
		flex: 100%;
	}
`;

const ArtImg = styled.img`
	margin-top: 8px;
	vertical-align: middle;
	max-width: 100%;
`;

export const Art: React.FC = () => {
	return (
		<ArtContainer>
			<Header title="Art" tag="Some old art made in Blender and Substance Designer for fun." />
			<ArtGrid>
				<ArtColumn>
					<ArtImg src={All4FImg} alt="4 Neon Fighter Jets" />
					<ArtImg src={ApacheImg} alt="Apache Helicopter" />
					<ArtImg src={CrosswindImg} alt="Landing Art" />
					<ArtImg src={SpaceShuttleImg} alt="Padding texture" />
				</ArtColumn>
				<ArtColumn>
					<ArtImg src={IsometricImg} alt="ISS Neon" />
					<ArtImg src={PlanePopImg} alt="Plane Pop Art" />
					<ArtImg src={F35Img} alt="F-35 Side" />
					<ArtImg src={RoyalBlueImg} alt="Falcon 9 Landing" />
					<ArtImg src={Neon1Img} alt="James Webb Space Telescope Neon" />
					<ArtImg src={SpaceShuttle2Img} alt="Space Shuttle" />
					<ArtImg src={PioneerImg} alt="Pioneer Side" />
					<ArtImg src={PortalGunImg} alt="Low Poly Portal Gun" />
				</ArtColumn>
				<ArtColumn>
					<ArtImg src={AngledImg} alt="James Webb Space Telescope" />
					<ArtImg src={F22Img} alt="F-22 Top" />
					<ArtImg src={SpaceShuttle3Img} alt="Space Shuttle Tile texture" />
					<ArtImg src={F4Img} alt="F-4 Phantom" />
					<ArtImg src={SpaceXImg} alt="ames Webb Space Telescope Reflection" />
					<ArtImg src={F35FrontImg} alt="F-35 Front" />
					<ArtImg src={PioneerFrontImg} alt="Pioneer 10 Front" />
				</ArtColumn>
			</ArtGrid>
		</ArtContainer>
	);
};
