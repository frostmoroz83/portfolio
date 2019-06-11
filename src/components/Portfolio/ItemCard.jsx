import React from 'react';
import {CardImg, CardBody, Col} from "reactstrap";
import {CardTitle, CardText } from "reactstrap";

const ItemCard = (item) => {
	console.log(item);
	const { title, image, author } = item;
	return (
		<Col md="4">
			<CardImg top width="100%" src={image}/>
			<CardBody>
				<CardTitle>
					{title}
				</CardTitle>
				<CardText>
					{author}
				</CardText>
			</CardBody>
		</Col>
	);
};

export default ItemCard;