import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import ReviewsAPI from './datasources/ReviewsApi';
import resolvers from './resolvers';

const typeDefs = gql(readFileSync('./reviews.graphql', { encoding: 'utf-8' }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
