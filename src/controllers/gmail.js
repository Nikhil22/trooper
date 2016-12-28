import { auth } from '../config.js';
import google from 'googleapis';

const gmail = google.gmail('v1');
const OAuth2 = google.auth.OAuth2;
const googleOauth2Client = new OAuth2(
    auth.google.id,
    auth.google.secret,
    auth.google.callbackUrl
);

const refreshAccessToken = ({ refreshToken }) => new Promise((resolve, reject) => {
    googleOauth2Client.setCredentials({
      refresh_token: refreshToken
    });

    googleOauth2Client.refreshAccessToken((err, tokens) => {
        if (!!err) {
            return reject(err);
        }

        return resolve(googleOauth2Client);
    });
});

const makeBody = ({ to, from, subject, message }) => {
    let str = ["Content-Type: text/plain; charset=\"UTF-8\"\n",
        "MIME-Version: 1.0\n",
        "Content-Transfer-Encoding: 7bit\n",
        "to: ", to, "\n",
        "from: ", from, "\n",
        "subject: ", subject, "\n\n",
        message
    ].join('');

    return new Buffer(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
};

const send = ({ googleId, refreshToken, emailDetails }) => new Promise((resolve, reject) => {
    let body = makeBody(emailDetails); // {to, from, subject, message}

    refreshAccessToken({refreshToken})
    .then((auth) => {
        gmail.users.messages.send({
           auth,
           userId: googleId,
           resource: { raw: body }
       }, (err, response) => {
           if (!!err) {
               return reject(err);
           }

           return resolve(response);
       });
    })
    .catch((err) => {
        return reject(err);
    });
});

export sendEmail = async () => {

};
