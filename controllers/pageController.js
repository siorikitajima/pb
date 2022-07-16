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
    let rawdata1 = fs.readFileSync('./json/artists.json');
    let artistsData = JSON.parse(rawdata1);
    res.render('music', { 
        title: 'Music', 
        nav:'music', 
        slug: 'music',
        language: language,
        pageData: pageData,
        artists: artistsData.artists
    });
};

const art_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/artists.json');
    let artistsData = JSON.parse(rawdata1);
    res.render('art', { 
        title: 'Art', 
        nav:'art', 
        slug: 'art',
        language: language,
        pageData: pageData,
        artists: artistsData.artists
    });
};

module.exports = {
    // lang_post,
    home_get,
    about_get,
    music_get,
    art_get
}