import React, {Component} from 'react';
import {ButtonGroup, Button} from "reactstrap";

class Filter extends Component  {
	render() {
		const {filterBy, searchItems} = this.props;
		return (
			<ButtonGroup>
				<Button
					active={filterBy === 'all'}
					onClick={searchItems.bind( this,'all')}>
					Все
				</Button>
				<Button
					active={filterBy === 'react'}
					onClick={searchItems.bind(this, 'react')}>
					React
				</Button>
				<Button
					active={filterBy === 'css'}
					onClick={searchItems.bind(this, 'css')}>
					CSS
				</Button>
			</ButtonGroup>
		);
	}
}

export default Filter;