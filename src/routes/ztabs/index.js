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
import fetch from '../../core/fetch';

const title = 'Trooper';

export default {

  path: '/',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{me{id,email}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (!data /*|| !data.me*/) {
      return { redirect: '/login' };
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
