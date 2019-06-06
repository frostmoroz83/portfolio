import React from 'react';
import ToggleMenu from "./Toggle-menu";

const Navigation = () => {
	return (
		<nav className="navigation">
			{/*<ToggleMenu/>*/}
			<ul className="navigation__list">
				<li><a href="/">Резюме</a></li>
				<li><a href="/">Портфолио</a></li>
				<li><a href="/">Контакты</a></li>
			</ul>
		</nav>
	);
};

export default Navigation;