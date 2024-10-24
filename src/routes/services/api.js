const nodemailer = require('nodemailer');

const sendEmail = async (recipient, results) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password',
    },
  });

  let info = await transporter.sendMail({
    from: '"Knowledge Base" <your_email@gmail.com>',
    to: recipient,
    subject: 'Your Search Results',
    text: JSON.stringify(results, null, 2), // format results into the email
  });

  console.log('Message sent: %s', info.messageId);
};

module.exports = { sendEmail }; 


