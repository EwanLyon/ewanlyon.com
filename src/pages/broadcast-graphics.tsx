import React from 'react';
import styled from 'styled-components';
import { Gfycat, Image, Paragraph, ShowcaseGrid, Title, YouTube } from './components';
import { Header } from './components/header';

const BroadcastContainer = styled.div`
	font-size: 1.5vw;
`;

const Event = styled.div``;

const InfoBox = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 0 15%;
	font-weight: lighter;

	& > div {
		max-width: 50%;
	}
`;

const InfoTitle = styled.span`
	font-weight: bold;
`;

export const Broadcast: React.FC = () => {
	return (
		<BroadcastContainer>
			<Header title="Broadcast Graphics" />
			<Event>
				<Title>Australian Speedrun Marathon</Title>
				<Paragraph>
					I designed and programmed the graphics for the{' '}
					<a href="https://www.twitch.tv/ausspeedruns" target="_blank">
						Australian Speedrun Marathon
					</a>{' '}
					2020 online event. Multiple layouts had to be made including: an intermission screen, widescreen, 4:3,
					Nintendo DS, Gameboy Advanced, 2 player race designs and a transition screen. The event ended up raising over
					$13,000 which was near double the previous highest of $7,000. The graphic's used{' '}
					<a href="https://github.com/speedcontrol/nodecg-speedcontrol/" target="_blank">
						nodecg-speedcontrol
					</a>{' '}
					as the backend handler.
				</Paragraph>
				<InfoBox>
					<div>
						<InfoTitle>Features</InfoTitle>
						<ul>
							<li>Intermission screen</li>
							<li>Ticker showing current total, next runs and a call to action</li>
							<li>Widescreen, Standard, Nintendo DS, Gameboy Advanced and race layouts</li>
						</ul>
					</div>
					<div>
						<InfoTitle>Libraries used</InfoTitle>
						<ul>
							<li>React</li>
							<li>TypeScript</li>
							<li>Styled-components</li>
							<li>GSAP</li>
							<li>
								<a href="https://github.com/speedcontrol/nodecg-speedcontrol/" target="_blank">
									nodecg-speedcontrol
								</a>
							</li>
						</ul>
					</div>
				</InfoBox>
				<ShowcaseGrid>
					<YouTube videoID="7QIWBDlc15o" desc="ASM 2020" />
					<YouTube videoID="T38naXjvsvA" desc="PAX Online" />
				</ShowcaseGrid>
			</Event>
			<Event>
				<Title>CS:GO</Title>
				<Paragraph>
					A personal project was creating a set of{' '}
					<a href="https://blog.counter-strike.net/layouts" target="_blank">
						CS:GO
					</a>{' '}
					for use at a tournament. It uses the game state integration system allowing for real time data to be used in
					displaying information in a different or more informative way than the original hud. As this is being
					developed it is subject to change. The design has been inspired by future user interfaces such as the Games
					Done Quick layouts used from 2018-2020.
				</Paragraph>
				<InfoBox>
					<div>
						<InfoTitle>Features</InfoTitle>
						<ul>
							<li>Plant, bomb and defuse progress bars</li>
							<li>Team logo and name</li>
							<li>Team economy and grenades</li>
							<li>Map with all player’s facing direction and vertical location (maps like Vertigo and Nuke)</li>
							<li>Map shows all grenades including an animation for flash and frag grenades exploding</li>
							<li>Easily customisable design</li>{' '}
						</ul>
					</div>
					<div>
						<InfoTitle>Libraries used</InfoTitle>
						<ul>
							<li>React</li>
							<li>TypeScript</li>
							<li>Styled-components</li>
							<li>GSAP</li>
							<li>Material UI</li>
						</ul>
					</div>
				</InfoBox>
				<Paragraph>
					These have not been used at an actual tournament. Round data has been taken from tournament demos.
				</Paragraph>
				<ShowcaseGrid>
					<YouTube videoID="38XpupB8pb0" desc="Full round" />
					<Image imgSrc={require('../media/broadcast/csgo/Midround.jpg')} desc="Mid-round" />
					<Image imgSrc={require('../media/broadcast/csgo/PistolRound.jpg')} desc="Pistol Round" />
					<Image imgSrc={require('../media/broadcast/csgo/BuyTime.jpg')} desc="Buy Time" />
					<Image imgSrc={require('../media/broadcast/csgo/Map.jpg')} desc="Minimap" />
					<Image imgSrc={require('../media/broadcast/csgo/ControlPanel.png')} desc="Player control panel" />
				</ShowcaseGrid>
			</Event>
			<Event>
				<Title>Cricket</Title>
				<Paragraph>
					This was a project I made at the start of 2019 to challenge myself to create a full set of graphics. The main
					goal was for the operator to press the least number of buttons to operate. The design was inspired by Google’s
					material/paper UI and avoiding the use of gradients for 3D effects as most designs used.
					<br />
					<a href="https://github.com/EwanLyon/cricket-layouts" target="_blank">
						GitHub
					</a>
				</Paragraph>
				<InfoBox>
					<div>
						<InfoTitle>Features</InfoTitle>
						<ul>
							<li>Full score bug</li>
							<li>Mini score bug</li>
							<li>Full batting scoreboard</li>
							<li>Toss notification</li>
							<li>Location nameplate</li>
							<li>Changable batting order</li>
							<li>Match day information</li>
						</ul>
					</div>
					<div>
						<InfoTitle>Libraries used</InfoTitle>
						<ul>
							<li>Polymer 2</li>
							<li>TypeScript</li>
							<li>GSAP</li>
							<li>Polymer Paper Elements</li>
						</ul>
					</div>
				</InfoBox>
				<ShowcaseGrid>
					<Image imgSrc={require('../media/broadcast/cricket/Scorebug.png')} desc="Score Bug" />
					<Image imgSrc={require('../media/broadcast/cricket/GameControls.png')} desc="Main Controls" />
					<Image imgSrc={require('../media/broadcast/cricket/FullScore.png')} desc="Batter Scoreboard" />
					<Image imgSrc={require('../media/broadcast/cricket/SetupControls.png')} desc="Setup Controls" />
					<Image imgSrc={require('../media/broadcast/cricket/Location.png')} desc="Location Bug" />
					<Image imgSrc={require('../media/broadcast/cricket/GraphicsController.png')} desc="Graphics Controls" />
				</ShowcaseGrid>
			</Event>
			<Event>
				<Title>Personal Livestream</Title>
				<Paragraph>These are layouts developed for my streams (that I rarely do).</Paragraph>
				<InfoBox>
					<div>
						<InfoTitle>Features</InfoTitle>
						<ul>
							<li>Countdown screen</li>
							<li>Follower and Host notifications</li>
							<li>Spotify song integration</li>
							<li>Adjustable livesplit element</li>
						</ul>
					</div>
					<div>
						<InfoTitle>Libraries used</InfoTitle>
						<ul>
							<li>React</li>
							<li>TypeScript</li>
							<li>GSAP</li>
							<li>Sass</li>
						</ul>
					</div>
				</InfoBox>
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
			<Event>
				<Title>ncg-spotify</Title>
				<Paragraph>
					NCG-Spotify is a NodeCG bundle aimed to handle Spotify song information and for other bundles to use them
					easier.
					<br />
					<a href="https://github.com/EwanLyon/ncg-spotify" target="_blank">
						GitHub
					</a>
				</Paragraph>
				<InfoBox>
					<div>
						<InfoTitle>Features</InfoTitle>
						<ul>
							<li>Song name</li>
							<li>Song artist</li>
							<li>Album art</li>
							<li>Playing status</li>
						</ul>
					</div>
					<div>
						<InfoTitle>Libraries used</InfoTitle>
						<ul>
							<li>TypeScript</li>
							<li>Spotify‑web‑api‑node</li>
						</ul>
					</div>
				</InfoBox>
				<Image
					imgSrc={require('../media/broadcast/spotify.jpg')}
					desc="Dashboard panel"
					style={{ padding: '0 42%', marginTop: '3vw' }}
				/>
			</Event>
			<Event>
				<Title>ncg-livesplit</Title>
				<Paragraph>
					This is a simple element that allows the LiveSplit server addon to talk to NodeCG bundles and vice versa. This
					allows dynamic background elements to react to splits.
					<br />
					<a href="https://github.com/EwanLyon/nodecg-livesplit" target="_blank">
						GitHub
					</a>
				</Paragraph>
				<InfoBox>
					<div>
						<InfoTitle>Features</InfoTitle>
						<ul>
							<li>Song name</li>
							<li>Song artist</li>
							<li>Album art</li>
							<li>Playing status</li>
						</ul>
					</div>
					<div>
						<InfoTitle>Libraries used</InfoTitle>
						<ul>
							<li>TypeScript</li>
							<li>Spotify‑web‑api‑node</li>
						</ul>
					</div>
				</InfoBox>
				<ShowcaseGrid>
					<Image imgSrc={require('../media/broadcast/livesplit.png')} desc="Dashboard panel" />
					<YouTube videoID="2VS2IG_3y00" desc="Integration" />
				</ShowcaseGrid>
			</Event>
			<Event>
				<Title>NodeCG Tutorials</Title>
				<Paragraph>Tutorial I made on a basic NodeCG bundle for newcomers.</Paragraph>
				<YouTube style={{ padding: '0 30%' }} videoID="uSWRcgD9NQQ" />
			</Event>
		</BroadcastContainer>
	);
};
