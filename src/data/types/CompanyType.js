import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const CompanyType = new ObjectType({
  name: 'Company',
  fields: {
    id: { type: new NonNull(ID) },
    email: { type: StringType },
  },
});

export default CompanyType;
