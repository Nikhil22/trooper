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

const productionDB = 'mysql://trooper:57oSLzV3aOT2Q0O1xgGVwQs9UBxcpgc2@mydbtrooper.cafiqfvpgyxf.us-west-2.rds.amazonaws.com:3306/mydbtrooper';
const devDB = 'sqlite:database.sqlite';

export const databaseUrl = process.env.DATABASE_URL || devDB;

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
    id: process.env.GOOGLE_CLIENT_ID || '909766734183-r9qkhpqhf5ehb1aghe9gu2q67tb0bt3b.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'cTYquTYdX0jyVQNVpcOvhGfk',
  },

};

export const db = {
  mongo: 'mongodb://domususer:H3*A#I#RvcIXmz8@ds013216.mlab.com:13216/domus',
};

export const stripe = {
    credential: 'sk_test_n5zHkYtbAfVYI53iMHoxw0GP'
};
