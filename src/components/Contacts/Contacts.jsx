import React, {Component} from 'react';

import './contacts.scss';
import { Container, Row,  } from "reactstrap";
import ContactInfo from "./ContactInfo";
import ContactsForm from "./ContactsForm";




class Contacts extends Component {
	render() {
		return (
			<div id="contacts" className="contacts">
				<Container>
					<Row>
						<ContactInfo/>
						<ContactsForm/>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Contacts;