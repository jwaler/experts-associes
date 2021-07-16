import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

export default class Field extends React.Component {
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
        <Container>
          <Row>
            <Col><Card>Baux immobiliers</Card></Col>
            <Col><Card>Baux immobiliers</Card></Col>
            <Col><Card>Baux immobiliers</Card></Col>
            <Col><Card>Baux immobiliers</Card></Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}