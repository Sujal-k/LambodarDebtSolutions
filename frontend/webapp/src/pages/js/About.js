import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abimg1 from "../../assets/team.jpeg"; // Hero image
import abimg2 from "../../assets/girl.png";  // Side illustration
import aboutImage from "../../assets/about.jpg"; // Additional image
import "../css/about.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <img src={abimg1} alt="Our Team" className="about-hero-img" />
        <div className="about-hero-text" data-aos="fade-up">
          <h1>About Us</h1>
          <p>
            We are committed to delivering reliable financial solutions, built
            on trust, transparency, and decades of expertise in the industry.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Contact Us</button>
            <button className="btn-outline">Our Services</button>
          </div>
        </div>
      </section>

 <div className='section-mid' id='target1'>
        <div className='section-mid-left'>
          <div className="image-box">
            <img src={aboutImage} alt='team' draggable="false" />
          </div>
        </div>
        <div className='section-mid-right'>
          <div className='section-mid-right-top'>
            <h3 className="blue-heading">Our Company Overview</h3>
            <ul className="feature-list">
              <li className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/></svg>
                <span>At Lambodar Debt Solutions, we are dedicated to helping individuals achieve financial stability and freedom.</span>
              </li>
              <li className="feature-item">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/></svg>
                <span>Our mission is to provide effective debt relief through personalized plans tailored to each client's unique situation.</span>
              </li>
              <li className="feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/></svg>
                <span>We focus on transparency, integrity, and exceptional customer service.</span>
              </li>
              <li className="feature-item">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/></svg>
                <span>We empower clients to take control of their finances and build a brighter financial future.</span>
              </li>
            </ul>
            <button id='btn-5'>Learn More</button>
          </div>
          </div>
      </div>



  <section className="stats-section">
        <div className="stat-card">
          <h3>1200+</h3>
          <p>Clients Served</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>Successful Recoveries</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
      </section>
 </div>
);
}
