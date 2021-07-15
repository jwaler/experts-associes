import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
            <Col sm={1}>LOGO</Col>
            <Col sm={6}>
              <p># Information 1</p>
              <p># Information 1</p>
              <p># Information 1</p>
              <p># Information 1</p>
            </Col>
            <Col sm={3}>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            </Col>
          </Row>
          </Container>
          <div className="footer-bottom">
            Copyright @ 2021
          </div>
      </div>
    );
  }
}