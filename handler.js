const serverless = require("serverless-http");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", require("./routes/welcomeRouter"));

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);
module.exports.handler = serverless(app);
