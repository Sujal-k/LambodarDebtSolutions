import React, { useState, useEffect } from 'react';
import '../css/carrier.css';
import interviewImage from '../../assets/OnlineInterview.png';
import CareerCard from '../../components/js/CareerCard';
import AOS from 'aos';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component
import axios from 'axios';
import { Container } from 'react-bootstrap';

const jobRoles = ['Back Office Operation', 'Telecalling', 'Field Executive'];

const StyledDiv = () => {
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
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleJobRoleChange = (e) => {
    setSelectedJobRole(e.target.value);
    setFormData({ ...formData, jobRole: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    try {
      const response = await axios.post('/career', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Success:', response.data);
      setPopupMessage('Application submitted successfully!');
      setShowPopup(true);
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      setPopupMessage('Failed to submit application. Please try again.');
      setShowPopup(true);
    }
    setLoading(false); // Set loading to false once request is complete
  };

  const handlePopupClose = () => setShowPopup(false);
  
    const respo1 = [
        "Handle customer inquiries and provide accurate information.",
        "Handle customer inquiries and provide accurate information.",
        "Utilize advanced MS-Excel skills for managing and analyzing data.",
        "Supervise and lead a team of telecallers to meet and exceed targets.",
        "Manage and organize customer data to ensure accurate and efficient operations."
    ];
    const reqs1 = [
        "Strong communication and interpersonal skills.",
        "Proficiency in MS-Excel, including advanced functions.",
        "Proven experience in team management.",
        "Excellent organizational skills and attention to detail."
    ];
    const respo2 = [
        "Interact with customers to address their needs and resolve issues.",
        "Conduct door-to-door visits for service provision and customer engagement.",
        "Implement recovery strategies to retrieve overdue payments.",
        "Collect payments and manage collections effectively.",
        "Oversee repossession processes, handling assets with professionalism."
    ];
    const reqs2 = [
        "Excellent customer service and communication skills.",
        "Ability to handle door-to-door visits and manage collections.",
        "Experience in recovery and repossession activities.",
        "Strong organizational and problem-solving skills."
    ];
    const respo3 = [
        "Perform advanced Excel functions for comprehensive data analysis and reporting.",
        "Merge data from various sources to create accurate and detailed reports.",
        "Generate timely reports to keep management updated on performance metrics.",
        "Maintain data integrity and ensure efficient data management."
    ];
    const reqs3 = [
        "Advanced proficiency in MS-Excel, including complex formulas and data manipulation.",
        "Experience with data merging and reporting.",
        "Strong attention to detail and organizational skills.",
        "Ability to manage and prioritize multiple tasks effectively."
    ];
  return (
    <Container>
      <section>
        <br/>
        <div className="styled-div">
          <h2 data-aos="fade-right" data-aos-once="true">Welcome to Lambodar Debt Solutions!</h2>
          <h4 data-aos="fade-right" data-aos-once="true">We are hiring!</h4>
          <Button className='button-apply' variant="outline-light" onClick={handleShow}>
            Apply now
          </Button>{' '}
          <img className='InterviewImage' src={interviewImage} alt="Online Interview" data-aos="fade-left" data-aos-once="true" draggable="false"/>
        </div>

        <div className='second-section-carrier-page'>
          <h3 data-aos="fade-right" data-aos-once="true">Available Jobs</h3>
          <div className='info-para-carrier'>
            <p data-aos="fade-left" data-aos-once="true">Discover exciting career opportunities with us, where your skills and passion meet unmatched growth and success.</p>
          </div>
        </div>

        <div className="cards-container">
        <CareerCard title="Telecaller" respo={respo1} reqs={reqs1} />
        <CareerCard title="Field Executive" respo={respo2} reqs={reqs2} />
        <CareerCard title="Back Office Executive" respo={respo3} reqs={reqs3} />
        </div>

        <Modal show={showForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Application Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group controlId="formJob">
                <Form.Label>Job Role</Form.Label>
                <Form.Control as="select" name="jobRole" value={selectedJobRole} onChange={handleJobRoleChange}>
                  <option value="">Select a job role...</option>
                  {jobRoles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formMobile">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control type="tel" name="mobile" placeholder="Enter your mobile number" value={formData.mobile} onChange={handleInputChange} />
              </Form.Group>
              
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Submit'}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={showPopup} onHide={handlePopupClose}>
          <Modal.Header closeButton>
            <Modal.Title>Application Status</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{popupMessage}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlePopupClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </Container>
  );
};

export default StyledDiv;
