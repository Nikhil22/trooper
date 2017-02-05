/**
* React Starter Kit (https://www.reactstarterkit.com/)
*
* Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
    GraphQLString as StringType,
    GraphQLNonNull as NonNull,
    GraphQLList as List,
} from 'graphql';

import EventType from './EventType';

const UserType = new ObjectType({
    name: 'User',
    fields: {
        id: { type: new NonNull(ID) },
        email: { type: StringType },
        events: { type: new List(EventType) },
        displayName: { type: StringType },
        picture: { type: StringType },
        gender: { type: StringType },
        location: { type: StringType },
        website: { type: StringType },
        phone: { type: StringType },
        stripe: { type: StringType },
        googleId: {type: StringType },
        refreshToken: { type: StringType },
    },
});

export default UserType;
