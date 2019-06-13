import React, {Component} from 'react';
import {CardImg, CardBody, Col, CardTitle, CardText} from "reactstrap";

class ItemCard extends Component {

	render() {
		const {title, image, author, } = this.props;
		return (
			<Col md="4" >
				<div className="portfolio-item">
					<CardImg top width="100%" src={image}/>
					<CardBody>
						<CardTitle>
							{title}
						</CardTitle>
						<CardText>
							{author}
						</CardText>
					</CardBody>
				</div>
			</Col>
		);
	}
}

export default ItemCard;