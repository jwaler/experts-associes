import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class Activity extends React.Component {
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
          <Row className="space-between-row">
              <Col>
                <ScrollAnimation animateIn="animate__fadeInLeft">
                  <Card className="activity-card">Baux immobiliers</Card>
                </ScrollAnimation>
              </Col>
              <Col>
                <ScrollAnimation animateIn="animate__fadeInRight">
                  <Card className="activity-card">Baux immobiliers</Card>
                </ScrollAnimation>
              </Col>
          </Row>
          <Row className="space-between-row">
              <Col>
                <ScrollAnimation animateIn="animate__fadeInLeft">
                  <Card className="activity-card">Baux immobiliers</Card>
                </ScrollAnimation>
              </Col>
              <Col>
                <ScrollAnimation animateIn="animate__fadeInRight">
                  <Card className="activity-card">Baux immobiliers</Card>
                </ScrollAnimation>
              </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}