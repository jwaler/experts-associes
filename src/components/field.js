import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loccom: true,
      var: 0
    }
    this.handleLocCom = this.handleLocCom.bind(this);
  }
  componentDidMount() {
    this.setState({loccom: true});
  }

  handleLocCom() {    
    this.setState(prevState => ({ loccom: !prevState.loccom }));
    console.log(this.state.loccom)
  }
  render() {
    return (
      <div>
        <Container>
          <Row className="space-between-row">
              <Col>
                <ScrollAnimation animateIn="animate__fadeInLeft">
                  <Card className="activity-card" onClick={this.handleLocCom}><h4>Locaux Commerciaux</h4></Card>
                </ScrollAnimation>
              </Col>
              <Col>
                <ScrollAnimation animateIn="animate__fadeInRight">
                  <Card className="activity-card"><h4>Locaux d'habitation</h4></Card>
                </ScrollAnimation>
              </Col>
          </Row>
          <Row className="space-between-row">
              <Col>
                <ScrollAnimation animateIn="animate__fadeInLeft">
                  <Card className="activity-card"><h4>Locaux atypiques</h4></Card>
                </ScrollAnimation>
              </Col>
              <Col>
                <ScrollAnimation animateIn="animate__fadeInRight">
                  <Card className="activity-card"><h4>Terrains et droits à construire</h4></Card>
                </ScrollAnimation>
              </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
}