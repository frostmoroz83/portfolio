import React from 'react';
import photo from '../../img/photo.jpg'

const HeaderCentered = () => {
	return (
		<div className="header__centered-content">
			<div className="user-photo user-photo--shadow">
				<img src={photo} alt=""/>
			</div>

			<h1 className="header__title">Александрh</h1>
			<h2 className="header__subtitle">HTML</h2>

		</div>
	);
};

export default HeaderCentered;