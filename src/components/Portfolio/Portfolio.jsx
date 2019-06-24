import React, {Component} from 'react';
import filter from 'lodash/filter'
import './portfolio.scss'
import {Container, Row,} from "reactstrap";
import Filter from "./Filter";
import ItemCard from "./ItemCard";



const myWork = {
	items: [
		{
			"id": 0,
			"title": "Личный сайт портфолио",
			"author": "Верстка личного сайта портфолио, на котором вы сейчас находитесь.",
			"image":
				"/project_portfolio.jpg",
			"rating": 'react',
			"src": "http://portfolio-mv.zzz.com.ua/"
		},
		{
			"id": 1,
			"title": "Погодное приложение",
			"author": "Можно узнать погоду у вас в городе.",
			"image":
				"/weater.jpg",
			"rating": 'react',
			"src": "http://weather.a-mv.zzz.com.ua/"
		},
		{
			"id": 2,
			"title": "Магазин книг",
			"author": "Учебный проект, с возможностью заказа и сортировки книг.",
			"image":
				"http://proect.ru/usercontent/img/project_organica.jpg",
			"rating": 'react',
			"src": "https://react-book-c154f.web.app/"
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
		const myWork = searchItems(items, filterBy);
		return (
			myWork.map((item,) => (
				<ItemCard key={item.id} {...item} filterBy={filterBy}/>
			))
		);
	}
}

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