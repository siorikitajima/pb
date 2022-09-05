const express = require('express');
// require('dotenv').config();
const http = require('http');
const { render } = require('ejs');

const pageCotroller = require('./controllers/pageController');
const redirectController = require('./controllers/redirectController');
const contactController = require('./controllers/contactController');

const app = express();
// const port = 8100; // Dev
const port = 3100; // Prod
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
app.get('/multimedia', redirectController.multimedia_get);
app.get('/dataviz', redirectController.dataviz_get);
app.get('/portfolios', redirectController.portfolios_get);
app.get('/portfolio/:id', redirectController.portfolio_get);
app.get('/category', redirectController.category_get);


// Post Req
app.post('/:lang/contact', contactController.contact_post);

// Req with Lang param
app.get('/:lang', pageCotroller.home_get);
app.get('/:lang/about', pageCotroller.about_get);
app.get('/:lang/music', pageCotroller.music_get);
app.get('/:lang/art', pageCotroller.art_get);
app.get('/:lang/merch', pageCotroller.merch_get);
app.get('/:lang/contact', pageCotroller.contact_get);
app.get('/:lang/thanku', pageCotroller.thanku_get);
app.get('/:lang/error', pageCotroller.error_get);
app.get('/:lang/artists', pageCotroller.artists_get);
app.get('/:lang/tools', pageCotroller.tools_get);
app.get('/:lang/apps', pageCotroller.apps_get);
app.get('/:lang/multimedia', pageCotroller.multimedia_get);
app.get('/:lang/dataviz', pageCotroller.dataviz_get);
app.get('/:lang/portfolios', pageCotroller.portfolios_get);
app.get('/:lang/category', pageCotroller.category_get);


// Portfolio items
app.get('/:lang/portfolio/:id', pageCotroller.portfolio_get);

app.get('*', redirectController.fourohfour_get);

