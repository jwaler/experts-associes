import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0,
      show: true,
      navHeight: '',
      hidelogo: 'center-page',
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
        hidelogo: 'center-page'
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
            <img className={this.state.hidelogo} src="//skins.azko.fr/sagan-refonte/img/logo-gros.png" alt="//skins.azko.fr/sagan-refonte/img/logo-gros.png"></img>
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