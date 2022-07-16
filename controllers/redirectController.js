var geoip = require('geoip-lite');

const home_get = async (req, res) => {
    let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/' + lang;
    res.redirect( url );
};

const about_get = async (req, res) => {
    let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/about/' + lang;
    res.redirect( url );
};

const music_get = async (req, res) => {
    let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/music/' + lang;
    res.redirect( url );
};

const art_get = async (req, res) => {
    let loc = geoip.lookup('60.77.210.96');
    // let loc = geoip.lookup(req.ip);
    let lang;
    if (loc.country == 'JP') { lang = 'jp' }
    else { lang = 'en' }

    let url = '/art/' + lang;
    res.redirect( url );
};

module.exports = {
    home_get,
    about_get,
    music_get,
    art_get
}