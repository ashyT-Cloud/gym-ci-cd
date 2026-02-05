const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB will be enabled when running via Docker/Kubernetes
console.log("MongoDB connection will be enabled in containerized setup");


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
