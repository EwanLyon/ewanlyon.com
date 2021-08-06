import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Gfycat, Image, Paragraph, ShowcaseGrid, Title, YouTube } from './components';
import { Header } from './components/header';

const BroadcastContainer = styled.div`
	font-size: 1.5vw;

	& a {
		font-weight: bold;
	}
`;

const Event = styled.div``;

// const InfoBox = styled.div`
// 	display: flex;
// 	justify-content: space-around;
// 	padding: 0 15%;
// 	font-weight: lighter;

// 	& > div {
// 		max-width: 50%;
// 	}
// `;

// const InfoTitle = styled.span`
// 	font-weight: bold;
// `;

const Divider = styled.div`
	height: 1px;
	margin: auto;
	width: 80%;
	background: #ffffff;
	margin-top: 5vw;
`;

const Contents = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > a {
		font-size: 1.2rem;
	}
`;

const ShowcaseGridCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2vh;
	
	& > * {
		width: 70%;
	}
`;

export const Broadcast: React.FC = () => {
	useEffect(() => {
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
		
				document.querySelector(anchor.getAttribute('href') ?? '')?.scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
	}, []);

	return (
		<BroadcastContainer>
			<Contents>
				<a href="#aus-speedruns">AusSpeedruns</a>
				<a href="#csgo">CS:GO</a>
				<a href="#custom-livesplit">Custom LiveSplit Displays</a>
				<a href="#cricket">Cricket</a>
				<a href="#personal">Personal Livestream</a>
				<a href="#spotify">ncg-spotify</a>
				<a href="#livesplit">ncg-livesplit</a>
				<a href="#tutorial">Tutorial</a>
			</Contents>
			<Event>
				<Title id="aus-speedruns">AusSpeedruns</Title>
				<Paragraph>
					I designed and programmed the graphics for {' '}
					<a href="https://ausspeedruns.com" target="_blank">
						AusSpeedruns
					</a>{'. '}
					Multiple layouts had to be made to fit the wide range of aspect ratios and races. These graphics had to run nonstop over multiple days while being able to be controlled by remote volunteers with limited training.
				</Paragraph>
				<ShowcaseGrid>
					<Image imgSrc={require('../media/broadcast/ausspeedruns/asm2021.png')} desc="ASM 2021" />
					<Image imgSrc={require('../media/broadcast/ausspeedruns/fast2020.png')} desc="FAST 2020" />
					<Image imgSrc={require('../media/broadcast/ausspeedruns/paxonline.png')} desc="PAX Online" />
					<Image imgSrc={require('../media/broadcast/ausspeedruns/asm2020.png')} desc="ASM 2020" />
				</ShowcaseGrid>
			</Event>
			<Divider />
			<Event>
				<Title id="csgo">CS:GO</Title>
				<Paragraph>
					A personal project was creating a set of{' '}
					<a href="https://blog.counter-strike.net/layouts" target="_blank">
						CS:GO
					</a>{' '}
					for use in tournaments. It uses the game state integration system allowing for real time data to be used in
					displaying information in a different or more informative way than the original hud.
				</Paragraph>
				<Paragraph>
					I then continued to develop the backend releasing it open source under the GPL license.
					<br />
					<br />
					<a href="https://github.com/EwanLyon/nodecg-csgo-manager" target="_blank">NodeCG-CSGO-Manager GitHub</a>
				</Paragraph>
				<ShowcaseGrid>
					<YouTube videoID="38XpupB8pb0" desc="Full round" />
					<Image imgSrc={'https://github.com/EwanLyon/clubwho-csgo-graphics/raw/main/media/FullHUD.jpg'} desc="Personal Design" />
					<Image imgSrc={'https://github.com/EwanLyon/angles-csgo-hud/raw/main/media/FullHUD.jpg'} desc="Angles Hud" />
					<Image imgSrc={'https://github.com/EwanLyon/basic-csgo-hud/raw/main/media/FullHUD.jpg'} desc="Basic Hud" />
					<Image imgSrc={'https://github.com/EwanLyon/nodecg-csgo-manager/raw/main/media/dashboard.png'} desc="Control Panel" />
				</ShowcaseGrid>
			</Event>
			<Divider />
			<Event>
				<Title id="custom-livesplit">Custom LiveSplit Displays</Title>
				<Paragraph>
					Experimenting with new ways to display LiveSplit splits.
				</Paragraph>
				<ShowcaseGridCenter>
					<Image imgSrc={require('../media/broadcast/livesplit/olympics.gif')} desc="Mario and Sonic at the Olympic Games" />
					<Image imgSrc={require('../media/broadcast/livesplit/portal.gif')} desc="Portal" />
				</ShowcaseGridCenter>
			</Event>
			<Divider />
			<Event>
				<Title id="cricket">Cricket</Title>
				<Paragraph>
					This was a project I made at the start of 2019 to challenge myself to create a full set of graphics. The main
					goal was for the operator to press the least number of buttons to operate.
					<br />
					<br />
					<a href="https://github.com/EwanLyon/cricket-layouts" target="_blank">
						Cricket-Layouts GitHub
					</a>
				</Paragraph>
				<ShowcaseGrid>
					<Image imgSrc={require('../media/broadcast/cricket/Scorebug.png')} desc="Score Bug" />
					<Image imgSrc={require('../media/broadcast/cricket/GameControls.png')} desc="Main Controls" />
					<Image imgSrc={require('../media/broadcast/cricket/FullScore.png')} desc="Batter Scoreboard" />
					<Image imgSrc={require('../media/broadcast/cricket/SetupControls.png')} desc="Setup Controls" />
					<Image imgSrc={require('../media/broadcast/cricket/Location.png')} desc="Location Bug" />
					<Image imgSrc={require('../media/broadcast/cricket/GraphicsController.png')} desc="Graphics Controls" />
				</ShowcaseGrid>
			</Event>
			<Divider />
			<Event>
				<Title id="personal">Personal Livestream</Title>
				<Paragraph>These are layouts developed for my streams (that I rarely do).</Paragraph>
				<ShowcaseGrid>
					<Gfycat gfycatId="parallelwarmheartedhoneybee" desc="Countdown" />
					<Gfycat gfycatId="mammothshowybasenji" desc="Gameplay" />
				</ShowcaseGrid>
				<Image
					imgSrc={require('../media/broadcast/Speedrun.png')}
					desc="Speedrun"
					style={{ padding: '0 25%', marginTop: '3vw' }}
				/>
			</Event>
			<Divider />
			<Event>
				<Title id="spotify">ncg-spotify</Title>
				<Paragraph>
					NCG-Spotify is a NodeCG bundle aimed to handle Spotify song information and for other bundles to use them
					easier.
					<br />
					<br />
					<a href="https://github.com/EwanLyon/ncg-spotify" target="_blank">
						GitHub
					</a>
				</Paragraph>
				<Image
					imgSrc={require('../media/broadcast/spotify.jpg')}
					desc="Dashboard panel"
					style={{ padding: '0 42%', marginTop: '3vw' }}
				/>
			</Event>
			<Divider />
			<Event>
				<Title id="livesplit">ncg-livesplit</Title>
				<Paragraph>
					This is a simple element that allows the LiveSplit server addon to talk to NodeCG bundles and vice versa. This
					allows dynamic background elements to react to splits.
					<br />
					<br />
					<a href="https://github.com/EwanLyon/nodecg-livesplit" target="_blank">
						GitHub
					</a>
				</Paragraph>
				<ShowcaseGrid>
					<Image imgSrc={require('../media/broadcast/livesplit.png')} desc="Dashboard panel" />
					<YouTube videoID="2VS2IG_3y00" desc="Integration" />
				</ShowcaseGrid>
			</Event>
			<Divider />
			<Event>
				<Title id="tutorial">NodeCG Tutorials</Title>
				<Paragraph>Tutorial I made on a basic NodeCG bundle for newcomers.</Paragraph>
				<YouTube style={{ padding: '0 30%' }} videoID="uSWRcgD9NQQ" />
			</Event>
		</BroadcastContainer>
	);
};
