import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import domtoimage from 'dom-to-image';

import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { NoticeboardMovie, NoticeboardTypes } from './noticeboard-design';
import { Ratings } from './ratings/ratings';

const NoticeboardContainer = styled.div`
	font-family: Roboto, arial, sans-serif;
`;

const Title = styled.span`
	font-weight: bold;
	font-size: 40px;
`;

const Output = styled.div`
	width: 50%;
	position: relative;
`;

export const Noticeboard: React.FC = () => {
	const [type, setType] = useState('Normal');
	const [title, setTitle] = useState('Tenet');
	const [subtitle, setSubtitle] = useState('');
	const [genre, setGenre] = useState('Action, Thriller');
	const [desc, setDesc] = useState(
		'Armed with only one word—Tenet—and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time. Not time travel. Inversion.'
	);
	const [imageUrl, setImageUrl] = useState(
		'https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1012_.jpg'
	);
	const [releaseDate, setReleaseDate] = useState('Out now!');
	const [length, setLength] = useState('150');
	const [rating, setRating] = useState('M');
	const [imdbRating, setIMDbRating] = useState('7.8');
	const [errorMessage, setErrorMessage] = useState(
		'Error 0: Error showed up/occured but did not change the error message.'
	);
	const outputRef = useRef<HTMLDivElement>(null);
	const [alertOpen, setAlertOpen] = useState(false);

	const copyOutputAsImage = () => {
		if (outputRef.current) {
			try {
				domtoimage.toBlob(outputRef.current).then(
					(blob) => {
						const clipboardImage = new ClipboardItem({ 'image/png': blob });
						navigator.clipboard.write([clipboardImage]);
					},
					(error) => {
						setErrorMessage(error);
						console.log(error);
						openAlert();
					}
				);
			} catch (error) {
				setErrorMessage(error);
				console.log(error);
				openAlert();
			}
		}
	};

	const openAlert = () => {
		setAlertOpen(true);
	};

	const closeAlert = () => {
		setAlertOpen(false);
	};

	return (
		<NoticeboardContainer>
			<Grid container direction="column" alignItems="center">
				<Title>Noticeboard Creator</Title>
				<Grid item container justify="center" style={{ gap: 32 }}>
					<Grid item container direction="column" alignItems="center" style={{ gap: 16, width: 'auto' }}>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<FormControl fullWidth>
								<InputLabel id="type-select-label">Noticeboard Type</InputLabel>
								<Select
									fullWidth
									labelId="type-select-label"
									variant="filled"
									value={type}
									onChange={(e) => {
										setType(e.target.value as string);
									}}
								>
									<MenuItem value={'Normal'}>Normal</MenuItem>
									<MenuItem value={'FWTC'}>Flicks with the Chicks</MenuItem>
									<MenuItem value={'AS'}>Advance Screenings</MenuItem>
									<MenuItem value={'VExtra'}>V-Extra</MenuItem>
									<MenuItem value={'SE'}>Special Event</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<TextField
								fullWidth
								label="Title"
								variant="filled"
								value={title}
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>
						</Grid>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<TextField
								fullWidth
								label="Subtitle"
								variant="filled"
								value={subtitle}
								onChange={(e) => {
									setSubtitle(e.target.value);
								}}
							/>
						</Grid>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<TextField
								fullWidth
								label="Genres (separate with commas)"
								variant="filled"
								value={genre}
								onChange={(e) => {
									setGenre(e.target.value);
								}}
							/>
						</Grid>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<TextField
								fullWidth
								label="Description"
								variant="filled"
								multiline
								rows={7}
								value={desc}
								onChange={(e) => {
									setDesc(e.target.value);
								}}
							/>
						</Grid>
					</Grid>
					<Grid item container direction="column" alignItems="center" style={{ gap: 16, width: 'auto' }}>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<TextField
								fullWidth
								variant="filled"
								label="Movie Poster URL"
								value={imageUrl}
								onChange={(e) => {
									setImageUrl(e.target.value);
								}}
							/>
						</Grid>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<TextField
								fullWidth
								variant="filled"
								label="Release Date"
								value={releaseDate}
								onChange={(e) => {
									setReleaseDate(e.target.value);
								}}
							/>
						</Grid>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<TextField
								fullWidth
								variant="filled"
								label="Movie Length"
								value={length}
								type="number"
								onChange={(e) => {
									setLength(e.target.value);
								}}
							/>
						</Grid>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<FormControl fullWidth>
								<InputLabel id="rating-select-label">Classification/Rating</InputLabel>
								<Select
									fullWidth
									labelId="rating-select-label"
									variant="filled"
									value={rating}
									onChange={(e) => {
										setRating(e.target.value as string);
									}}
								>
									<MenuItem value={'Unknown'}>CTC/Unknown</MenuItem>
									<MenuItem value={'G'}>G</MenuItem>
									<MenuItem value={'PG'}>PG</MenuItem>
									<MenuItem value={'M'}>M</MenuItem>
									<MenuItem value={'MA'}>MA15+</MenuItem>
									<MenuItem value={'R'}>R18+</MenuItem>
									<MenuItem value={'X'}>X18+</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid container item alignItems="center" justify="space-between" style={{ width: '20vw' }}>
							<TextField
								fullWidth
								variant="filled"
								label="IMDb Rating"
								value={imdbRating}
								onChange={(e) => {
									setIMDbRating(e.target.value);
								}}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Button style={{ margin: '1rem 0' }} variant="contained" onClick={copyOutputAsImage}>
					Copy as image
				</Button>
				<span style={{ marginBottom: '1rem', fontWeight: 'lighter', color: '#888' }}>
					If the button doesn't work press SHIFT + Windows Key + S and drag over the image, then copy and paste into a word document.
				</span>
				<Output ref={outputRef} style={{ marginBottom: '5%' }}>
					<NoticeboardMovie
						type={type as NoticeboardTypes}
						title={title}
						subtitle={subtitle}
						genres={genre}
						desc={desc}
						imageUrl={imageUrl}
						releaseDate={releaseDate}
						length={length}
						rating={rating as Ratings}
						imdbRating={imdbRating}
					/>
				</Output>
				<Snackbar open={alertOpen} onClose={closeAlert} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
					<Alert elevation={6} onClose={closeAlert} variant="filled" severity="error">
						{errorMessage}
					</Alert>
				</Snackbar>
			</Grid>
		</NoticeboardContainer>
	);
};
