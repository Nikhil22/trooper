import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import EventType from '../types/EventType';
import Event from '../models/event';

const createUserEvent = {
  type: EventType,
  args: {
    clientEmail: { type: StringType },
    endDate: { type: new NonNull(StringType) },
  },
  resolve({ request }) {
    const variables = request.body.variables;
    return request.user && Event.create({
      endDate: variables.endDate,
      clientEmail: variables.clientEmail,
      userId: request.user.id,
    });
  },
};

export default createUserEvent;
