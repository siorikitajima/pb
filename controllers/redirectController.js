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

    let url = '/about/' + lang;
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

    let url = '/music/' + lang;
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

    let url = '/art/' + lang;
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

    let url = '/merch/' + lang;
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

    let url = '/contact/' + lang;
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

    let url = '/thanku/' + lang;
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

    let url = '/error/' + lang;
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

    let url = '/artists/' + lang;
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

    let url = '/tools/' + lang;
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

    let url = '/apps/' + lang;
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

    let url = '/multimedia/' + lang;
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

    let url = '/dataviz/' + lang;
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

    let url = '/portfolios/' + lang;
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
    dataviz_get
}