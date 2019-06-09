import React, {Component} from 'react';
import ToggleMenu from "./Toggle-menu";

const MenuComponent =({status, handleOpen}) => (
	<ul className={status ? "navigation__list open" : "navigation__list false"}>
		<li><a href="#resume" onClick={()=>status? handleOpen(false):''}>Резюме</a></li>
		<li><a href="#footer" onClick={()=>status? handleOpen(false):''}>Портфолио</a></li>
		<li><a href="#footer" onClick={()=>status? handleOpen(false):''}>Контакты</a></li>
	</ul>
);

class Navigation extends Component {
	state = {
		active: false,
	};

	handleOpen = (status) => {
		console.log(status);
		// return (status) ? this.setState({active: true}) : (!status) ? this.setState({active: false}) : '';
		if (status){
			this.setState({active: true})
		} else if (!status) {
			this.setState({active: false})
		}
	};

	render() {
		const  status  = this.state.active;
		console.log(status);
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