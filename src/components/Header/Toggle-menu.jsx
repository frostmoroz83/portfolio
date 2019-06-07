import React, {Component} from 'react';

class ToggleMenu extends Component {



	handleClick = (e) => {
		const btn = e.currentTarget;
		 (btn["classList"].contains('close'))? this.props.handleOpen(true): this.props.handleOpen(false);
	};

	render() {
		 const { status } = this.props;
		// console.log(handleOpen);
		return (
			<>
				<button id="toggle"
								className={status === true ? "open": "close"}
								onClick={this.handleClick}>
					<span>

					</span>
				</button>
			</>
		);
	}
}

export default ToggleMenu;