import React from 'react';
import { render } from 'react-dom';

const ImageDump: React.FC = () => {
	return (
		<>
			<img src={require('./media/random/iPhone X - Silver.png')} />
			<img src={require('./media/random/TwitterNavBar.png')} />
		</>
	);
};

render(<ImageDump />, document.getElementById('image-dump'));
