import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import * as Page from './pages';

const Homepage: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={["/", "/index.html"]}>
					<Page.Homepage />
				</Route>
				<Route path="/contact">
					<Page.Contact />
				</Route>
				<Route path="/alivevr">
					<Page.AliveVR />
				</Route>
				<Route path="/3d-art">
					<Page.Art />
				</Route>
			</Switch>
		</Router>
	);
};

render(<Homepage />, document.getElementById('landing-page'));
