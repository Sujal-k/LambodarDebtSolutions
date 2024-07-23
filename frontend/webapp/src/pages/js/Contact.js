import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component
import axios from 'axios';
import contactImage from '../../assets/contactUs.png'; 
import callImage from '../../assets/Call_Contact.png';
import emailImage from '../../assets/Email.png';
import '../css/contact.css';
import LCard from '../../components/js/l-card';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted
    try {
      const response = await axios.post('/contact', formData);
      if (response.status === 200) {
        setPopupMessage('Your contact query is received');
        setShowPopup(true);
      } else {
        setPopupMessage('Failed to send your query');
        setShowPopup(true);
      }
    } catch (err) {
      console.error('Error sending contact form data', err);
      setPopupMessage('Error sending query');
      setShowPopup(true);
    }
    setLoading(false); // Set loading to false once request is complete
  };

  const handlePopupClose = () => setShowPopup(false);

  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="text-container">
              <h2 style={{ marginBottom: '15px' }}>Get in touch</h2>
              <p>Visit our agency or simply send us an email anytime you want. If you have any questions, please feel free to contact us.</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="contact-info d-flex justify-content-md-end">
              <div className="contact-item">
                <img src={callImage} alt="Call" draggable="false" />
                <p style={{ marginBottom: '0' }}>9322944343 / 7058417001</p>
              </div>
              <div className="contact-item ml-md-4">
                <img src={emailImage} alt="Email"  draggable="false"/>
                <p style={{ marginBottom: '0' }}>lambodardebtsolution@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="background-image"
        style={{
          backgroundImage: `url(${contactImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width:"100%",
          height:"auto",
          display: 'flex',
          alignItems: 'center',
          padding: '50px'
        }}
      >
        <div style={{ width: '100%', padding: '20px' }}>
          <h1 style={{ textAlign: 'left', marginBottom: '30px', paddingLeft: '20px' }}>Contact Us</h1>
          <Form style={{ maxWidth: '600px', padding: '20px', borderRadius: '10px' }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Submit'}
            </Button>
          </Form>
        </div>
      </div>

      <Modal show={showPopup} onHide={handlePopupClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form Status</Modal.Title>
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
      <h3 id='lower-head'>Our Locations</h3>
      <div className='loc-cont'>     
          <LCard title="location1" info="CSN HEAD OFFICE" mobno="9322944343" />
          <LCard title="location1" info="this is our new location" mobno="1234567890" />
          <LCard title="location1" info="this is our new location" mobno="1234567890" />
      </div>
    </section>
  );
}

export default Contact;
