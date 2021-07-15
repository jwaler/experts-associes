import './App.css';
import React from 'react';
import Menu from './components/menu'
import Footer from './components/footer'
import CarouselComp from './components/carousel'
import TeamIntro from './components/team';
import Activity from './components/activity';
import Field from './components/field'
import Consent from './components/consent'


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
          <AnimationOnScroll initiallyVisible={true} animateIn="fadeIn"><CarouselComp></CarouselComp></AnimationOnScroll>
            
          </div>
          <div className="menu-two-container">
            <div className="section-title">
            <AnimationOnScroll animateIn="fadeIn" animateOut="fadeOut" duration={2}><h1>Notre Activité</h1></AnimationOnScroll>
            </div>
            <AnimationOnScroll initiallyVisible={true} animateIn="fadeInDown" animateOut="fadeOutDown"><Activity></Activity></AnimationOnScroll>
            
          </div>
          <div className="menu-three-container">
            <div className="section-title">
              <h1>Notre Équipe</h1>
            </div>
            <TeamIntro></TeamIntro>
          </div>
          <div className="menu-four-container">
            <div className="section-title">
              <h1>Domaines d'Intervention</h1>
            </div>
            <Field></Field>
          </div>
          <div className="menu-five-container">
            <div className="section-title">
              <h1>Nos Clients</h1>
            </div>
            {/* PLUGIN */}
          </div>
          <div className="menu-six-container">
            <div className="section-title">
              <h1>Publications</h1>
            </div>
            {/* PLUGIN */}
          </div>
        </div>
        <div className="footer-container">
          <Footer></Footer>
        </div>
        <Consent></Consent>
      </div>
    );
  }
}
