import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img from '../static/img/Clauses-obligatoires-bail-min-1536x1025.jpg'

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
          <button className="carousel-button">VOTRE DEVIS EN MOINS DE 5 MIN</button>
          <div style={{bottom:0}}>TEST</div>
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