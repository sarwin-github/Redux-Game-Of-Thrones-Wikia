import React from 'react';
import { Router, Route } from 'react-router';

import App from '../App';
import Character from '.././pages/character-page';
import Houses from '.././pages/houses-page';
import Home from '.././pages/home-page';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={App}></Route>
			<Route path="/home" component={Home} />
			<Route path="/houses" component={Houses} />
			<Route path="/character" component={Character} />
		
	</Router>
);

export default Routes;