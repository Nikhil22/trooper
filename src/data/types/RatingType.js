import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLInt as IntegerType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const RatingType = new ObjectType({
  name: 'Rating',
  fields: {
    id: { type: new NonNull(ID) },
    rating: { type: IntegerType },
    maxRating: { type: new NonNull(IntegerType) },
  },
});

export default RatingType;
