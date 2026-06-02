const express = require("express");
const router = express.Router();
const transporter = require("../mailer");
const Message = require("../models/Message");

router.post("/", async (req, res) => {
  console.log("Request received:", req.body);
  
  try {
    const message = await Message.create(req.body);

     const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message: ${req.body.subject}`,
     html: `
<div style="font-family: Arial, sans-serif">
  <h2>📩 New Portfolio Message</h2>

  <p><strong>Name:</strong> ${req.body.name}</p>
  <p><strong>Email:</strong> ${req.body.email}</p>
  <p><strong>Subject:</strong> ${req.body.subject}</p>

  <hr>

  <p>${req.body.message}</p>
</div>
`,
    });

    console.log("Mail sent:", info.messageId);

    res.status(201).json({
      success: true,
      data: message,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;