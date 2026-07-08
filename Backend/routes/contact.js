const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(__dirname, "../data/contacts.json");

// Read Messages
const readMessages = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data || "[]");
  } catch (err) {
    return [];
  }
};

// Save Messages
const writeMessages = (messages) => {
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
};

// GET ALL MESSAGES
router.get("/", (req, res) => {
  res.json(readMessages());
});

// SAVE MESSAGE
router.post("/", (req, res) => {
  const messages = readMessages();

  const newMessage = {
    id: Date.now(),
    fullName: req.body.fullName,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
    date: new Date().toISOString(),
  };

  messages.unshift(newMessage);

  writeMessages(messages);

  res.status(201).json({
    message: "Message sent successfully",
  });
});

// DELETE MESSAGE
router.delete("/:id", (req, res) => {
  const messages = readMessages();

  const filtered = messages.filter(
    (msg) => msg.id != req.params.id
  );

  writeMessages(filtered);

  res.json({
    message: "Message deleted",
  });
});

module.exports = router;