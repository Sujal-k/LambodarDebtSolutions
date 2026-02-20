// src/pages/Services.js

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/services.css"; // your CSS file

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Using your given data + online icons (circle with initials)
  const servicesData = [
    {
      icon: "https://placehold.co/80x80/0d6efd/ffffff?text=LA&shape=circle",
      title: "Legal Advisory",
      description:
        "Our legal advisory services offer expert debt recovery and financial management guidance, helping you confidently navigate legal complexities.",
    },
    {
      icon: "https://placehold.co/80x80/0d6efd/ffffff?text=NPA",
      title: "NPA Loan Recovery",
      description:
        "Our specialized NPA loan recovery services focus on resolving non-performing assets, helping you recover dues and improve your financial health.",
    },
    {
      icon: "https://placehold.co/80x80/0d6efd/ffffff?text=PL",
      title: "Personal Loan Recovery",
      description:
        "We offer personalized recovery plans for personal loans, tailored to your financial situation, enabling you to regain control and achieve peace of mind.",
    },
    {
      icon: "https://placehold.co/80x80/0d6efd/ffffff?text=BL",
      title: "Business Loan Recovery",
      description:
        "Our experts assist in recovering business loans, offering strategic solutions to help you stabilize your business finances and ensure ongoing operations.",
    },
    {
      icon: "https://placehold.co/80x80/0d6efd/ffffff?text=CC",
      title: "Credit Card Loan Recovery",
      description:
        "We provide effective credit card loan recovery services, helping you manage outstanding balances and reduce financial stress through structured repayment plans.",
    },
    {
      icon: "https://placehold.co/80x80/0d6efd/ffffff?text=RP",
      title: "Repossession",
      description:
        "We handle repossessions professionally and efficiently, ensuring the process is conducted smoothly while minimizing disruption and maximizing asset recovery.",
    },
    {
      icon: "https://placehold.co/80x80/0d6efd/ffffff?text=HL",
      title: "Home Loan Recovery",
      description:
        "Our home loan recovery and repossession services aim to protect your most valuable asset, offering solutions to manage repayments and secure your home.",
    },
    {
      icon: "https://placehold.co/80x80/0d6efd/ffffff?text=4W",
      title: "Four Wheeler Loan Recovery",
      description:
        "Our team provides efficient four-wheeler loan recovery solutions, helping you manage repayments and protect your investments in your vehicles.",
    },
    {
      icon: "https://placehold.co/80x80/0d6efd/ffffff?text=2W",
      title: "Two Wheeler Loan Recovery",
      description:
        "We specialize in recovering two-wheeler loans, ensuring a smooth process to help you regain financial stability and secure your valuable assets.",
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}

{/* --- REPLACE THE OLD HERO SECTION WITH THIS --- */}
<section className="services-hero">
  <div className="hero-overlay"></div>
  <div className="container hero-content">
    <h1 className="hero-title" data-aos="fade-up">
      Affordable & Professional Debt Recovery Services
    </h1>
    <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
      Our expert legal and financial advisory services help you
      navigate complexities, recover dues, and achieve financial
      stability.
    </p>
    <button className="hero-button" data-aos="fade-up" data-aos-delay="200">
      Get Started
    </button>
  </div>
</section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Our Core Services
          </h2>
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
              >
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <h2>Ready to Take Control of Your Finances?</h2>
          <p>
            Don't let debt hold you back. Our experts are here to provide a
            confidential, no-obligation consultation.
          </p>
          <button className="cta-button">Get a Free Consultation</button>
        </div>
      </section>
    </div>
  );
};

export default Services;