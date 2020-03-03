var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("hello world");
});
app.post("/", function(req, res) {
  console.log(req.body);
  res.send("POST request to the homepage");
});

app.listen(3000);
