const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const dotenv = require("dotenv");
dotenv.config();

const contact_post = (req, res) => {
    language = req.params.lang;
    const GMAIL_USER = process.env.GMAIL_USER;
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = process.env.REDIRECT_URI;
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })


    async function sendMail() {
        try {
            const accessToken = await oAuth2Client.getAccessToken()

            const smtpTrans = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: GMAIL_USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
                
            }
            })
        
            let mailOpts;
            if(language == 'jp') {
                mailOpts = {
                from: `${req.body.email}`,
                // to: `info@patternbased.com, ${req.body.email}`,
                to: `siori@patternbased.com, ${req.body.email}`,
                subject: `[PatternBased] お問合せありがとうございます。`,
                text: `PatternBased.comへのお問合せありがとうございました。通常２−３営業日以内にご返信いたしております。 \n\nName: ${req.body.name}\n\nEmail: ${req.body.email}\n\nMessage: ${req.body.message}\n\n`,
                html: `<div style="width: 100%; height: 100%; text-align: center; background: #222; color: #fff; padding-bottom: 30px;">
                <a href="https://patternbased.com"><img src="https://patternbased.s3.us-east-1.amazonaws.com/PatternBased_Logo_FB3640.png" alt="PatternBased Catalog" style="width: 200px; margin: 38px auto;"></a>
                <div style="width: auto; max-width: 600px; background: #f2f2f2; color:#222; text-align: center; font-family:GCentra,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; margin: 0 auto; border-radius: 5px; line-height: 1.4em; padding: 30px 20px;">
                <h2>THANK YOU FOR YOUR REQUEST</h2>
                <p">${req.body.name} さま<br/>PatternBased.comへのお問合せありがとうございました。<br/>通常２−３営業日以内にご返信いたしております。<br/><br/>
                <b>Name: </b>${req.body.name}<br/><br/>
                <b>Email: </b>${req.body.email}<br/><br/>
                <b>Message: </b>${req.body.message}</p>
                </div>
                  <p style="padding: 30px 0 0 0;">
                      <a href="https://patternbased.com/" style="text-decoration: underline; color: #ddd;">PatternBased </a>
                      <span style="width:10px; display: inline-block;"></span>
                      <a href="https://legal.patternbased.com/privacy-policy/" style="text-decoration: underline; color: #ddd;"> Privacy Policy</a><br/><br/>
                      &copy; Copyright 2022 PatternBased LLC
                  </p>
              </div>`
                }
            } else {
                mailOpts = {
                    from: `${req.body.email}`,
                    to: `info@patternbased.com, siori@patternbased.com, ${req.body.email}`,
                    subject: `[PatternBased] Thank you for your Message, ${req.body.name}`,
                    text: `Thank you for your message to PatternBased.com. We will get back to you shortly. \n\nName: ${req.body.name}\n\nEmail: ${req.body.email}\n\nMessage: ${req.body.message}\n\n`,
                    html: `<div style="width: 100%; height: 100%; text-align: center; background: #222; color: #fff; padding-bottom: 30px;">
                <a href="https://patternbased.com"><img src="https://patternbased.s3.us-east-1.amazonaws.com/PatternBased_Logo_FB3640.png" alt="PatternBased Catalog" style="width: 200px; margin: 38px auto;"></a>
                <div style="width: auto; max-width: 600px; background: #f2f2f2; color:#222; text-align: center; font-family:GCentra,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; margin: 0 auto; border-radius: 5px; line-height: 1.4em; padding: 30px 20px;">
                <h2>THANK YOU FOR YOUR REQUEST</h2>
                <p">Dear ${req.body.name}, <br/>Thank you for your message to PatternBased.com. <br/>We will get back to you shortly.<br/><br/>
                <b>Name: </b>${req.body.name}<br/><br/>
                <b>Email: </b>${req.body.email}<br/><br/>
                <b>Message: </b>${req.body.message}</p>
                </div>
                  <p style="padding: 30px 0 0 0; color: #888">
                      <a href="https://patternbased.com/" style="text-decoration: underline; color: #ddd;">PatternBased </a>
                      <span style="width:10px; display: inline-block;"></span>
                      <a href="https://legal.patternbased.com/privacy-policy/" style="text-decoration: underline; color: #ddd;"> Privacy Policy</a><br/><br/>
                      &copy; Copyright 2022 PatternBased Corp
                  </p>
              </div>`
                    }
            }

            const result = await smtpTrans.sendMail(mailOpts);
            return result

        } catch(error) {
            return error
        }
    }
    sendMail()
    .then(result => {
        console.log('Email sent...', result)
        res.redirect(`/thanku/${language}`)
    })
    .catch(error => {
        console.log(error.message)
        res.redirect(`/error/${language}`)
    })
}

module.exports = {
    contact_post
}