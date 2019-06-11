import React, {Component} from 'react';
import filter from 'lodash/filter'
import './portfolio.scss'
import {Container, Row,} from "reactstrap";
import Filter from "./Filter";
import ItemCard from "./ItemCard";
import * as PropTypes from "prop-types";

const myWork = {
	items: [
		{
			"id": 0,
			"title": "Финист – ясный сокол",
			"author": "Андрей Рубанов",
			"image":
				"https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/40733121-andrey-rubanov-finist-yasnyy-sokol.jpg",
			"price": 710,
			"rating": 'react'
		},
		{
			"id": 1,
			"title": "1984",
			"author": "Джордж Оруэлл",
			"image":
				"https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/129098--.jpg",
			"price": 415,
			"rating": 'css'
		},
		{
			"id": 5,
			"title": "Девушка в тумане",
			"author": "Донато Карризи",
			"image":
				"https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/27066425-donato-karrizi-devushka-v-tumane.jpg",
			"price": 464,
			"rating": 'css'
		},
	],

};

const searchItems = (items, filterBy) => {
	return sortBy(items, filterBy)
};

const sortBy = (items, filterBy) => {
	switch (filterBy) {
		case 'react':
			return filter(items, {'rating': 'react'});
		case 'css':
			return filter(items, {'rating': 'css'});
		default:
			return items
	}
};

class SetWork extends Component {
	render() {
		const {items, filterBy, searchItems} = this.props;
		const myWork = searchItems( items, filterBy);
		return (
			myWork.map((item, ) => (
				<ItemCard key={item.id} {...item} filterBy={filterBy}/>
			))
		);
	}}

		class Portfolio extends Component {
			state = {
				filterBy: 'all',
			};

			onChangeHandler = (e) => {
				this.setState({filterBy: e})
			};

			render() {
				const {items} = myWork;
				const {filterBy} = this.state;

				return (
					<div id="portfolio" className="portfolio">
						<Container>
							<div className="heading heading--center">Мои работы</div>
							<Filter filterBy={filterBy} searchItems={this.onChangeHandler}/>
							<Row>
								{
									<SetWork items={items} filterBy={filterBy} searchItems={searchItems}/>
								}
							</Row>
						</Container>
					</div>
				);
			}
		}

		export default Portfolio;