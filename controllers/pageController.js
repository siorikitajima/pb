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
    let rawdata1 = fs.readFileSync('./json/merch.json');
    let merchData = JSON.parse(rawdata1);
    res.render('merch', { 
        title: 'Merch', 
        nav:'merch', 
        slug: 'merch',
        language: language,
        pageData: pageData,
        merchData: merchData
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

const thanku_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    res.render('thanku', { 
        title: 'ThankU', 
        nav:'thanku', 
        slug: 'thanku',
        language: language,
        pageData: pageData
    });
};

const error_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    res.render('error', { 
        title: 'Error', 
        nav:'error', 
        slug: 'error',
        language: language,
        pageData: pageData
    });
};

const artists_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/artists.json');
    let artistsData = JSON.parse(rawdata1);
    res.render('artists', { 
        title: 'Artists', 
        nav:'artists', 
        slug: 'artists',
        language: language,
        pageData: pageData,
        artists: artistsData.artists
    });
};

const tools_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/tools.json');
    let toolData = JSON.parse(rawdata1);
    res.render('tools', { 
        title: 'Tools', 
        nav:'tools', 
        slug: 'tools',
        language: language,
        pageData: pageData,
        toolData: toolData
    });
};

const apps_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolio.json');
    let appsData = JSON.parse(rawdata1);
    res.render('apps', { 
        title: 'Apps', 
        nav:'apps', 
        slug: 'apps',
        language: language,
        pageData: pageData,
        appsData: appsData
    });
};

module.exports = {
    // lang_post,
    home_get,
    about_get,
    music_get,
    art_get,
    merch_get,
    contact_get,
    thanku_get,
    error_get,
    artists_get,
    tools_get,
    apps_get
}