import React from 'react';
import './resume.scss'
import {Container, Row, Button} from 'reactstrap';

import photo from '../../img/photo.jpg'

const Resume = () => {
	return (
		<section id="resume" className="resume">
			<Container>
				<Row>
					<div className="d-none d-sm-block col-3">
						<div className="user-photo user-photo--big">
							<img src={photo} alt=""/>
						</div>
					</div>
					<div className="col-9">
						<div className="heading">
							Резюме
						</div>
						<p>
							<strong>Александр Морозов</strong></p>
						<p> Здравствуйте! Я начинающий фронтенд-разработчик.
						</p>
						<p>
							Я очень люблю учиться и работать. Выполняю свои обязанности точно и в срок. Буду очень рада сотрудничеству
							с вами!
						</p>
						<Row>
							<div className="col-sm-6">
								<div className="heading heading--medium">
									Опыт работы
								</div>

								<ul className="definition-list">
									<li className="definition-list__item">
										<div className="definition-list__def">
											Сентябрь 2011 - по настоящее время
										</div>
										<div className="definition-list__desc">
											<p>
												Системный администратор, группа компаний DARS.
											</p>
										</div>
									</li>
									{/*<li className="definition-list__item">*/}
									{/*    <div className="definition-list__def">*/}
									{/*        Ульяновск, 2017*/}
									{/*    </div>*/}
									{/*    <div className="definition-list__desc">*/}
									{/*        <p>*/}
									{/*            Инженер по тестированию, Quality Lab.*/}
									{/*        </p>*/}
									{/*    </div>*/}
									{/*</li>*/}
									{/*<li className="definition-list__item">*/}
									{/*    <div className="definition-list__def">*/}
									{/*        Санкт-Петербург, 2008–2016*/}
									{/*    </div>*/}
									{/*    <div className="definition-list__desc">*/}
									{/*        <p>*/}
									{/*            Директор по развитию, РOО "Северный Шаолинь".*/}
									{/*        </p>*/}
									{/*    </div>*/}
									{/*</li>*/}
								</ul>

							</div>
							<div className="col-sm-6">
								<div className="heading heading--medium">
									Образование
								</div>

								<ul className="definition-list">
									<li className="definition-list__item">
										<div className="definition-list__def">
											2018 - 2019
										</div>
										<div className="definition-list__desc">
											<p>
												Курсы по основам программирования <a href="https://ru.hexlet.io/u/frost83"
																														 target="_blank" rel="noopener noreferrer">hexlet</a>
											</p>
											<p>
												Курсы по верстке сайтов HTML, CSS - Webcademy.ru
											</p>
										</div>
									</li>
									<li className="definition-list__item">
										<div className="definition-list__def">
											2010 - 2016, Ульяновск
										</div>
										<div className="definition-list__desc">
											<p>
												УЛГТУ, ФИСТ.
											</p>
										</div>
									</li>
								</ul>

							</div>
						</Row>
						{/*Опыт и оброзование*/}
						<Button href='/resume.pdf' outline color="primary" target='_blank' download>
							Скачать резюме
						</Button>{' '}
					</div>
				</Row>
			</Container>
		</section>
	);
};

export default Resume;