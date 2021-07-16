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
          <Row>
            <ScrollAnimation animateIn="animate__fadeIn" duration={2}>
              <div>
                <p>
                Les types d’estimations sont variés : valeurs locatives, valeurs vénales de murs, droits au bail, fonds de commerces, indemnités d’éviction ou de résiliation anticipée du bail ainsi que réparation de tous troubles de jouissance, pour tous types de biens immobiliers qu’ils soient commerciaux ou d’habitation.
                </p>
                <p>Les méthodes d’évaluation sont celles préconisées par la charte de l’expertise en évaluation immobilière (ratifiée par 15 entités et organisations professionnelles) et par la RICS (Royal Institution of Chartered Surveyors).</p>
              </div>
            </ScrollAnimation>
            
          </Row>
          
        </Container>
        
      </div>
    );
  }
}