import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const EventType = new ObjectType({
  name: 'Event',
  fields: {
    id: { type: new NonNull(ID) },
    startDate: { type: StringType },
    endDate: { type: new NonNull(StringType) },
    clientEmail: { type: StringType },
    summary: { type: StringType },
  },
});

export default EventType;
