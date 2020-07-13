// create an express app
const express = require("express");
const app = express();

// define routing
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + '/public/about.html')
});

app.get("/aboutKoans", function (req, res) {
  res.sendFile(__dirname + '/public/aboutKoans.html')
});

app.get("/today", function (req, res) {
  res.sendFile(__dirname + '/public/today.html')
});

// use the express-static middleware
app.use(express.static("public"));

// start the server listening for requests
app.listen(process.env.PORT || 3000,
	() => console.log("Server is running..."));
