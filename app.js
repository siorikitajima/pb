const express = require('express');
// require('dotenv').config();
const http = require('http');
const { render } = require('ejs');

const pageCotroller = require('./controllers/pageController');
const redirectController = require('./controllers/redirectController');
const contactController = require('./controllers/contactController');

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
app.get('/thanku', redirectController.contact_get);
app.get('/error', redirectController.error_get);
app.get('/artists', redirectController.artists_get);
app.get('/tools', redirectController.tools_get);
app.get('/apps', redirectController.apps_get);

// Post Req
app.post('/contact/:lang', contactController.contact_post);

// Req with Lang param
app.get('/:lang', pageCotroller.home_get);
app.get('/about/:lang', pageCotroller.about_get);
app.get('/music/:lang', pageCotroller.music_get);
app.get('/art/:lang', pageCotroller.art_get);
app.get('/merch/:lang', pageCotroller.merch_get);
app.get('/contact/:lang', pageCotroller.contact_get);
app.get('/thanku/:lang', pageCotroller.thanku_get);
app.get('/error/:lang', pageCotroller.error_get);
app.get('/artists/:lang', pageCotroller.artists_get);
app.get('/tools/:lang', pageCotroller.tools_get);
app.get('/apps/:lang', pageCotroller.apps_get);


