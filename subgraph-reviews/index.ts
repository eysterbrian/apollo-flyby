import { buildSubgraphSchema } from '@apollo/subgraph';
import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import ReviewsAPI from './datasources/ReviewsApi';
import resolvers from './resolvers';

const typeDefs = gql(readFileSync('./reviews.graphql', { encoding: 'utf-8' }));

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers: resolvers as any, // TODO: Fix type here
  }),
  dataSources: () => ({
    reviewsAPI: new ReviewsAPI(),
  }),
});

const port = 4002;
const subgraphName = 'reviews';

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
