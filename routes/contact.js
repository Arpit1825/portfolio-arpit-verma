const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  console.log("Request received:", req.body);
  
  try {
    const message = await Message.create(req.body);

     const info = await resend.emails.send({
  from: "onboarding@resend.dev",
  to: "av6821246@gmail.com",
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
    console.error("MAIL ERROR :",err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;