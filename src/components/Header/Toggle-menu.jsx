import React, {Component} from 'react';

class ToggleMenu extends Component {



	handleClick = (e) => {
		console.log(e.currentTarget);
		const btn = e.currentTarget;
		if (btn.classList.contains('close')) {
			btn.classList.remove('close');
			btn.classList.add('open');
			this.props.handleOpen(true);

		} else {
			btn.classList.remove('open');
			btn.classList.add('close');
			this.props.handleOpen(false);
		}
	};

	render() {
		// const { handleOpen } = this.props;
		// console.log(handleOpen);
		return (
			<div>
				<button id="btn" className="close" onClick={this.handleClick}>
				</button>
			</div>
		);
	}
}

export default ToggleMenu;