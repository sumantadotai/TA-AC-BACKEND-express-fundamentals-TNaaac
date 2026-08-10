const express = require("express");

const app = express();

app.use((res, req, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send(" Welcome to Express");
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
