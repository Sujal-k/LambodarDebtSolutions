require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Resend } = require("resend");
const db = require("./db");

// Models
const { User } = require("./models/User");
const Contact = require("./models/Contact");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "https://debttesting.netlify.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.options("*", cors());

// ✅ Setup Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ---------- Career Endpoint ----------
app.post("/career", async (req, res) => {
  try {
    const data = req.body;
    const newUser = new User(data);
    const response = await newUser.save();

    if (!response) {
      return res.status(500).send({ error: "Cannot save the data" });
    }

    // 1️⃣ Email to owner
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIVER,
      subject: "New Career Application Received",
      text: `New career application:
Name: ${data.name}
Email: ${data.email}
Job Role: ${data.jobRole}
Mobile: ${data.mobile}`,
    });

    // 2️⃣ Confirmation email to applicant
  const confirmation =  await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "We received your application",
        html: `<p>Hi ${data.name},</p>
<p>Thank you for applying! We will review your application and contact you soon.</p>
<p>Best regards,<br>Lambodar Debt Solution</p>`
    });

console.log("Confirmation email sent:", confirmation);
    return res.status(200).send({ message: "Data saved and emails sent" });
  } catch (err) {
    console.error("Error saving career data:", err);
    res.status(500).send({ message: "Internal server issue" });
  }
});

// ---------- Contact Endpoint ----------
app.post("/contact", async (req, res) => {
  try {
    const { name, mobile, email, message } = req.body;

    if (!name || !mobile || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newContact = new Contact({ name, mobile, email, message });
    await newContact.save();

    // 1️⃣ Email to owner with details
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIVER,
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:
Name: ${name}
Phone: ${mobile}
Email: ${email}
Message: ${message}`,
    });

    // 2️⃣ Confirmation email to user
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},

Thank you for contacting us! We have received your message and will get back to you shortly.

Best regards,
Lambodar Debt Solution`,
    });

    res.status(200).json({ message: "Contact details saved and emails sent" });
  } catch (err) {
    console.error("Error handling contact form:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
