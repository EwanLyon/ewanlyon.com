import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import * as Page from './pages';
import { Rooftop } from './rivoli/rooftop';

const Homepage: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Page.Homepage />} />
				<Route path="/contact" element={<Page.Contact />} />
				<Route path="/alivevr" element={<Page.AliveVR />} />
				<Route path="/3d-art" element={<Page.Art />} />
				<Route path="/games" element={<Page.Games />} />
				<Route path="/riv" element={<Rooftop />} />
			</Routes>
		</Router>
	);
};

createRoot(document.getElementById('landing-page')!).render(<Homepage />, );
