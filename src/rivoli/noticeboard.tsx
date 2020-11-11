import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';

import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Button } from '@material-ui/core';

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
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [genre, setGenre] = useState('');
	const [desc, setDesc] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [releaseDate, setReleaseDate] = useState('');
	const [length, setLength] = useState('');
	const [rating, setRating] = useState('M');
	const [imdbRating, setIMDbRating] = useState('');
	const outputRef = useRef<HTMLDivElement>(null);

	const copyOutputAsImage = () => {
		if (outputRef.current) {
			html2canvas(outputRef.current, { allowTaint: true, useCORS: true, scrollY: -window.scrollY }).then((canvas) => {
				canvas.toBlob((blob) => {
					const clipboardImage = new ClipboardItem({ 'image/png': blob });
					navigator.clipboard.write([clipboardImage]);
				});
			});
		}
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
					Copy as image (really broken right now)
				</Button>
				<span style={{ marginBottom: '1rem', fontWeight: 'lighter', color: '#888' }}>
					Press SHIFT + Windows Key + S and drag over the image, then copy and paste into a word document
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
			</Grid>
		</NoticeboardContainer>
	);
};
