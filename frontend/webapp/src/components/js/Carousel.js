import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../../components/js/ExampleCarouselImage'; // Ensure this component exists and handles rendering of images
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import heroFinance from '../../assets/heroFincorp.png'
import bajajFinance  from '../../assets/bajajFinance.png';
import LandT from '../../assets/LandT.png';
import loksuvidha from '../../assets/loksuvidha.png'

function IndividualIntervalsExample() {
  return (
    <Carousel data-aos='fade-in'>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={loksuvidha}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={bajajFinance}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={LandT}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={300}>
        <img
          className="d-block w-100"
          src={heroFinance}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
