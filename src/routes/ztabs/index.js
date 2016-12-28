/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ZHeader from '../../components/ZHeader';
import ZTabs from '../../components/ZTabs';
import middleware from '../../routing-middleware/ztabs.middleware';

const title = 'Trooper';

export default {

  path: '/',

  async action() {
    const shouldRedirect = await middleware();
    if (shouldRedirect) {
      return shouldRedirect;
    }
    return {
      title,
      component: (
        <div>
          <ZHeader in />
          <ZTabs />
        </div>
      ),
    };
  },

};
