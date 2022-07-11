const express = require('express');
// require('dotenv').config();
var http = require("http");

const { render } = require('ejs');
// const pfCotroller = require('./controllers/portfolioController');

const app = express();
const port = 8100;
app.listen(port, (err) => {
    console.log('Omar listening')
})

app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home', nav: 'home', slug:'' });
})

