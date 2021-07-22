import React from 'react';
import logo from "../static/img/logo.png"
// ES6 Imports
import { Link } from 'react-scroll'

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
        hidelogo: 'iwanttohidethis'
      })
    }
    // console.log(document.body.getBoundingClientRect().top)
  }
  render() {
    return (
      <div>
        <div id="navbar" className={`${this.state.navHeight} ${this.state.show ? "activenav" : "hidenav"}`}>
          <div className="main-logo-div">
            <img className={this.state.hidelogo} src={logo} alt={logo}></img>
          </div>
          <Link activeClass="active" to="accueil" spy={true} smooth={true} duration={200} delay={0}>Accueil</Link>
          <Link activeClass="active" to="activite" spy={true} smooth={true} duration={200} delay={0}>Notre Activité</Link>
          <Link activeClass="active" to="equipe" spy={true} smooth={true} duration={200} delay={0}>Notre Équipe</Link>
          <Link activeClass="active" to="domaines" spy={true} smooth={true} duration={200} delay={0}>Domaines d'Intervention</Link>
          <Link activeClass="active" to="clients" spy={true} smooth={true} duration={200} delay={0}>Nos Clients</Link>
          <Link activeClass="active" to="publications" spy={true} smooth={true} duration={200} delay={0}>Publications</Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={200} delay={0}>Contact</Link>
        </div> 
      </div>
    );
  }
}