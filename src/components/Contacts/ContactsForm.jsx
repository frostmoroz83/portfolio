import React, {Component} from 'react';
import {Col, Row,} from "reactstrap";
import {Form, FormGroup, Input,} from "reactstrap";
import axios from 'axios';

class ContactsForm extends Component {
	state = {
		name: [],
		email: [],
		skype: [],
		tel: [],
		mess: []
	}
	handleChange = event => {
		for (var key in this.state) {
			if(key === event.target.id){
				this.setState({[key]: event.target.value});
			}
		}
	}

	cancelCourse = () => {
		let form = document.getElementById("contact-form");
		let mes = document.getElementById("messege");
		form.reset();
		form.style.display = "none";
		mes.innerText = `Спасибо ${this.state.name} за ваше сообщение!`;

	}

	handleSubmit = event => {
		event.preventDefault();
		this.cancelCourse();

		const user = {
			name: this.state.name,
			email: this.state.email,
			skype: this.state.skype,
			tel: this.state.tel,
			mess: this.state.mess,
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
						<Input type="email" name="email" id="email" onChange={this.handleChange} placeholder="Email"/>
					</FormGroup>
					<Row form>
						<Col>
							<FormGroup>
								<Input type="text" name="skype" id="skype" onChange={this.handleChange} placeholder="Skype"/>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Input type="text" name="tel" id="tel" onChange={this.handleChange} placeholder="Телефон"/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Input type="textarea" name="mess" id="mess" onChange={this.handleChange} placeholder="Ваше сообщение"/>
					</FormGroup>
					<Input type="submit" value="Отправить"/>

				</Form>

			</Col>
		);
	}
}

export default ContactsForm;