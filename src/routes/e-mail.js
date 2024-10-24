const express = require('express');
const { sendEmail } = require('../services/api');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, results } = req.body;
  try {
    await sendEmail(email, results);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
});

module.exports = router; 


