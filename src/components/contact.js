import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import contactimg from '../static/img/contact.jpg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      var: "",
      hidden: false,
    }
  }
  componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <div>
        <div className="form-frame">
          <Container>
            <Row sm={8}>
              <Col className='side-col-img'><img className='side-img' src={contactimg} alt={contactimg}></img></Col>
              <Col className="input-area">
                <p><input type="input" className="input-contact-info-name" placeholder="Votre nom et prénom"></input></p>
                <p><input type="input" className="input-contact-info-email" placeholder="Votre email"></input></p>
                <p><select type="input" className="input-contact-info-reqtype">
                    <option className="option">Demande de devis</option>
                    <option className="option">Demande d'informations</option>
                    <option className="option">Option 3</option>
                  </select>
                </p>
                <p><textarea type="input" className="input-contact-info-content" placeholder="Votre demande"></textarea></p>
                <p><button type="submit" className="send-button">Envoyer</button></p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}