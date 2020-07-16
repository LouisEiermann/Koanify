// create an express app
const express = require("express");
const connectDB = require('./DB/connection');
const bodyParser = require('body-parser');
const app = express();
const exphbs = require('express-handlebars');
const localKoans = require('./DB/Local');

connectDB();

// use middleware, including handlebars setup

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());

const Koans = require('./Api/Koans');

app.use('/api/Koans', Koans);

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// prepare dailyKoan for display

var counter = 0;

content = JSON.stringify(localKoans[counter].content);

// switch dailyKoan every 24 hours

var schedule = require('node-schedule');

var j = schedule.scheduleJob('0 0 * * *', function() {
  if (counter <= 8) {
    counter = counter + 1;
    content = JSON.stringify(localKoans[counter].content);
    console.log('Koan switched!');
  } else {
    counter = 0
    content = JSON.stringify(localKoans[counter].content);
    console.log('Koan switched!(playlist started anew)');
  }
});

// define routing with handlebars tempalte engine
app.get("/", (req, res) => res.render("index"));

app.get("/about", (req, res) => res.render("about"));

app.get("/aboutKoans", (req, res) => res.render("aboutKoans"));

app.get("/today", (req, res) => res.render("today", {
  content
}));

// static folder
app.use(express.static('public'));

// start the server listening for requests

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
