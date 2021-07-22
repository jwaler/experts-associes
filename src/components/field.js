import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commerciaux: false,
      habitation: false,
      atypiques: false,
      terrains: false
    }
    this.handleCards = this.handleCards.bind(this);
  }
  componentDidMount() {
    this.setState({
      commerciaux: false,
      habitation: false,
      atypiques: false,
      terrains: false
    });
  }

  handleCards(e) {    
    console.log(e.target.id)
    this.setState(prevState => ({ commerciaux: !prevState.commerciaux }));
    console.log(this.state.commerciaux)
  }
  render() {
    return (
      <div>
        <Container>
          <Row className="space-between-row">
              <Col>
                <ScrollAnimation animateIn="animate__fadeInLeft">
                  <Card className="activity-card" onClick={this.handleCards}><h4>Locaux Commerciaux</h4></Card>
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
          <Row className="space-between-row" style={{height:"300px"}}>
            
          </Row>
          
        </Container>
      </div>
    );
  }
}