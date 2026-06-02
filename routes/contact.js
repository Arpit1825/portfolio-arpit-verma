const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

router.post("/", async (req, res) => {
  console.log("Request received:", req.body);

  try {
    const message = await Message.create(req.body);

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