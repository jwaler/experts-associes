import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Expert1 from '../static/img/1.jpg'
import Expert2 from '../static/img/2.jpg'
import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const items = [
    <Container className="team-carousel-big" data-value="1" id="1">
      <Row>
        <Col>
          <img className="team-carousel-img-ppy" src={Expert2} alt={Expert2}></img>
        </Col>
        <Col>
          <span>
          <h3>BERNARD PAIN</h3>
          <h5>Expert immobilier près la Cour d’Appel de Paris</h5>
          <p></p>
          <br></br>
          <p>- Compétences decrites ici</p>
          <p>- Compétences decrites ici</p>
          <p>- Compétences decrites ici</p>
          </span>
        </Col>
      </Row>
    </Container>,
    <Container className="team-carousel-big" data-value="2" id="2">
    <Row>
      <Col>
        <img className="team-carousel-img-ppy" src={Expert1} alt={Expert1}></img>
      </Col>
      <Col>
        <span>
        <h3>MARIE-ALICE PAIN</h3>
        <h5>Expert immobilier près la Cour d’Appel de Paris</h5>
        <p></p>
        <br></br>
        <p>- Compétences decrites ici</p>
        <p>- Compétences decrites ici</p>
        <p>- Compétences decrites ici</p>
        </span>
      </Col>
    </Row>
  </Container>,
//   <Container className="team-carousel-big" data-value="3" id="3">
//   <Row>
//     <Col>
//       <img className="team-carousel-img-ppy" src={Expert3} alt={Expert3}></img>
//     </Col>
//     <Col>
//       <span>
//       <h3>3e ASSOCIES</h3>
//       <p>Texte descriptif du 3e associés avec toutes les qualifications et les niveaux de compétences pour mener une expertise</p>
//       <p>- Compétences decrites ici</p>
//       <p>- Compétences decrites ici</p>
//       <p>- Compétences decrites ici</p>
//       <p>- Compétences decrites ici</p>
//       </span>
//     </Col>
//   </Row>
// </Container>,
   ]
;
const itemsthumb = [
  <div className="team-carousel-small" data-value="1" id="1"><img className="team-carousel-img-thumb-ppy" src={Expert2} alt={Expert2}></img></div>,
  <div className="team-carousel-small" data-value="2" id="2"><img className="team-carousel-img-thumb-ppy" src={Expert1} alt={Expert1}></img></div>,
  // <div className="team-carousel-small" data-value="3" id="3"><img className="team-carousel-img-thumb-ppy" src={Expert3} alt={Expert3}></img></div>,
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return itemsthumb.map((item, i) => (
      <div className='team-carousel-thumb' onClick={() => {(setThumbIndex(i)); setThumbAnimation(true)}}>
          {item}
      </div>
  ));
};

const TeamIntro = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

  // const slideNext = () => {
  //   if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
  //       setThumbAnimation(true);
  //       setThumbIndex(thumbIndex + 1);
  //   }
  // };

  // const slidePrev = () => {
  //     if (!thumbAnimation && thumbIndex > 0) {
  //         setThumbAnimation(true);
  //         setThumbIndex(thumbIndex - 1);
  //     }
  // };
  const syncMainBeforeChange = (e) => {
      setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
      setMainAnimation(false);

      if (e.type === 'action') {
          setThumbIndex(e.item);
          setThumbAnimation(false);
      } else {
          setMainIndex(thumbIndex);
      }
  };

  const syncThumbs = (e) => {
      setThumbIndex(e.item);
      setThumbAnimation(false);

      if (!mainAnimation) {
          setMainIndex(e.item);
      }
  };

  return [
    <div>
      <Container>
        <Row>
          <Col sm={1}>
            {/* <div className="btn-prev" onClick={slidePrev}><FontAwesomeIcon icon={faChevronLeft} /></div> */}
          </Col>
          <Col sm={10}>
          <div className="team-carousel-thumbs">
              <p><h4>Nous sommes deux associés... </h4></p>
                <AliceCarousel
                    animationType="none"
                    autoPlayInterval={4000}
                    activeIndex={thumbIndex}
                    autoWidth
                    autoPlay
                    infinite
                    disableDotsControls
                    disableButtonsControls
                    items={thumbs}
                    mouseTracking={true}
                    onSlideChanged={syncThumbs}
                    touchTracking={!mainAnimation}
                />
            </div>
            <div className="section-separation"></div>
            <AliceCarousel
            activeIndex={mainIndex}
            animationType="slide"
            animationDuration={1500}
            autoPlayInterval={4000}
            disableDotsControls
            disableButtonsControls
            autoPlay={true}
            infinite={true}
            items={items}
            mouseTracking={!thumbAnimation}
            onSlideChange={syncMainBeforeChange}
            onSlideChanged={syncMainAfterChange}
            touchTracking={!thumbAnimation}
            />
          </Col>
          <Col sm={1}>
            {/* <div className="btn-next" onClick={slideNext}><FontAwesomeIcon icon={faChevronRight} /></div> */}
          </Col>
        </Row>
      </Container>
    </div>
  ]
};

export default TeamIntro