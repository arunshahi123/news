const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Upload Folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/news", require("./routes/news"));
app.use("/api/contact", require("./routes/contact")); // <-- Add this

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});