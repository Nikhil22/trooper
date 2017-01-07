/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '719072412358-ior47ba99r1v0ua5dvnbnfbhd2hdgv3r.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'vUlNadqacN0C1TCgN1rTPY92',
  },

};

export const db = {
  mongo: 'mongodb://domususer:H3*A#I#RvcIXmz8@ds013216.mlab.com:13216/domus',
};
