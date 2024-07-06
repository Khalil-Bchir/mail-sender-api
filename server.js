// server.js

const express = require('express');
const cors = require('cors')
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// Route to send email
app.post('/api/send-email', async (req, res) => {
    const { sender, recipient, subject, html } = req.body;

    // Create a transporter object using the SMTP transport
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Email options
    const mailOptions = {
        from: sender,
        to: recipient,
        subject: subject,
        html: html,
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.status(200).send({ message: 'Email sent successfully', info });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: 'Failed to send email', error });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
