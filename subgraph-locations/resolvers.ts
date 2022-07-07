import { Resolvers } from './generated/graphql';

const resolvers: Resolvers = {
  Query: {
    locations: (_, __, { dataSources }) => {
      return dataSources.locationsAPI.getAllLocations();
    },
    location: (_, { id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id) ?? null;
    },
  },
  Location: {},
};

export default resolvers;
