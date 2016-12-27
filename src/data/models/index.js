/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';
import { User, UserProfile, UserClaim, UserLogin } from './user';
import { Client, ClientProfile } from './client';
import { Company, CompanyProfile } from './company';
import { Rating } from './rating';
import { Event } from './event';

User.hasMany(UserLogin, {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.hasMany(UserClaim, {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.hasMany(Rating, {
  foreignKey: 'userId',
  as: 'ratings',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.hasOne(UserProfile, {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.belongsToMany(Client, {
  through: 'UserClient',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'client',
});

Client.belongsToMany(User, {
  through: 'UserClient',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'user',
});

Client.hasOne(ClientProfile, {
  foreignKey: 'clientId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

Client.hasMany(Rating, {
  through: 'ClientRating',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'rating',
});

Company.hasMany(User, {
  through: 'CompanyUser',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'user',
});

Company.hasMany(Client, {
  through: 'CompanyClient',
  onUpdate: 'cascade',
  onDelete: 'cascade',
  as: 'client',
});

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
export { User, UserLogin, UserClaim, UserProfile, Client, ClientProfile, Rating, Company, Event };
