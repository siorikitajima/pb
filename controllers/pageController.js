const fs = require('fs');

const home_get = async (req, res) => {
    language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    res.render('index', { 
        title: 'Home', 
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
    res.render('about', { 
        title: 'About', 
        nav:'about', 
        slug: 'about',
        language: language,
        pageData: pageData
    });
};

module.exports = {
    // lang_post,
    home_get,
    about_get
}