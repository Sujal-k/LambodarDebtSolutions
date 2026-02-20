import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import woman from "../../assets/homepagewoman.png";
import ReactCardSlider from "react-card-slider-component";
import img1 from "../../assets/slide1.png";
import img2 from "../../assets/slide2.png";
import img3 from "../../assets/slide3.png";
import img4 from "../../assets/slide4.png";
import img5 from "../../assets/slide5.png";
import img6 from "../../assets/slide6.png";
import '../css/home.css';
import img7 from "../../assets/logomain.png";
import { FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';

const slides = [
  { image: img1, title: "NPA Loan Recovery" },
  { image: img2, title: "Personal Loan Recovery" },
  { image: img3, title: "B2B Loan Recovery" },
  { image: img4, title: "Credit Card Loan Recovery" },
  { image: img5, title: "Repossession Recovery" },
  { image: img6, title: "Home Loan Recovery" },
];

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });
  }, []);

  return (
    <div className="home-main">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right"  className="hero-content-column">
              <h1>
                WE BRING GOOD <br></br>
                <span className="head2">FINANCIAL TO LIFE.</span>
              </h1>
              <p>
               We bring good financial solutions to life by providing effective debt relief, personalized plans, and a path to financial freedom.
              </p>
               <div className="key-benefits">
              <div className="benefit-item">
                <FaShieldAlt className="benefit-icon" /> {/* Icon */}
                <span>Secure & Confidential</span>
              </div>
              <div className="benefit-item">
                <FaChartLine className="benefit-icon" /> {/* Icon */}
                <span>Proven Track Record</span>
              </div>
              <div className="benefit-item">
                <FaUsers className="benefit-icon" /> {/* Icon */}
                <span>Expert Financial Advisors</span>
              </div>
            </div>

         
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">
                  Free Consultation
                </Link>
                <Link to="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img src={woman} alt="Financial guidance" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <Container>
          <h2 className="text-center mb-4" data-aos="fade-up">
            Our Services
          </h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ReactCardSlider slides={slides} />
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      {/* Trusted Banks Section */}
{/* Trusted Banks Section with Logos */}
{/* Trusted Banks Section with Logos */}
<section className="trusted-banks-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
  <Container>
    <h2 className="text-center mb-4" data-aos="fade-up">Our Trusted Financial Partners</h2>
    <Row className="justify-content-center align-items-center">
      {[
       { name: "Hero Fincorp", logo: require("../../assets/hero-fincorp-seeklogo.png") },
  { name: "Loksuviddha", logo: require("../../assets/loksuvidha.png") },
  { name: "Bajaj finance limited", logo: require("../../assets/image.png") },
  { name: "L&T Finance", logo: require("../../assets/L&T.png") },
      ].map((bank, index) => (
        <Col key={index} xs={6} sm={4} md={3} className="text-center mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
          <div className="bank-card p-3 shadow-sm rounded" style={{ backgroundColor: '#ffffff', transition: 'transform 0.3s' }}>
            <img src={bank.logo} alt={bank.name} style={{ maxWidth: '100px', marginBottom: '10px' }} />
            <p className="mb-0 fw-bold">{bank.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>


     {/* Head Office Section */}
<section className="headoffice-section py-5">
  <Container>
    {/* Main heading is on top and centered */}
    <h2 className="text-center mb-5" data-aos="fade-up">
      Head Office
    </h2>

    <Row className="align-items-center" data-aos="fade-up" data-aos-delay="200">
      {/* --- Left Column (Address & Contact) --- */}
      <Col md={6}>
        {/* This is the new heading you requested */}
        <h3 className="address-heading mb-3">Address</h3>

        <p>
          Office No. F-20 , Khinvasara August
Highstreet Market Ulkanagari ,
Chhatrapati Sambhajinagar (MH) 431001

        </p>
        <p>📞 +91-9322944343</p>
        <p>✉ contact.shreyaloans@gmail.com</p>
      </Col>

      {/* --- Right Column (Map) --- */}
      <Col md={6}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1876.2273909219648!2d75.34193663858616!3d19.8630094453776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No.%20F-20%2C%201st%20Floor%2CKHINVASARA%20August%20Highstreet%20Market%2CUlkanagari%2C%20Garkheda%20Parisar%2CChhatrapati%20Sambhajinagar%2C%20Aurangabad%20(MH)%20431001!5e0!3m2!1sen!2sin!4v1758968559796!5m2!1sen!2sin" // Make sure to use your correct map URL
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Col>
    </Row>
  </Container>
</section>
            {/* Testimonials Section */}
      <section className="testimonials-section">
        <Container>
          <h2 className="text-center mb-5" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <Row>
            <Col md={4} data-aos="fade-right">
              <div className="testimonial-card">
                <p>
                  “Shreya Loans and Finance helped me resolve my business loan quickly.
                  Their team handled negotiations with professionalism.”
                </p>
                <h5>- Rajesh P.</h5>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up">
              <div className="testimonial-card">
                <p>
                  “I was struggling with credit card debt. Their advice and
                  support made repayment stress-free.”
                </p>
                <h5>- Neha S.</h5>
              </div>
            </Col>
            <Col md={4} data-aos="fade-left">
              <div className="testimonial-card">
                <p>
                  “Very reliable, transparent, and effective debt recovery
                  services. Highly recommended.”
                </p>
                <h5>- Kunal M.</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Footer Section */}
      {/* <footer className="footer-section">
        <Container>
          <Row>
            <Col md={4}>
              <div className="footer-logo">
                <h3>Lambodar Debt</h3>
                <p>Trusted Debt Recovery & Financial Guidance</p>
              </div>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/career">Career</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <p>📍 123 Finance Street, Mumbai</p>
              <p>📞 +91-9876543210</p>
              <p>✉ contact@lambodardebt.com</p>
            </Col>
          </Row>
          <div className="footer-bottom text-center">
            <p>© {new Date().getFullYear()} Lambodar Debt. All Rights Reserved.</p>
          </div>
        </Container>
      </footer> */}

    </div>
    
  );
}