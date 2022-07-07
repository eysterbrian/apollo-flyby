import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { buildSubgraphSchema } from '@apollo/subgraph';
import resolvers from './resolvers';
import { LocationsAPI } from './datasources/LocationsApi';

const typeDefs = gql(
  readFileSync('./locations.graphql', { encoding: 'utf-8' })
);

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers: resolvers as any, // TODO: Fix typing
  }),
  dataSources: () => ({
    locationsAPI: new LocationsAPI(),
  }),
});

const port = 4001;
const subgraphName = 'locations';

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
