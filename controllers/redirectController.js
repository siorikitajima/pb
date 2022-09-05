var geoip = require('geoip-lite');

const home_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    let loc = geoip.lookup(ip) || 'US';
    console.log(ip, loc.country);
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang;
    res.redirect( url );
};

const about_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/about';
    res.redirect( url );
};

const music_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/music';
    res.redirect( url );
};

const art_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/art';
    res.redirect( url );
};

const merch_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/merch';
    res.redirect( url );
};

const contact_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/contact';
    res.redirect( url );
};

const thanku_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/thanku';
    res.redirect( url );
};

const error_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
    let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/error';
    res.redirect( url );
};

const artists_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
        // let loc = geoip.lookup(req.ip);
        let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/artists';
    res.redirect( url );
};

const tools_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
        // let loc = geoip.lookup(req.ip);
        let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/tools';
    res.redirect( url );
};

const apps_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
        // let loc = geoip.lookup(req.ip);
        let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/apps';
    res.redirect( url );
};

const multimedia_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
        // let loc = geoip.lookup(req.ip);
        let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/multimedia';
    res.redirect( url );
};

const dataviz_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
        // let loc = geoip.lookup(req.ip);
        let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        let loc = geoip.lookup(ip) || 'US';;
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/dataviz';
    res.redirect( url );
};

const portfolios_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);

        let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        let loc = geoip.lookup(ip) || 'US';;
        let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/portfolios';
    res.redirect( url );
};

const portfolio_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
        let ogUrl = req.url;
        let ids = ogUrl.split('/');
        let id = ids[2];
        let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        let loc = geoip.lookup(ip) || 'US';;
        let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }
    console.log(ids, id, loc, lang, ogUrl);

    let url = '/' + lang + '/portfolio/' + id;
    res.redirect( url );
};

const category_get = async (req, res) => {
    // let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);

        let key = req.query.categ;
        let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        let loc = geoip.lookup(ip) || 'US';;
        let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang + '/category?categ=' + key;
    res.redirect( url );
};

module.exports = {
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
    dataviz_get,
    portfolio_get,
    category_get
}