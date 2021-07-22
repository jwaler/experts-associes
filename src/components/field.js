import React from 'react';
import { Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import field1 from '../static/img/bauxcom.png';
import field2 from '../static/img/field2.jpg';
import field3 from '../static/img/field3.jpg';
import field4 from '../static/img/field4.jpg';

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
        <Row className="row-field">
          <Col className="pic-div">
          <ScrollAnimation animateIn="animate__fadeInLeft"><div className="item-field"><span className="text-on-img">Locaux Commerciaux</span><img className="img-field" src={field1} alt={field1}></img></div>
          </ScrollAnimation>
          </Col>

          <Col className="pic-div">
          <ScrollAnimation animateIn="animate__fadeInLeft"><div className="item-field"><span className="text-on-img">Locaux d'habitation</span><img className="img-field" src={field2} alt={field2}></img></div>
          </ScrollAnimation>
          </Col>
          
          <Col className="pic-div">
          <ScrollAnimation animateIn="animate__fadeInRight"><div className="item-field"><span className="text-on-img">Locaux atypiques</span><img className="img-field" src={field3} alt={field3}></img></div>
          </ScrollAnimation>
          </Col>

          <Col className="pic-div">
          <ScrollAnimation animateIn="animate__fadeInRight"><div className="item-field"><span className="text-on-img">Terrains à construire</span><img className="img-field" src={field4} alt={field4}></img></div>
          </ScrollAnimation>
          </Col>
        </Row>
        <p></p>
      </div>
    );
  }
}