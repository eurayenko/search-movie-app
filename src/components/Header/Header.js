import React from 'react';
import clasess from './header.module.css';

function Header() {
	return (
		<header>
			<div className={clasess.wrapper}>
				<div className={clasess.logo}>
					<a href="#"></a>
				</div>
				<h1>Movie Search App</h1>
			</div>
		</header>
	);
}

export default Header;
