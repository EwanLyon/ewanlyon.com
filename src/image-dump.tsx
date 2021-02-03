import React from 'react';
import { render } from 'react-dom';

const ImageDump: React.FC = () => {
	return (
		<img src={require('./media/random/iPhone X - Silver.png')}/>
	);
};

render(<ImageDump />, document.getElementById('image-dump'));
