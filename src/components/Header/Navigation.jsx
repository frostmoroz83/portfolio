import React, {Component} from 'react';
import ToggleMenu from "./Toggle-menu";

const MenuComponent =() => (
	<ul className="navigation__list">
		<li><a href="/">Резюме</a></li>
		<li><a href="/">Портфолио</a></li>
		<li><a href="/">Контакты</a></li>
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
				<ToggleMenu handleOpen={this.handleOpen}/>
				{
					!status ?
						<MenuComponent/> :
						<div>
							123123
						</div>
				}
			</nav>
		);
	}
}

export default Navigation;