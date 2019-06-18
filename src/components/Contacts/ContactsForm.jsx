import React, {Component} from 'react';
import {Col, Row,} from "reactstrap";
import {Button, Form, FormGroup, Label, Input, FormText} from "reactstrap";

class ContactsForm extends Component {
	render() {
		return (
			<Col md="6">
				<div className="heading heading--medium heading--padding-top heading--white">
					Связаться со мной
				</div>
				<Form id="contact-form">
					<input type="hidden" name="project_name" value="Portfolio website"/>
					<input type="hidden" name="form_from" value="133@proect.ru"/>
					<input type="hidden" name="admin_email" value="123@inbox.ru"/>
					<input type="hidden" name="form_subject" value="Message from website"/>

					<FormGroup>
						<Input type="text" name="name" id="name" placeholder="Имя"/>
					</FormGroup>
					<FormGroup>
						<Input type="email" name="email" id="email" placeholder="Email"/>
					</FormGroup>
					<Row form>
						<Col>
							<FormGroup>
								<Input type="text" name="skype" id="skype" placeholder="Skype"/>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Input type="text" name="tel" id="tel" placeholder="Телефон"/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Input type="textarea" name="textarea" id="textarea" placeholder="Ваше сообщение"/>
					</FormGroup>
					<Input type="submit" />

				</Form>

			</Col>
		);
	}
}

export default ContactsForm;