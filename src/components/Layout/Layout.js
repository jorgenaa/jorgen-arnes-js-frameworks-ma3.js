import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import Home from '../Views/Home/Home';
import News from '../Views/News/News';
import Login from '../Views/Login/Login';

const Layout = () => {
	return (
		<Router>
			<div className="router">
				<nav className="router__nav">
					<NavLink className="router__link router__link--hover" activeClassName="router__link--active" to="/" exact={true}>
						Home
					</NavLink>
					<NavLink className="router__link router__link--hover" activeClassName="router__link--active" to="/News/">
						News
					</NavLink>
					<NavLink className="router__link router__link--hover" activeClassName="router__link--active" to="/Login/">
						Login
					</NavLink>
				</nav>
			</div>

			<div>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/News" component={News} />
					<Route path="/Login" component={Login} />
				</Switch>
			</div>
		</Router>
	);
};

export default Layout;
