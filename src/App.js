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
import Contact from './components/contact';
// scroll animation
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
// ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// spinner loading
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  componentDidMount() {
    this.wait(2000);
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
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
    if (this.state.loading) {
      return (
      <div className="spinner">
        <Loader
              type="Rings"
              color="#26294b"
              height={80}
              width={80}
              timeout={3000}
            />
      </div>
    ) 
    }
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
            <h1>Notre Activité</h1>
            </div>
            <ScrollAnimation animateIn="animate__fadeIn"><Activity></Activity></ScrollAnimation>
          </div>
          {/* EQUIPE */}
          <div className="menu-three-container" id="equipe">
            <div className="section-title">
              <h1>Notre Équipe</h1>
            </div>
            <ScrollAnimation animateIn="animate__fadeIn" duration={2}><TeamIntro></TeamIntro></ScrollAnimation>
          </div>
          {/* DOMAINES */}
          <div className="menu-four-container" id="domaines">
            <div className="section-title">
              <h1>Domaines d'Intervention</h1>
            </div>
            
            <ScrollAnimation animateIn="animate__fadeIn"><Field></Field></ScrollAnimation>
          </div>
          {/* CLIENTS */}
          <div className="menu-five-container" id="clients">
            <div className="section-title">
              <h1>Nos Clients</h1>
            </div>
            <div style={{height:"600px"}}></div>
            <ScrollAnimation animateIn="animate__fadeIn"></ScrollAnimation>
          </div>
          {/* PUBLI  */}
          <div className="menu-six-container" id="publications">
            <div className="section-title">
              <h1>Publications</h1>
            </div>
            <div style={{height:"600px"}}></div>
            <ScrollAnimation animateIn="animate__fadeIn"></ScrollAnimation>
          </div>
          {/* PUBLI  */}
          <div className="menu-seven-container" id="contact">
            <div className="section-title">
              <h1>Contact</h1>
            </div>
            <ScrollAnimation animateIn="animate__fadeIn"><Contact></Contact></ScrollAnimation>
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
