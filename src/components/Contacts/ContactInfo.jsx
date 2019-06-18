import React from 'react';
import {Col, Row} from "reactstrap";


const ContactInfo = () => {
	return (
		<Col md="6">
			<div className="heading heading--white">
				Контакты
			</div>

			<div className="contacts__description">
				<p>Если вы ищете специалиста по верстке сайтов, front-end разработчика в команду или для работы над
					проектом — я к вашим услугам.</p>
			</div>
			<Row>
				<Col lg="6">
					<ul className="definition-list">
						<li className="definition-list__item">
							<div className="definition-list__def definition-list__def--light definition-list__def--bigger">
								Email
							</div>
							<div className="definition-list__desc">
								<p><a href="mailto:irina@proect.ru">
									moroz@proect.ru
								</a>
								</p>
							</div>
						</li>
						<li className="definition-list__item">
							<div className="definition-list__def definition-list__def--light definition-list__def--bigger">
								Skype
							</div>
							<div className="definition-list__desc">
								<p><a href="skype:irina.proekt?chat">
									moroz.proekt
								</a>
								</p>
							</div>
						</li>
					</ul>

				</Col>
				<Col lg="6">
					<ul className="definition-list">
						<li className="definition-list__item">
							<div className="definition-list__def definition-list__def--light definition-list__def--bigger">
								Телефон
							</div>
							<div className="definition-list__desc">
								<p><a href="tel:+7-927-838-91-58">
									+7-927-838-91-58</a>
								</p>
							</div>
						</li>
						<li className="definition-list__item">
							<div className="definition-list__def definition-list__def--light definition-list__def--bigger">
								Адрес
							</div>
							<div className="definition-list__desc">
								<p>
									Интернет, всегда на месте
								</p>
							</div>
						</li>
					</ul>

				</Col>
			</Row>
			<ul className="definition-list">
				<li className="definition-list__item">
					<div className="definition-list__def definition-list__def--light definition-list__def--bigger">
						Социальные сети
					</div>
					<div className="definition-list__desc">
						<div className="social-icons">

							{/* eslint-disable-next-line react/jsx-no-target-blank */}
							<a href="https://vk.com/frost83" target="_blank" className="fa fa-vk" aria-hidden="true">
								<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="vk"
										 className="svg-inline--fa fa-vk fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
										 viewBox="0 0 576 512">
									<path fill="currentColor"
												d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"/>
								</svg>
							</a>
							{/*<a href="https://www.youtube.com/channel/UCNNpraPZrcmboDM7sKX1L2Q?view_as=subscriber"*/}
							{/*	 target="_blank" className="fa fa-youtube" aria-hidden="true">*/}
							{/*	<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube"*/}
							{/*			 className="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"*/}
							{/*			 viewBox="0 0 576 512">*/}
							{/*		<path fill="currentColor"*/}
							{/*					d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>*/}
							{/*	</svg>*/}
							{/*</a>*/}
							{/* eslint-disable-next-line react/jsx-no-target-blank */}
							<a href="https://www.facebook.com/profile.php?id=100015169508249" target="_blank"
								 className="fa fa-facebook" aria-hidden="true">
								<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
										 className="svg-inline--fa fa-facebook-f fa-w-10" role="img"
										 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
									<path fill="currentColor"
												d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
								</svg>
							</a>
							{/* eslint-disable-next-line react/jsx-no-target-blank */}
							<a href="https://github.com/frostmoroz83" target="_blank" className="fa fa-github"
								 aria-hidden="true">
								<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
										 className="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
										 viewBox="0 0 496 512">
									<path fill="currentColor"
												d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
								</svg>
							</a>
						</div>
					</div>
				</li>
			</ul>

		</Col>
	);
};

export default ContactInfo;