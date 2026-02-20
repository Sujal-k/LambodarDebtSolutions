import React, { useState, useEffect } from 'react';
import { Container, Button, Form, Modal, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { Briefcase, TrendingUp, Users } from 'lucide-react'; // Professional icons
import '../css/carrier.css';

// --- Main Careers Page Component ---
const CareersPage = () => {
  // --- STATE MANAGEMENT (from your original code) ---
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [selectedJobRole, setSelectedJobRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobRole: '',
    mobile: ''
  });
  const [loading, setLoading] = useState(false);

  // --- JOB DATA (from your original code) ---
  const jobOpenings = [
    {
      title: 'Back Office Executive',
      location: "Nagpur, Maharashtra",
      responsibilities: [
        "Perform advanced Excel functions for comprehensive data analysis and reporting.",
        "Merge data from various sources to create accurate and detailed reports.",
        "Generate timely reports to keep management updated on performance metrics.",
        "Maintain data integrity and ensure efficient data management."
      ],
      requirements: [
        "Advanced proficiency in MS-Excel, including complex formulas and data manipulation.",
        "Experience with data merging and reporting.",
        "Strong attention to detail and organizational skills.",
        "Ability to manage and prioritize multiple tasks effectively."
      ]
    },
    {
      title: 'Telecaller',
      location: "Nagpur, Maharashtra",
      responsibilities: [
        "Handle customer inquiries and provide accurate information.",
        "Utilize advanced MS-Excel skills for managing and analyzing data.",
        "Supervise and lead a team of telecallers to meet and exceed targets.",
        "Manage and organize customer data to ensure accurate operations."
      ],
      requirements: [
        "Strong communication and interpersonal skills.",
        "Proficiency in MS-Excel, including advanced functions.",
        "Proven experience in team management.",
        "Excellent organizational skills and attention to detail."
      ]
    },
    {
      title: 'Field Executive',
      location: "Nagpur, Maharashtra",
      responsibilities: [
        "Interact with customers to address their needs and resolve issues.",
        "Conduct door-to-door visits for service provision and engagement.",
        "Implement recovery strategies to retrieve overdue payments.",
        "Handle repossession processes with professionalism."
      ],
      requirements: [
        "Excellent customer service and communication skills.",
        "Ability to handle door-to-door visits and manage collections.",
        "Experience in recovery and repossession activities.",
        "Strong organizational and problem-solving skills."
      ]
    }
  ];

  // --- HANDLERS (from your original code) ---
  const handleShow = (role = '') => {
    const jobRole = role || '';
    setSelectedJobRole(jobRole);
    setFormData({ name: '', email: '', jobRole, mobile: '' });
    setShowForm(true);
  };
  const handleClose = () => setShowForm(false);
  const handlePopupClose = () => setShowPopup(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/career', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Success:', response.data);
      setPopupMessage('✅ Application submitted successfully!');
      setShowPopup(true);
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      setPopupMessage('❌ Failed to submit application. Please try again.');
      setShowPopup(true);
    }
    setLoading(false);
  };


  return (
    <div className="careers-page-container">
       
      
      {/* Hero Section */}
      <section className="careers-hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <h1>Join Our Team</h1>
            <p>
              Be a part of a dynamic team dedicated to providing exceptional
              financial solutions. We're looking for passionate individuals to help us grow.
            </p>
            <a href="#available-jobs" className="hero-button">
              View Open Positions
            </a>
        </div>
      </section>
{/* Why Work With Us Section */}
<section className="why-us-section">
  <h2 className="section-title">Why Work With Us?</h2>
  <p className="section-subtitle">
    We foster a supportive environment where our employees can thrive both personally and professionally.
  </p>
  <div className="benefits-grid">
    <div className="benefit-item">
      <div className="benefit-icon"><TrendingUp size={40} /></div>
      {/* ADD THIS WRAPPER DIV */}
      <div className="benefit-text">
        <h3>Professional Growth</h3>
        <p>We provide continuous learning opportunities and clear career paths to help you advance.</p>
      </div>
    </div>
    <div className="benefit-item">
      <div className="benefit-icon"><Users size={40} /></div>
      {/* ADD THIS WRAPPER DIV */}
      <div className="benefit-text">
        <h3>Collaborative Culture</h3>
        <p>Work alongside a team of dedicated professionals in a supportive and inclusive atmosphere.</p>
      </div>
    </div>
    <div className="benefit-item">
      <div className="benefit-icon"><Briefcase size={40} /></div>
      {/* ADD THIS WRAPPER DIV */}
      <div className="benefit-text">
        <h3>Competitive Compensation</h3>
        <p>We offer attractive salary packages and performance-based incentives.</p>
      </div>
    </div>
  </div>
</section>

      {/* Job Listings Section */}
      <section id="available-jobs" className="job-listings-section">
        <h2 className="section-title">Available Jobs</h2>
        <Container>
          {jobOpenings.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-header">
                <div className="job-title">
                  <h2>{job.title}</h2>
                  <span>{job.location}</span>
                </div>
                <Button variant="primary" className="apply-button" onClick={() => handleShow(job.title)}>Apply Now</Button>
              </div>
              <div className="job-details">
                <div className="responsibilities">
                  <h4>Responsibilities</h4>
                  <ul>
                    {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
                <div className="requirements">
                  <h4>Requirements</h4>
                  <ul>
                    {job.requirements.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Form Modal (Your original component) */}
      <Modal show={showForm} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Application Form for {selectedJobRole}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" required placeholder="Enter your name" value={formData.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" required placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Applying for</Form.Label>
                <Form.Control type="text" name="jobRole" value={selectedJobRole} readOnly disabled />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="tel" name="mobile" required placeholder="Enter your mobile number" value={formData.mobile} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="success" type="submit" disabled={loading} className="w-100">
              {loading ? <Spinner animation="border" size="sm" /> : 'Submit Application'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Status Modal (Your original component) */}
      <Modal show={showPopup} onHide={handlePopupClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Application Status</Modal.Title>
        </Modal.Header>
        <Modal.Body><p className="text-center">{popupMessage}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePopupClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CareersPage;