const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/", require("./routes/welcomeRouter"));

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

 
module.exports.handler = serverless(app);
