const serverless = require("serverless-http");
const express = require("express");
const mongoose =require('mongoose');
const app = express();
app.use(express.json());
app.use("/", require("./routes/welcomeRouter"));
app.use("/", require("./routes/calcRouter"));
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});
// Connect to mongodb
const URI = process.env.MONGODB_URL; 
mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});
module.exports.handler = serverless(app);
