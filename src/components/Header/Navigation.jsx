import React, {Component} from 'react';
import ToggleMenu from "./Toggle-menu";

const MenuComponent =({status, handleOpen}) => (
	<ul className={status ? "navigation__list open" : "navigation__list false"}>
		<li><a href="#resume" onClick={()=>status? handleOpen(false):''}>Резюме</a></li>
		<li><a href="#portfolio" onClick={()=>status? handleOpen(false):''}>Портфолио</a></li>
		<li><a href="#contacts" onClick={()=>status? handleOpen(false):''}>Контакты</a></li>
	</ul>
);

class Navigation extends Component {
	state = {
		active: false,
	};

	handleOpen = (status) => {
		if (status){
			this.setState({active: true})
		} else if (!status) {
			this.setState({active: false})
		}
	};

	render() {
		const  status  = this.state.active;
		return (

			<nav className="navigation">
				<ToggleMenu handleOpen={this.handleOpen}
										status={status}
				/>
				<MenuComponent status={status}
											 handleOpen={this.handleOpen}
				/>
			</nav>
		);
	}
}

export default Navigation;