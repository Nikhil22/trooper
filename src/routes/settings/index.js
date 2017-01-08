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
import ZSettings from '../../components/ZSettings';
import middleware from '../../routing-middleware/ztabs.middleware';
import settings from '../../routing-middleware/zsettings.middleware';

const title = 'Settings';

function sectionSettingsData ({ userData }) {
    let data = {
        personalInfo: {},
        creditCard: {}
    };

    if (!!userData) {
        data.personalInfo.name = userData.profile.displayName;
        data.personalInfo.email = userData.email;
        data.personalInfo.phone = userData.profile.phone;
    }

    return data;
};

export default {
    path: '/settings',

    async action() {
        // TODO: debug
        //const shouldRedirect = await middleware();
        let userData = await settings();
        userData = sectionSettingsData({userData});

        /*if (shouldRedirect) {
            return shouldRedirect;
        }*/
        return {
            title,
            component: (
            <div>
            <ZHeader in/>
            <ZSettings {... userData}/>
            </div>
            ),
        };
    }
};
