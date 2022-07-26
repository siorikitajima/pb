const fs = require('fs');

const home_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    res.render('index', { 
        title: 'Hello', 
        nav:'home', 
        slug: '',
        language: language,
        pageData: pageData
    });
};

const about_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/artists.json');
    let artistsData = JSON.parse(rawdata1);
    res.render('about', { 
        title: 'About', 
        nav:'about', 
        slug: 'about',
        language: language,
        pageData: pageData,
        artists: artistsData.artists
    });
};

const music_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    res.render('music', { 
        title: 'Music', 
        nav:'music', 
        slug: 'music',
        language: language,
        pageData: pageData
    });
};

const art_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    res.render('art', { 
        title: 'Art', 
        nav:'art', 
        slug: 'art',
        language: language,
        pageData: pageData
    });
};

const merch_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    res.render('merch', { 
        title: 'Merch', 
        nav:'merch', 
        slug: 'merch',
        language: language,
        pageData: pageData
    });
};

const contact_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    res.render('contact', { 
        title: 'Contact', 
        nav:'contact', 
        slug: 'contact',
        language: language,
        pageData: pageData
    });
};

module.exports = {
    // lang_post,
    home_get,
    about_get,
    music_get,
    art_get,
    merch_get,
    contact_get
}