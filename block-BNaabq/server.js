const express = require("express");
const logger = require("morgan");
const cookie = require("cookie-parser");

const app = express();

app.use(logger("tiny"));
app.use(cookie());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ exteded: false }));

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use("/about", (req, res, next) => {
  res.cookie("username", "Sumanta");
  res.end("About Page");
});

app.listen(3000, () => {
  console.log("Server listening to port 3000");
});