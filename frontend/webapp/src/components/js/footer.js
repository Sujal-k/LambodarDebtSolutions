import React from 'react';
import call from '../../assets/Call.png';
import gmail from '../../assets/Gmail.png';
import loc from '../../assets/Location.png';
import '../css/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className='footer-main'>
        
        <div className='footer-content'>
          <div className='footer-content-contact'>
            <h4>Contact Us</h4>
            <br/>
            <div>
              <img src={call} alt=' ' draggable="false" /><div> 919860485555 , 0240-2980505 Ganesh</div>
            </div>
            <br/>
            <div>
              <img src={gmail} alt=' '  draggable="false"/><div> Ganesh.mansurkar@moryaassociates.com</div>
            </div>
            <br />
          </div>
          <div className='footer-content-quicklinks'>
            <h4>Quick Links</h4>
            <br/>
            <div>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/career'>Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className='footer-content-ourLocation'>
            <h4>Our Locations</h4>
            <br/>
            <div>
              <img src={loc} alt='' draggable="false"/><div><a href='w.com' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur </a></div>
            </div>
            <br/>
            <div>
              <img src={loc} alt='' draggable="false"/><div><a href='w.com' draggable="false"> Lorem ipsum dolor sit amet consectetur adipisicing elit.t ing elit. Lorem ipsum dolor sit amet consectetur</a></div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='footer-copyright'>
          <p style={{ margin: "0px" }}>@2024 Lambodar Debt Solution. All Right reserved </p>
        </div>
      </div>
    </>
  );
}
