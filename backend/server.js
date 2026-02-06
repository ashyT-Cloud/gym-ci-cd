const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection (works in Docker Compose / K8s)
const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
} else {
  console.log("MongoDB connection skipped (no MONGO_URI)");
}

app.get("/", (req, res) => {
  res.send("🏋️ FitFlow Gym Backend Running");
});

app.get("/members", (req, res) => {
  res.json([
    { name: "Ash", plan: "Monthly", trainer: "Rahul" },
    { name: "Rohit", plan: "Annual", trainer: "Neha" }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

