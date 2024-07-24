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
    origin: 'https://debttesting.netlify.app', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.options('*', cors()); // Handle preflight requests

const PORT = process.env.PORT || 3000;

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
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_RECIVER,
                subject: 'New Career Application Received',
                text: `You have a new career application:\n\nName: ${data.name}\nEmail: ${data.email}\nJob Role: ${data.jobRole}\nMobile: ${data.mobile}`
            };

            await transporter.sendMail(mailOptions);
            return res.status(200).send({ message: 'Data saved and email sent' });
        }
    } catch (err) {
        console.error('Error saving career data:', err);
        res.status(400).send({ message: 'Internal server issue' });
    }
});

// Endpoint to handle contact form submissionss
app.post('/contact', async (req, res) => {
    try {
        const { name, mobile, email, message } = req.body;
        
        if (!name || !mobile || !email || !message) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newContact = new Contact({ name, mobile, email, message });
        await newContact.save();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECIVER,
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nPhone: ${mobile}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Contact details saved and email sent' });
    } catch (err) {
        console.error('Error handling contact form submission:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
