import React, {Component} from 'react';
import {ButtonGroup, Button, Nav, NavLink} from "reactstrap";

class Filter extends Component  {
	render() {
		const {filterBy, searchItems} = this.props;
		return (
			<Nav className="nav-pills flex-column flex-sm-row justify-content-center">
				<NavLink className="flex-sm-fill text-center nav-link"
					active={filterBy === 'all'}
					onClick={searchItems.bind( this,'all')}>
					Все
				</NavLink>
				<NavLink className="flex-sm-fill text-center nav-link"
					active={filterBy === 'react'}
					onClick={searchItems.bind(this, 'react')}>
					React
				</NavLink>
				<NavLink className="flex-sm-fill text-center nav-link"
					active={filterBy === 'css'}
					onClick={searchItems.bind(this, 'css')}>
					CSS
				</NavLink>
			</Nav>
		);
	}
}

export default Filter;