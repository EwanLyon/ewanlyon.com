import React from 'react';
import { render } from 'react-dom';

import { Rooftop } from './rivoli/rooftop';

const Rivoli: React.FC = () => {
	return (
		<Rooftop/>
	);
};

render(<Rivoli />, document.getElementById('rivoli'));
