import React from 'react';

const ratingImages = {
	G: require('./G.svg'),
	PG: require('./PG.svg'),
	M: require('./M.svg'),
	MA: require('./MA.svg'),
	R: require('./R.svg'),
	X: require('./X.svg'),
	Unknown: require('./CTC.svg'),
}

interface Props {
	rating: keyof typeof ratingImages;
	className?: string;
	style?: React.CSSProperties;
}

export const RatingImage: React.FC<Props> = (props: Props) => {
	return <img className={props.className} style={props.style} src={ratingImages[props.rating]} />;
};

export type Ratings = keyof typeof ratingImages;
