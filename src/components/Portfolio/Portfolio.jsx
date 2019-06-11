import React, {Component} from 'react';

import './portfolio.scss'
import {Container, Row, } from "reactstrap";
import Filter from "./Filter";
import ItemCard from "./ItemCard";



class Portfolio extends Component {
	 state = {
		items: [
			{
				"id": 0,
				"title": "Финист – ясный сокол",
				"author": "Андрей Рубанов",
				"image":
					"https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/40733121-andrey-rubanov-finist-yasnyy-sokol.jpg",
				"price": 710,
				"rating": 1
			},
			{
				"id": 1,
				"title": "1984",
				"author": "Джордж Оруэлл",
				"image":
					"https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/129098--.jpg",
				"price": 415,
				"rating": 3
			},
			{
				"id": 2,
				"title": "Девушка в тумане",
				"author": "Донато Карризи",
				"image":
					"https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/27066425-donato-karrizi-devushka-v-tumane.jpg",
				"price": 464,
				"rating": 3
			},
		]
	};

	render() {
		const { items } = this.state;
		console.log(items);

		return (
			<div id="portfolio" className="portfolio">
				<Container>
					<div className="heading heading--center">Мои работы</div>
					<Filter/>
					<Row >
						{
							items.map((item, i) => (
								<ItemCard key={i} {...item}/>
							))
						}
					</Row>
				</Container>
			</div>
		);
	}
}

export default Portfolio;