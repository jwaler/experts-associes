import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img from '../static/img/Clauses-obligatoires-bail-min-1536x1025.jpg';
import { Link } from 'react-scroll';

export default class CarouselComp extends React.Component {
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
        <div className="text-oncarousel">
          <Link type="button" className="carousel-button" activeClass="active" to="contact" spy={true} smooth={true} duration={200} delay={0}>DEMANDEZ VOTRE DEVIS D'EXPERTISE</Link>
          
        </div>
        <Carousel
          showArrows={true}
          autoPlay={true}
          autoFocus={true}
          interval={7000}
          emulateTouch={true}
          infiniteLoop={true}
          centerMode={false}
          centerSlidePercentage={100}
          showThumbs={false}
          showIndicators={false}
          stopOnHover={false}
          showStatus={false}
          transitionTime={1000}
        >
          <div>
            <img
              src={img}
              alt={img}
              className="carousel-img"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}