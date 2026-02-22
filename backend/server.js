require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
const db = require("./db");

// Models
const { User } = require("./models/User");
const Contact = require("./models/Contact");

const app = express();
const PORT = process.env.PORT || 5000;

/* =====================================================
   ✅ BODY PARSING (VERY IMPORTANT FIX)
   ===================================================== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =====================================================
   ✅ CORS CONFIG
   ===================================================== */
app.use(
  cors({
    origin: [
      "https://shreyaloansandfinance.com",
      "https://www.shreyaloansandfinance.com",
      "https://lambodardebtsolution.netlify.app", // optional backup
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

/* =====================================================
   ✅ RESEND EMAIL SETUP
   ===================================================== */
const resend = new Resend(process.env.RESEND_API_KEY);

/* =====================================================
   ---------- CAREER ENDPOINT ----------
   ===================================================== */
app.post("/career", async (req, res) => {
  try {
    const data = req.body;

    console.log("BODY RECEIVED:", data); // debug (can remove later)

    const newUser = new User(data);
    const response = await newUser.save();

    if (!response) {
      return res.status(500).send({ error: "Cannot save the data" });
    }

    // Email to owner
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

    // Confirmation email to applicant
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "We received your application",
      html: `<p>Hi ${data.name},</p>
<p>Thank you for applying! We will review your application and contact you soon.</p>
<p>Best regards,<br>Shreya Loans and Finance</p>`,
    });


    return res.status(200).send({
      message: "Data saved and emails sent",
    });
  } catch (err) {
    console.error("Error saving career data:", err);
    res.status(500).send({ message: "Internal server issue" });
  }
});

/* =====================================================
   ---------- CONTACT ENDPOINT ----------
   ===================================================== */
app.post("/contact", async (req, res) => {
  try {
    const { name, mobile, email, message } = req.body;

    if (!name || !mobile || !email || !message) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const newContact = new Contact({
      name,
      mobile,
      email,
      message,
    });

    await newContact.save();

    // Email to owner
  await resend.emails.send({
  from: `Shreya Loans <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_RECIVER,
  subject: "New Contact Form Submission",
  text: `You have a new contact form submission:
Name: ${name}
Phone: ${mobile}
Email: ${email}
Message: ${message}`,
});

console.log("OWNER MAIL RESPONSE:", ownerMail);

    // Confirmation email to user
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},

Thank you for contacting us! We have received your message and will get back to you shortly.

Best regards,
Shreya Loans and Finance`,
    });

    res.status(200).json({
      message: "Contact details saved and emails sent",
    });
  } catch (err) {
    console.error("Error handling contact form:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

/* =====================================================
   ✅ START SERVER
   ===================================================== */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
