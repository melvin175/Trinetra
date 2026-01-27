// Simple Node.js/Express backend API endpoint for sending emails
// Install dependencies: npm install express nodemailer cors dotenv
// Run: node server/contact-api.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
// For Gmail, you'll need to create an App Password: https://support.google.com/accounts/answer/185833
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { to, from, fromName, subject, html, text } = req.body;

    // Validate required fields
    if (!to || !from || !fromName || !subject || !text) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email
    const mailOptions = {
      from: `"${fromName}" <${process.env.EMAIL_USER}>`,
      to: to,
      replyTo: from,
      subject: subject,
      html: html,
      text: text,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Contact API endpoint: http://localhost:${PORT}/api/contact`);
});
