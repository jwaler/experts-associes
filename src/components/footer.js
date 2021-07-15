import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "../static/img/logo.png"

library.add(faFacebookF, faTwitter); 

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      var: 0,
    }
  }
  componentDidMount() {
    
  }
  componentWillUnmount() {
    
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={3}><img src={logo} alt={logo}></img></Col>
            <Col sm={3}>
              <p># Information 1</p>
              <p># Information 1</p>
              <p># Information 1</p>
              <p># Information 1</p>
            </Col>
            <Col sm={3}>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} style={{fontSize: "35px"}}/><br></br>
            <FontAwesomeIcon icon={['fab', 'twitter']} style={{fontSize: "35px"}}/>
            </Col>
          </Row>
          </Container>
          <div className="footer-bottom">
            <div>Copyright @ 2021</div>
            <div><a href="">Mentions légales</a></div>
            
          </div>
      </div>
    );
  }
}