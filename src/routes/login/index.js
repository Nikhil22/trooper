/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Login from './Login';
import ZHeader from '../../components/ZHeader';

const title = 'Log In';

export default {

  path: '/login',

  action() {
    return {
      title,
      component: (
        <div>
          <ZHeader plain />
          <Login title={title} />
        </div>
      ),
    };
  },

};
