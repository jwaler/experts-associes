import './App.css';
import React from 'react';
import Menu from './components/menu'
import Footer from './components/footer'
import CarouselComp from './components/carousel'

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
            {/* // */}
            <CarouselComp></CarouselComp>
          </div>
          <div className="menu-two-container">menu 2</div>
          <div className="menu-three-container">menu 3</div>
        </div>
        <div className="footer-container">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
