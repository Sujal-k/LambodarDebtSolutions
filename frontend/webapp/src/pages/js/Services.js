import React, { useEffect } from 'react';
import mainImage from '../../assets/online-business.png'
import img1 from '../../assets/slide7.png';
import img2 from '../../assets/slide1.png';
import img3 from '../../assets/slide2.png';
import img4 from '../../assets/slide3.png';
import img5 from '../../assets/slide4.png';
import img6 from '../../assets/slide5.png';
import img7 from '../../assets/slide6.png';
import img8 from '../../assets/carLoan.png';
import img9 from '../../assets/bikeLoan.png'
import CustomCard from '../../components/js/Card';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/services.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all animations
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const cardsData = [
    { title: "Legal Advisory", text: "Our legal advisory services offer expert debt recovery and financial management guidance, helping you confidently navigate legal complexities.", image: img1 },
    { title: "NPA Loan Recovery", text: "Our specialized NPA loan recovery services focus on resolving non-performing assets, helping you recover dues and improve your financial health.", image: img2 },
    { title: "Personal Loan Recovery", text: "We offer personalized recovery plans for personal loans, tailored to your financial situation, enabling you to regain control and achieve peace of mind.", image: img3 },
    { title: "Buisness Loan Recovery", text: "Our experts assist in recovering business loans, offering strategic solutions to help you stabilize your business finances and ensure ongoing operations.", image: img4 },
    { title: "Credit Card Loan Recovery", text: "We provide effective credit card loan recovery services, helping you manage outstanding balances and reduce financial stress through structured repayment plans.", image: img5 },
    { title: "Repossion", text: "We handle repossessions professionally and efficiently, ensuring the process is conducted smoothly while minimizing disruption and maximizing asset recovery.", image: img6 },
    { title: "Home Loan recovery", text: "Our home loan recovery and repossession services aim to protect your most valuable asset, offering solutions to manage repayments and secure your home.", image: img7 },
    { title: "Four wheeler Loan recovery", text: "Our team provides efficient four-wheeler loan recovery solutions, helping you manage repayments and protect your investments in your vehicles.", image: img8 },
    { title: "Two wheeler Loan recovery", text: "We specialize in recovering two-wheeler loans, ensuring a smooth process to help you regain financial stability and secure your valuable assets.", image: img9 }
  ];

  const renderCards = () => {
    const cardRows = [];
    for (let i = 0; i < cardsData.length; i += 2) {
      cardRows.push(
        <div className="cards-row" data-aos="fade-up" data-aos-once="true" key={i}>
          <CustomCard title={cardsData[i].title} text={cardsData[i].text} image={cardsData[i].image} />
          {i + 1 < cardsData.length && (
            <CustomCard title={cardsData[i + 1].title} text={cardsData[i + 1].text} image={cardsData[i + 1].image} />
          )}
        </div>
      );
    }
    return cardRows;
  };

  return (
    <Container>
      <section>
        <br/>
        <div className='first-section'>
          <div className='first-section-left'>
            <h4 data-aos="fade-right" data-aos-once="true">Affordable services provided by us.</h4>
            <p data-aos="fade-left" data-aos-once="true">Our legal advisory services offer expert debt recovery and financial management guidance, helping you confidently navigate legal complexities.</p>
            <span id='btn' data-aos="fade-up" data-aos-once="true"><button>Explore</button></span>
          </div>
          <div className='first-section-right'>
            <img src={mainImage} alt="online business" className='img-fluid' data-aos="fade-left" draggable="false"></img>
          </div>
        </div>

        <div className='second-section-carrier-page' data-aos="fade-down" data-aos-once="true">
          <h3>Services for us</h3>
          <div className='info-para-carrier'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
          </div>
        </div>

        {/* Cards Section */}
        <Container>
          <div className="cards-container">
            {renderCards()}
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default Services;
