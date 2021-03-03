import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return(
			<header>
				<h1> Pokedex </h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</nav>
			</header>
		)
	}
}

export default Header;