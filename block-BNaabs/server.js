const express = require("express");
const cookie = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlexcoded({extended: false}));
app.use(logged("deb"));
app.use(express.static(__dirname+"/public"));

app.get("/", (req, res)=>{
    req.sendFile(__dirname+ "/index.html");
});

app.get("/new", (req, res)=>{
    req.sendFile(___dirname+"/new.html");
});

app.post("/new". (req, res)=>{
    res.json(req.body);
});


app.get("/users/:username", (req, res) => {
  let username = req.params.username;
  res.send(username);
});



app.listen(3000, ()=>{
    console.log("Server listening on Port 3000");
})