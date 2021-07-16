import './App.css';
import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import CarouselComp from './components/carousel';
import TeamIntro from './components/team';
import Activity from './components/activity';
import Field from './components/field';
import Consent from './components/consent';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

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
      <div className="body-container">
        <div className="menu-container">
          <Menu></Menu>
        </div>
        <div className="content-container">
          <div className="menu-one-container">
            <ScrollAnimation animateIn="animate__fadeIn"><CarouselComp></CarouselComp></ScrollAnimation>
          </div>
          {/* ACTIVITE */}
          <div className="menu-two-container">
            <div className="section-title">
            {/* <ScrollAnimation animateIn="animate__fadeInDown"></ScrollAnimation> */}
             <ScrollAnimation animateIn="animate__fadeInDown"><h1>Notre Activité</h1></ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="animate__fadeIn"><Activity></Activity></ScrollAnimation>
          </div>
          {/* EQUIPE */}
          <div className="menu-three-container">
            <div className="section-title">
              <ScrollAnimation animateIn="animate__fadeInDown"><h1>Notre Équipe</h1></ScrollAnimation>
              
            </div>
            <ScrollAnimation animateIn="animate__fadeIn"><TeamIntro></TeamIntro></ScrollAnimation>
            
          </div>
          {/* DOMAINES */}
          <div className="menu-four-container">
            <div className="section-title">
              <ScrollAnimation animateIn="animate__fadeInDown"><h1>Domaines d'Intervention</h1></ScrollAnimation>
              
            </div>
            <ScrollAnimation animateIn="animate__fadeIn"><Field></Field></ScrollAnimation>
            
          </div>
          {/* CLIENTS */}
          <div className="menu-five-container">
            <div className="section-title">
              <ScrollAnimation animateIn="animate__fadeInDown"><h1>Nos Clients</h1></ScrollAnimation>
              
            </div>
            <ScrollAnimation animateIn="animate__fadeIn"></ScrollAnimation>
          </div>
          {/* PUBLI  */}
          <div className="menu-six-container">
            <div className="section-title">
              <ScrollAnimation animateIn="animate__fadeInDown"><h1>Publications</h1></ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="animate__fadeIn"></ScrollAnimation>
          </div>
        </div>
        <div className="footer-container">
        <ScrollAnimation animateIn="animate__fadeIn"><Footer></Footer></ScrollAnimation>
          
        </div>
        <Consent></Consent>
      </div>
    );
  }
}
