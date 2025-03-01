require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendMail({ from, to, subject, text, html }) {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        });

        let info = await transporter.sendMail({
            from: `inshare <${from}>`,
            to: to,
            subject: subject,
            text: text,
            html: html
        });

        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

module.exports = sendMail;