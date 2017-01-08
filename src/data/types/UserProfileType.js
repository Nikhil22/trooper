import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const UserProfileType = new ObjectType({
  name: 'UserProfile',
  fields: {
    userId: { type: new NonNull(ID) },
    displayName: { type: StringType },
    picture: { type: StringType },
    gender: { type: StringType },
    location: { type: StringType },
    website: { type: StringType },
    phone: { type: StringType },
    stripe: { type: StringType }
  }
});

export default UserProfileType;
