require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Models
const { User } = require('./models/User');
const Contact = require('./models/Contact');

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: [
        'http://localhost:3000',   // React default dev port
        'http://localhost:3001',   // sometimes used
        'http://localhost:3002',   // your current dev port
        'https://debttesting.netlify.app' // deployed frontend
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.options('*', cors()); // Handle preflight requests

const PORT = process.env.PORT || 5000;

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Endpoint to save career data
app.post('/career', async (req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data);
        const response = await newUser.save();

        if (!response) {
            return res.status(500).send({ error: 'Cannot save the data' });
        } else {
            // 1️⃣ Email to owner/client
            const ownerMailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_RECIVER, // your email / client's email
                subject: 'New Career Application Received',
                text: `You have a new career application:
Name: ${data.name}
Email: ${data.email}
Job Role: ${data.jobRole}
Mobile: ${data.mobile}`
            };
            await transporter.sendMail(ownerMailOptions);

            // 2️⃣ Confirmation email to applicant
            const userMailOptions = {
                from: process.env.EMAIL_USER,
                to: data.email, // applicant email
                subject: 'We received your application',
                text: `Hi ${data.name},

Thank you for applying! We will review your application and contact you soon.

Best regards,
Lambodar Debt Solution`
            };
            await transporter.sendMail(userMailOptions);

            return res.status(200).send({ message: 'Data saved and emails sent' });
        }
    } catch (err) {
        console.error('Error saving career data:', err);
        res.status(400).send({ message: 'Internal server issue' });
    }
});
// Endpoint to handle contact form submissions
app.post('/contact', async (req, res) => {
    try {
        const { name, mobile, email, message } = req.body;
        
        if (!name || !mobile || !email || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newContact = new Contact({ name, mobile, email, message });
        await newContact.save();

        // 1️⃣ Email to owner/client with user details
        const ownerMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECIVER, // your email / client's email
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission:
Name: ${name}
Phone: ${mobile}
Email: ${email}
Message: ${message}`
        };
        await transporter.sendMail(ownerMailOptions);

        // 2️⃣ Confirmation email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email, // the user's email
            subject: 'We received your message',
            text: `Hi ${name},

Thank you for contacting us! We have received your message and will get back to you shortly.

Best regards,
Lambodar Debt Solution`
        };
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ message: 'Contact details saved and emails sent' });

    } catch (err) {
        console.error('Error handling contact form submission:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
