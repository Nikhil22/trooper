import { GraphQLList as List } from 'graphql';
import EventType from '../types/EventType';
import Event from '../models/event';

const events = {
  type: new List(EventType),
  resolve({ request }) {
    return request.user && Event.findAll({
      where: { userId: request.user.id },
    });
  },
};

export default events;
