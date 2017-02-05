/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../../sequelize';

const User = Model.define('User', {

  id: {
    type: DataType.UUID,
    primaryKey: true,
  },

  refreshToken: {
    type: DataType.STRING(255),
  },

  googleId: {
    type: DataType.STRING,
  },

  email: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
  },

  emailConfirmed: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },

  displayName: {
      type: DataType.STRING(100),
  },

  picture: {
      type: DataType.STRING(255),
  },

  gender: {
      type: DataType.STRING(50),
  },

  location: {
      type: DataType.STRING(100),
  },

  website: {
      type: DataType.STRING(255),
  },

  stripe: {
      type: DataType.STRING(255)
  },
  phone: {
      type: DataType.STRING(255)
  },
}, {
  indexes: [
    { fields: ['email'] },
  ],

});

export default User;
