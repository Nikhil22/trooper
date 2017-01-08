import {
  GraphQLString as StringType,
  GraphQLList as List,
} from 'graphql';
import EventType from '../types/EventType';
import Event from '../models/event';

const deleteUserEvent = {
  type: EventType,
  args: {
    ids: { type: new List(StringType) },
  },
  resolve({ request }) {
    const variables = request.body.variables;
    return request.user && Event.destroy({
      where: {
        id: variables.ids,
      },
    });
  },
};

export default deleteUserEvent;
