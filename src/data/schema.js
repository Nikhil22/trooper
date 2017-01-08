/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
import events from './queries/events';

import createUserEvent from './mutations/createUserEvent';
import deleteUserEvent from './mutations/deleteUserEvent';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      events,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      createUserEvent,
      deleteUserEvent,
    },
  }),
});

export default schema;
