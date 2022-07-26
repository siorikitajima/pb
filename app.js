const express = require('express');
// require('dotenv').config();
const http = require('http');
const { render } = require('ejs');

const pageCotroller = require('./controllers/pageController');
const redirectController = require('./controllers/redirectController');

const app = express();
const port = 8100;
app.listen(port, (err) => {
    console.log('Omar listening')
})

app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// Req without Lang param >> Detects Japan based on IP
app.get('/', redirectController.home_get);
app.get('/about', redirectController.about_get);
app.get('/music', redirectController.music_get);
app.get('/art', redirectController.art_get);
app.get('/merch', redirectController.merch_get);
app.get('/contact', redirectController.contact_get);

// Req with Lang param
app.get('/:lang', pageCotroller.home_get);
app.get('/about/:lang', pageCotroller.about_get);
app.get('/music/:lang', pageCotroller.music_get);
app.get('/art/:lang', pageCotroller.art_get);
app.get('/merch/:lang', pageCotroller.merch_get);
app.get('/contact/:lang', pageCotroller.contact_get);

