import React from 'react';
import { render } from 'react-dom';

import { Noticeboard } from './rivoli/noticeboard';

const Rivoli: React.FC = () => {
	return (
		<Noticeboard/>
	);
};

render(<Rivoli />, document.getElementById('rivoli'));
