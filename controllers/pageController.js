const fs = require('fs');
const { language } = require('googleapis/build/src/apis/language');

const home_get = async (req, res) => {
    let language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolios.json');
    let portfoliosData = JSON.parse(rawdata1);
    if(language !== 'en' && language !== 'jp') {
        res.redirect('404/notfound');
    } else {
        res.render('index', { 
            title: 'Hello', 
            nav:'home', 
            slug: '',
            language: language,
            pageData: pageData,
            portfoliosData: portfoliosData
        });
    }
};

const about_get = async (req, res) => {
    let language = req.params.lang;
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
    let language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolios.json');
    let portfoliosData = JSON.parse(rawdata1);
    res.render('music', { 
        title: 'Music', 
        nav:'music', 
        slug: 'music',
        language: language,
        pageData: pageData,
        portfoliosData: portfoliosData
    });
};

const art_get = async (req, res) => {
    let language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolios.json');
    let portfoliosData = JSON.parse(rawdata1);
    res.render('art', { 
        title: 'Art', 
        nav:'art', 
        slug: 'art',
        language: language,
        pageData: pageData,
        portfoliosData: portfoliosData
    });
};

const merch_get = async (req, res) => {
    let language = req.params.lang;
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
    let language = req.params.lang;
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
    let language = req.params.lang;
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
    let language = req.params.lang;
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
    let language = req.params.lang;
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
    let language = req.params.lang;
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
    let language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolios.json');
    let portfoliosData = JSON.parse(rawdata1);
    res.render('apps', { 
        title: 'Apps', 
        nav:'apps', 
        slug: 'apps',
        language: language,
        pageData: pageData,
        portfoliosData: portfoliosData
    });
};

const multimedia_get = async (req, res) => {
    let language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolios.json');
    let portfoliosData = JSON.parse(rawdata1);
    res.render('multimedia', { 
        title: 'Multimedia', 
        nav:'multimedia', 
        slug: 'multimedia',
        language: language,
        pageData: pageData,
        portfoliosData: portfoliosData
    });
};

const dataviz_get = async (req, res) => {
    let language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolios.json');
    let portfoliosData = JSON.parse(rawdata1);
    res.render('dataviz', { 
        title: 'Data Viz', 
        nav:'multdatavizmedia', 
        slug: 'dataviz',
        language: language,
        pageData: pageData,
        portfoliosData: portfoliosData
    });
};

const portfolios_get = async (req, res) => {
    let language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolios.json');
    let portfoliosData = JSON.parse(rawdata1);
    res.render('portfolios', { 
        title: 'Portfolios', 
        nav:'portfolios', 
        slug: 'portfolios',
        language: language,
        pageData: pageData,
        portfoliosData: portfoliosData,
        category: false
    });
};

const portfolio_get = async (req, res) => {

    let theid = req.params.id;
    let language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolios.json');
    let portfoliosData = JSON.parse(rawdata1);
    let rawdata2 = fs.readFileSync('./json/portfolio.json');
    let portfolioData = JSON.parse(rawdata2);
    let theItem, pftitle, tags, nextId, prevId, thumb;
    for (let p = 0; p < portfoliosData.portfolio.length; p++) {
        if (portfoliosData.portfolio[p].portfolioId == theid) {
            pftitle = portfoliosData.portfolio[p].portfolioName;
            tags = portfoliosData.portfolio[p].portfolioClasses;
            thumb = portfoliosData.portfolio[p].bgImage;
            if(p == portfoliosData.portfolio.length-1) {
                nextId = portfoliosData.portfolio[0].portfolioId;;
            } else {
                nextId = portfoliosData.portfolio[p+1].portfolioId;
            }
            if(p == 0) {
                let last = Number(portfoliosData.portfolio.length - 1);
                prevId = portfoliosData.portfolio[last].portfolioId;
            } else {
                prevId = portfoliosData.portfolio[p-1].portfolioId;
            }
            break;
        }
    }
    for (let p = 0; p < portfolioData.portfolio.length; p++) {
        if (portfolioData.portfolio[p].id == theid) {
            theItem = portfolioData.portfolio[p];
            break;
        }
    }
    // Remove Featured classes from the tag list
    tags =  tags.split(' ');
    generalTags = [ 'featured', 'musicfeat', 'artfeat'];
    for(let t =0; t< tags.length; t++) {
        for (let g =0; g < generalTags.length; g++) {
            if (tags[t] == generalTags[g]) {
                tags.splice(t, 1);
            }
        }
    }
    res.render('portfolio', { 
        title: 'Portfolio', 
        nav:'portfolio', 
        slug: 'portfolio',
        language: language,
        pageData: pageData,
        portfoliosData: portfoliosData,
        theid: theid,
        pftitle: pftitle,
        tags: tags,
        thumb: thumb,
        nextId: nextId,
        prevId: prevId,
        theItem: theItem
        });

};

const category_get = async (req, res) => {
    let categ = req.query.categ;
    let language = req.params.lang;
    let rawdata = fs.readFileSync('./json/pages.json');
    let pageData = JSON.parse(rawdata);
    let rawdata1 = fs.readFileSync('./json/portfolios.json');
    let portfoliosData = JSON.parse(rawdata1);
    res.render('portfolios', { 
        title: 'Portfolios', 
        nav:'portfolios', 
        slug: 'portfolios',
        language: language,
        pageData: pageData,
        portfoliosData: portfoliosData,
        categ: categ,
        category: true
    });
}




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
    apps_get,
    multimedia_get,
    portfolios_get,
    portfolio_get,
    dataviz_get,
    category_get
}