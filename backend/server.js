require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Models
const {User} = require('./models/User');
const Contact = require('./models/Contact');

// Middleware
app.use(bodyParser.json());

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
            // Send email notification
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_RECIVER, // Replace with recipient email address
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

// Endpoint to handle contact form submissions
app.post('/contact', async (req, res) => {
    try {
        const data = req.body;
        const newRequest = new Contact(data);
        await newRequest.save();

        // Send email notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECIVER, // Replace with recipient email address
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission:\n\nName: ${data.name}\nPhone: ${data.mobile}\nEmail: ${data.email}\nMessage: ${data.message}`
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
