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
import middleware from '../../routing-middleware/login.middleware';

const title = 'Log In';

export default {

  path: '/login',

  async action() {
    const shouldRedirect = await middleware();
    if (shouldRedirect) {
      return shouldRedirect;
    }
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
