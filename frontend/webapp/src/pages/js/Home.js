import React, { useEffect } from 'react';
import IndividualIntervalsExample from '../../components/js/Carousel';
import woman from '../../assets/homepagewoman.png';
import loc from '../../assets/loc.png';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactCardSlider from 'react-card-slider-component';
import img1 from "../../assets/slide1.png";
import img2 from "../../assets/slide2.png";
import img3 from "../../assets/slide3.png";
import img4 from "../../assets/slide4.png";
import img5 from "../../assets/slide5.png";
import img6 from "../../assets/slide6.png";


const slides = [
  { image: img1, title: "NPA LOAN RECOVERY", description: "", style: { width: '100%', height: 'auto' } },
  { image: img2, title: "PERSONAL LOAN RECOVERY", description: "", style: { width: '100%', height: 'auto' } },
  { image: img3, title: "B2B LOAN RECOVERY", description: "", style: { width: '100%', height: 'auto' } },
  { image: img4, title: "CREDIT CARD LOAN RECOVERY", description: "", style: { width: '100%', height: 'auto' } },
  { image: img5, title: "REPOSSION RECOVERY", description: "", style: { width: '100%', height: 'auto' } },
  { image: img6, title: "HOME LOAN RECOVERY", description: "", style: { width: '100%', height: 'auto' } }
];



export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  const imageStyle = {
    width: "100%",
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    zIndex: 1,
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    display: "flex",
    justifyContent: "center"
  };

  const overlayContent = {
    height: "100%",
    width: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "50px",
    marginRight: "30px",
    flexDirection: "column"
  };

  const buttonparentStyle = {
    marginTop: "20px"
  };

  const buttonStyle = {
    backgroundColor: "rgba(255, 119, 43, 1)",
    fontFamily: "poppins",
    padding: "15px 45px 15px 45px",
    borderRadius: "30px",
    border: "none",
  };

  return (
    <>
      <div className='home-main-custom'>
        <Container>
          <div className='home-hero-custom' style={containerStyle} data-aos="fade-up" data-aos-easing="cubic-bezier(0.68, -0.55, 0.27, 1.55)">
            <img style={imageStyle} src={woman} alt='woman' className="img-fluid" draggable="false"/>
            <div style={overlayStyle}>
              <div style={overlayContent} className='home-hero-overlay'>
                <h1 style={{ fontSize: "4.1vw", fontWeight: "30px", fontFamily: "Poppins" }} data-aos='fade-left'>WE BRING GOOD FINANCIAL TO LIFE.</h1>
                <div data-aos='fade-right'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nemo corporis quod distinctio veniam fugit cumque cum,
                  <div style={buttonparentStyle}>
                    <button style={buttonStyle} className='home-hero-button'>Explore</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h2 className='text-center' data-aos="fade-right" data-aos-once="true">Services Provided</h2>
          <br />
          <div style={{display:"flex",justifyContent:"center"}} data-aos="fade-up" data-aos-once="true">
            <br />
            <ReactCardSlider slides={slides} />
          </div>
          <br />
          <br />
          <div className='home-carousel-custom'>
            <h3 className='text-center' data-aos='fade-right'>Banks Associated with us.</h3>
            <IndividualIntervalsExample />
          </div>
          <br />
          <br />
          <br />
          <div className='headoffice-custom'>
            <h3 className='text-center'>Head office</h3>
            <br />
            <Container>
              <Row className='head-office-content-custom'>
                <Col md={6} className='head-office-content' data-aos='fade-right'>
                  <div>
                    <h4>Address</h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi</p>
                  </div>
                  <div>
                    <p>Mobile : 1234556</p>
                    <p>Mobile : 1234556</p>
                  </div>
                  <div>
                    <p>Email : Lambodar@debts</p>
                  </div>
                </Col>
                <Col md={6} className='head-office-loc' data-aos='fade-right'>
                  <img src={loc} alt='' className='img-fluid' draggable="false" />
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}
