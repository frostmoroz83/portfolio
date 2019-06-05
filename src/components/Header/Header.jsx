import React from 'react';
import './header.scss';
import Navigation from "./Navigation";
import HeaderCentered from "./Header-centered";
import MouseScroll from "./Mouse-scroll";

const Header = () => {
	return (
		<header>
			<div className="header__inner">
				<Navigation/>
				<HeaderCentered/>
				<MouseScroll/>
			</div>
		</header>
	);
};

export default Header;