/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';
import { User } from './user';
import { Client, ClientProfile } from './client';
import { Company, CompanyProfile } from './company';
import Rating from './rating';
import Event from './event';

/*
  One user can have multiple ratings.
  Rating table will have a foreign key 'userId'
*/
User.hasMany(Rating, {
  foreignKey: 'userId',
  as: 'ratings',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

/*
  One user can have multiple events.
  Event table will have a foreign key 'userId'
*/
User.hasMany(Event, {
  foreignKey: 'userId',
  as: 'events',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

/*
  One user belongs to many clients. i.e, many clients have the same user
  One client belongs to many clients. i.e many users have the same client
  This will create a new model/table called UserClient with the equivalent
    foreign keys clentId and userId
*/
User.belongsToMany(Client, {
  through: 'UserClient',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'clients',
});

Client.belongsToMany(User, {
  through: 'UserClient',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'users',
});

/* One client has one profile */
Client.hasOne(ClientProfile, {
  foreignKey: 'clientId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

/*
  One client has many ratings
  Rating table will have a foreign key 'clientId'
*/
Client.hasMany(Rating, {
  foreignKey: 'clientId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'ratings',
});

/*
  One company has many users (employees)
  User table will have a foreign key 'companyId'
*/
Company.hasMany(User, {
  foreignKey: 'companyId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'users',
});

/* One company has one profile */
Company.hasOne(CompanyProfile, {
  foreignKey: 'companyId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});


function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User, Client, ClientProfile, Rating, Company, Event };
