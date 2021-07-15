import React from 'react';
import logo from "../static/img/logo.png"

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0,
      show: true,
      navHeight: '',
      hidelogo: 'logo-div center-page',
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (document.body.getBoundingClientRect().top === 0) {
      this.setState({
        navHeight: '',
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > this.state.scrollPos,
        hidelogo: 'logo-div center-page'
      })
    }
    else {
      this.setState({
        navHeight: 'shrinknav',
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > this.state.scrollPos,
        hidelogo: 'iwanttohidethis'
      })
    }
    console.log(document.body.getBoundingClientRect().top)
  }
  render() {
    return (
      <div>
        <div id="navbar" className={`${this.state.navHeight} ${this.state.show ? "activenav" : "hidenav"}`}>
          <div className="main-logo-div">
            <img className={this.state.hidelogo} src={logo} alt={logo}></img>
          </div>
        
          <a href="#accueil">Accueil</a>
          <a href="#activite">Notre Activité</a>
          <a href="#equipe">Notre Équipe</a>
          <a href="#domaines">Domaines d'Intervention</a>
          <a href="#clients">Nos Clients</a>
          <a href="#publication">Publication</a>
          <a href="#contact">Contact</a>
        </div> 
      </div>
    );
  }
}