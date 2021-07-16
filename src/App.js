import './App.css';
import React from 'react';
// Components
import Menu from './components/menu';
import Footer from './components/footer';
import CarouselComp from './components/carousel';
import TeamIntro from './components/team';
import Activity from './components/activity';
import Field from './components/field';
import Consent from './components/consent';
// scroll animation
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
// ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div className="body-container">
        <div className="menu-container">
          <Menu></Menu>
        </div>
        <div className="content-container">
          <div className="menu-one-container" id="accueil">
            <ScrollAnimation initiallyVisible={true}><CarouselComp></CarouselComp></ScrollAnimation>
          </div>
          {/* ACTIVITE */}
          <div className="menu-two-container" id='activite'>
            <div className="section-title">
            {/* <ScrollAnimation animateIn="animate__fadeInDown"></ScrollAnimation> */}
            <ScrollAnimation animateIn="animate__fadeInDown"><h1>Notre Activité</h1></ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="animate__fadeIn"><Activity></Activity></ScrollAnimation>
            <div style={{height:"600px"}}></div>
          </div>
          {/* EQUIPE */}
          <div className="menu-three-container" id="equipe">
            <div className="section-title">
              <ScrollAnimation animateIn="animate__fadeInDown"><h1>Notre Équipe</h1></ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="animate__fadeIn"><TeamIntro></TeamIntro></ScrollAnimation>
            <div style={{height:"300px"}}></div>
          </div>
          {/* DOMAINES */}
          <div className="menu-four-container" id="domaines">
            <div className="section-title">
              <ScrollAnimation animateIn="animate__fadeInDown"><h1>Domaines d'Intervention</h1></ScrollAnimation>
            </div>
            
            <ScrollAnimation animateIn="animate__fadeIn"><Field></Field></ScrollAnimation>
            <div style={{height:"600px"}}></div>
          </div>
          {/* CLIENTS */}
          <div className="menu-five-container" id="clients">
            <div className="section-title">
              <ScrollAnimation animateIn="animate__fadeInDown"><h1>Nos Clients</h1></ScrollAnimation>
            </div>
            <div style={{height:"600px"}}></div>
            <ScrollAnimation animateIn="animate__fadeIn"></ScrollAnimation>
          </div>
          {/* PUBLI  */}
          <div className="menu-six-container" id="publications">
            <div className="section-title">
              <ScrollAnimation animateIn="animate__fadeInDown"><h1>Publications</h1></ScrollAnimation>
            </div>
            <div style={{height:"600px"}}></div>
            <ScrollAnimation animateIn="animate__fadeIn"></ScrollAnimation>
          </div>
        </div>
        <div className="footer-container" id="contact">
        <ScrollAnimation animateIn="animate__fadeIn"><Footer></Footer></ScrollAnimation>
          
        </div>
        <Consent></Consent>
      </div>
    );
  }
}
