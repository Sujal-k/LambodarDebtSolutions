import React, { useState } from 'react';
import { Container, Form, Button, Spinner, Modal } from 'react-bootstrap';
import { Phone, Mail, MapPin } from 'lucide-react'; // Professional icons
import axios from 'axios';
import '../css/contact.css'; // Import the CSS file for styling

// --- Main Contact Page Component ---
const ContactPage = () => {
    // --- STATE MANAGEMENT (from your original code) ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '', // Renamed from 'phone' to match your form state
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    // --- FORM HANDLERS (from your original code) ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setPopupMessage('');
        try {
            // Using your original endpoint and logic
            const response = await axios.post('https://lambodardebtsolutionsbackend.onrender.com/contact', formData);
            if (response.status === 200) {
                setPopupMessage('✅ Contact details saved and email sent successfully!');
                setFormData({ name: '', email: '', mobile: '', message: '' }); // Clear form
            } else {
                setPopupMessage('❌ Failed to send contact details. Please try again.');
            }
        } catch (error) {
            console.error('Error sending contact form data', error);
            setPopupMessage('❌ An error occurred. Please try again later.');
        }
        setLoading(false);
        setShowPopup(true);
    };
    
    const handlePopupClose = () => setShowPopup(false);

    return (
        <div className="contact-page-container">
            {/* --- EMBEDDED STYLES FOR THE NEW DESIGN --- */}
         
            
            {/* Hero Section */}
            <section className="contact-hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Get In Touch</h1>
                    <p>We're here to help. Whether you have a question about our services or need financial advice, our team is ready to assist you.</p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="contact-info-section">
                <Container>
                    <div className="contact-info-grid">
                        <div className="info-card">
                            <div className="info-icon"><MapPin size={40} /></div>
                            <h3>Our Location</h3>
                            <p>OFFICE NO.4, NEAR MORYA MEDICAL, N-6 CIDCO, CHHATRAPATI SAMBHAJI NAGAR (AURANGABAD) 431001</p>
                        </div>
                        <div className="info-card">
                            <div className="info-icon"><Phone size={40} /></div>
                            <h3>Call Us</h3>
                            <p>
                                <a href="tel:9322944343">9322944343</a>
                            </p>
                        </div>
                        <div className="info-card">
                            <div className="info-icon"><Mail size={40} /></div>
                            <h3>Email Us</h3>
                            <p>
                                <a href="mailto:lambodardebtsolution@gmail.com">lambodardebtsolution@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
            
            {/* Form and Map Section */}
            <section className="form-map-section">
                <Container>
                    <div className="form-map-wrapper">
                        <div className="contact-form-container">
                            <h2>Send Us a Message</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} />
                                </Form.Group>
                                 <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" name="mobile" required placeholder="Enter your phone number" value={formData.mobile} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" name="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} name="message" required placeholder="How can we help you?" value={formData.message} onChange={handleChange} />
                                </Form.Group>
                                <Button className="submit-button" type="submit" disabled={loading}>
                                    {loading ? <Spinner animation="border" size="sm" /> : 'Send Message'}
                                </Button>
                            </Form>
                        </div>
                        <div className="map-container">
                            {/* Replace this src with your actual Google Maps embed code */}
                          
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1876.2273909219648!2d75.34193663858616!3d19.8630094453776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No.%20F-20%2C%201st%20Floor%2CKHINVASARA%20August%20Highstreet%20Market%2CUlkanagari%2C%20Garkheda%20Parisar%2CChhatrapati%20Sambhajinagar%2C%20Aurangabad%20(MH)%20431001!5e0!3m2!1sen!2sin!4v1758968559796!5m2!1sen!2sin" // Make sure to use your correct map URL
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    
                        </div>
                    </div>
                </Container>
            </section>

            {/* Status Modal (Your original logic) */}
            <Modal show={showPopup} onHide={handlePopupClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Form Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-center">{popupMessage}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlePopupClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ContactPage;

