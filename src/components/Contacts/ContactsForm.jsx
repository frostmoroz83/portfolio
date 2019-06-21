import React, {Component} from 'react';
import {Col, Row,} from "reactstrap";
import {Form, FormGroup, Input,} from "reactstrap";
import axios from 'axios';

class ContactsForm extends Component {
	state = {
		name: []
	}
	handleChange = event => {
		this.setState({name: event.target.value});
	}

	cancelCourse = () => {
		document.getElementById("contact-form").reset();
		document.getElementById("messege").innerHTML = 'новое значение';

	}

	handleSubmit = event => {
		event.preventDefault();
		this.cancelCourse();



		const user = {
			name: this.state.name
		};
		const options = {
			method: 'POST',
			headers: {'content-type': 'application/json'},
			data: user,
			url: 'testmail.php',
		};
		axios(options)
			.then(res => {
				console.log(res.data);
			})
	}

	render() {
		return (
			<Col md="6">
				<div id="messege" className="heading heading--medium heading--padding-top heading--white">
					Связаться со мной
				</div>
				<Form id="contact-form" onSubmit={this.handleSubmit}>
					<FormGroup>
						<Input type="text" name="name" id="name" onChange={this.handleChange} placeholder="Имя"/>
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
					<Input type="submit" value="Отправить"/>

				</Form>

			</Col>
		);
	}
}

export default ContactsForm;