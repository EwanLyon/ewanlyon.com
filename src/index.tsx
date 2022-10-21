import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import * as Page from './pages';

const Homepage: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Page.Homepage />} />
				<Route path="/contact" element={<Page.Contact />} />
				<Route path="/alivevr" element={<Page.AliveVR />} />
				<Route path="/3d-art" element={<Page.Art />} />
				<Route path="/games" element={<Page.Games />} />
			</Routes>
		</Router>
	);
};

createRoot(document.getElementById('landing-page')!).render(<Homepage />, );
