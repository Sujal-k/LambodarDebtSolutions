import React,{useEffect} from 'react'
// import { Container } from 'react-bootstrap';
import abimg1 from '../../assets/team.jpeg';
import abimg2 from '../../assets/girl.png'
import Cardcount from '../../components/js/count-card';
import '../css/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for all animations
      once: false, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <>
    <div className='cont'>
    <br/>
    <div className='section-top'>
      <img src={abimg1} alt='team' data-aos="fade-up" draggable="false"></img>
      <div className='text-over-img'>
        <h4 data-aos="fade-right"  data-aos-once="true">What is Carlio And<br></br>How it is valid?</h4>
        <p data-aos="fade-left"  data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <div className='button-holder1'>
              <a href='#target1'><button id='btn-1' data-aos="fade-left"  data-aos-once="true">Explore</button></a>
              <a href='#target2'><button id='btn-2' data-aos="fade-right"  data-aos-once="true">Contact Us</button></a>
            </div>
      </div>
    </div>
    <div className='section-mid' id='target1'>
        <div className='section-mid-left'>
          <img src={abimg2} alt='girl' data-aos="fade-left"  data-aos-once="false" draggable="false"></img>
        </div>
        <div className='section-mid-right'>
          <div className='section-mid-right-top'>
            <h3 data-aos="fade-up" >Our Company Overview</h3>
            <p data-aos="fade-right"  data-aos-once="true">At Lambodar Debt Solutions, we are dedicated to helping individuals achieve financial stability and freedom. Our mission is to provide effective debt relief through personalized plans tailored to each client's unique situation. With a focus on transparency, integrity, and exceptional customer service, we guide our clients through the complexities of debt management, offering solutions that bring financial peace of mind. </p>
          </div>
          <hr/>
          <div className='section-mid-right-bottom'>
            <p data-aos="fade-left"  data-aos-once="true">Our experienced team works diligently to negotiate with creditors, reduce interest rates, and create manageable repayment plans. We are committed to empowering our clients to take control of their finances and build a brighter financial future. At Lambodar Debt Solutions, we bring good financial solutions to life.</p>
            <button id='btn-5' data-aos="fade-in">Learn More</button>
          </div>
        </div>
    </div>
    <div className='section-bottom'>
      <div className='card-cont'>
        <Cardcount count='500+' title="Cases" info="good experience about debt recovery"/>
        <Cardcount count='60+' title="Employees" info="Family of 50-100 people working together" />
        <Cardcount count='80+' title="Cases/Month" info="we resolve this much of cases per month" />
      </div>
    </div>
    </div>
    <div id='target2'></div>
    </>
  )
}
