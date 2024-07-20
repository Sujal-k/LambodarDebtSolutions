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
      <img src={abimg1} alt='#' data-aos="fade-up" draggable="false"></img>
      <div className='text-over-img'>
        <h4 data-aos="fade-right"  data-aos-once="true">What is Carlio And<br></br>How it is valid?</h4>
        <p data-aos="fade-left"  data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <div className='button-holder1'>
              <button id='btn-1' data-aos="fade-left"  data-aos-once="true">Buy Products</button>
              <button id='btn-2' data-aos="fade-right"  data-aos-once="true">Contact Us</button>
            </div>
      </div>
    </div>
    <div className='section-mid'>
        <div className='section-mid-left'>
          <img src={abimg2} alt='#' data-aos="fade-left"  data-aos-once="false" draggable="false"></img>
        </div>
        <div className='section-mid-right'>
          <div className='section-mid-right-top'>
            <h3 data-aos="fade-up" >Our Company Overview</h3>
            <p data-aos="fade-right"  data-aos-once="true">Carlio brand is one of the most reliable motor oil manufacturers, which is engaged in the production of high quality products with a history of more than decades in the industry. In order to get more information about other aspects and products of the Carlio brand, you can use the following buttons:</p>
            <div className='button-holder2'>
              <button id='btn-3' data-aos="fade-left">Company</button>
              <button id='btn-4' data-aos="fade-left">Our Team</button>
            </div>
          </div>
          <hr/>
          <div className='section-mid-right-bottom'>
            <p data-aos="fade-left"  data-aos-once="true">vThe meaning of production in Carlio is the creation, development, and the path to progress, and the starting point to achieve the goals that we all have the Petroforce brand, with over 20 years of experience in the oil and petrochemical industry, we officially started our activities in the field of design, engineering, construction of refinery equipment, and the production of various motor and industrial lubricants in the year 1390 (2011)</p>
            <button id='btn-5' data-aos="fade-in">Learn More</button>
          </div>
        </div>
    </div>
    <div className='section-bottom'>
      <div className='card-cont'>
        <Cardcount count='1000' title="Projects" info="this is the no of projects we completed this year"/>
        <Cardcount count='100' title="Projects" info="this is the no of projects we completed this year" />
        <Cardcount count='100' title="Projects" info="this is the no of projects we completed this year" />
      </div>
    </div>
    </div>
    </>
  )
}
