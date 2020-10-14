import React from 'react';
import styled from 'styled-components';
import { Header } from './components/header';

const ArtContainer = styled.div``;

const ArtGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0 4px;
`;

const ArtColumn = styled.div`
	flex: 25%;
	padding: 0 4px;
`;

const ArtImg = styled.img`
	margin-top: 8px;
	vertical-align: middle;
	max-width: 100%;
`;

export const Art: React.FC = () => {
	return (
		<ArtContainer>
			<Header title="Art" tag="Some art work made in Blender and Substance Designer. Models are from myself and NASA" />
			<ArtGrid>
				<ArtColumn>
					<ArtImg src={require('../media/art/All4F.png')} alt="4 Neon Fighter Jets" />
					<ArtImg src={require('../media/art/ApacheModel.png')} alt="Apache Helicopter" />
					<ArtImg src={require('../media/art/CrosswindonRunway12.png')} alt="Landing Art" />
					<ArtImg src={require('../media/art/SpaceShuttleWhitePadding.png')} alt="Padding texture" />
				</ArtColumn>
				<ArtColumn>
					<ArtImg src={require('../media/art/IsometricBloom.png')} alt="ISS Neon" />
					<ArtImg src={require('../media/art/PlanePopArt2.png')} alt="Plane Pop Art" />
					<ArtImg src={require('../media/art/F35Side.png')} alt="F-35 Side" />
					<ArtImg src={require('../media/art/Render4-RoyalBlue.png')} alt="Falcon 9 Landing" />
					<ArtImg src={require('../media/art/Neon1.png')} alt="James Webb Space Telescope Neon" />
					<ArtImg src={require('../media/art/SpaceShuttleSide.png')} alt="Space Shuttle" />
					<ArtImg src={require('../media/art/PioneerSide.png')} alt="Pioneer Side" />
					<ArtImg src={require('../media/art/LowPolyPortalGun.png')} alt="Low Poly Portal Gun" />
				</ArtColumn>
				<ArtColumn>
					<ArtImg src={require('../media/art/Angled.png')} alt="James Webb Space Telescope" />
					<ArtImg src={require('../media/art/F22Top.png')} alt="F-22 Top" />
					<ArtImg src={require('../media/art/SpaceShuttleTiles.png')} alt="Space Shuttle Tile texture" />
					<ArtImg src={require('../media/art/F-4Phantom.png')} alt="F-4 Phantom" />
					<ArtImg src={require('../media/art/SpaceMirror4.png')} alt="ames Webb Space Telescope Reflection" />
					<ArtImg src={require('../media/art/F35Front.png')} alt="F-35 Front" />
					<ArtImg src={require('../media/art/PioneerFront.png')} alt="Pioneer 10 Front" />
				</ArtColumn>
			</ArtGrid>
		</ArtContainer>
	);
};
