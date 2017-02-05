/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

import passport from 'passport';
import { User } from '../data/models';
import { auth as config } from '../config';

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: config.google.id,
  clientSecret: config.google.secret,
  callbackURL: '/login/google/return/',
  passReqToCallback: true,
  profileFields: ['displayName', 'email'],
},
  (req, accessToken, refreshToken, profile, done) => {
    const fooBar = async () => {
      if (req.user) {
        const userLogin = await User.findOne({
          where: { googleId: profile.id },
        });
        if (userLogin) {
          // There is already a Google account that belongs to you.
          // Sign in with that account or delete it, then link it with your current account.
          done();
        } else {
          const user = await User.create({
            id: req.user.id,
            email: profile.emails[0].value,
            displayName: profile.displayName,
            gender: profile._json.gender,
            googleId: profile.id,
          }, {
          });
          done(null, {
            id: user.id,
            email: user.email,
          });
        }
      } else {
        const users = await User.findAll({
          where: { googleId: profile.id },
        });
        if (users.length) {
          const user = users[0];
          await User.update(
              {email: profile.emails[0].value},
              {where: {id: user.id}}
          )
          done(null, {
            id: user.id,
            email: user.email,
          });
        } else {
          let user = await User.findOne({ where: { email: profile._json.email } });
          if (user) {
            // There is already an account using this email address. Sign in to
            // that account and link it with Google manually from Account Settings.
            done(null);
          } else {
            user = await User.create({
              email: profile._json.email,
              emailConfirmed: true,
              displayName: profile.displayName,
              gender: profile._json.gender,
              refreshToken: refreshToken,
              googleId: profile.id,
            });
            done(null, {
              id: user.id,
              email: user.email,
            });
          }
        }
      }
    };
    fooBar().catch(done);
  },
));

export default passport;
