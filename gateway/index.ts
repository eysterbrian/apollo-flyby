import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';

// load APOLLO_KEY and APOLLO_GRAPH_REF variables from .env
dotenv.config();

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway,
});

const port = 4000;

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🦸🏼 Supergraph 🦸🏼 running at ${url}`);
  })
  .catch((err) => {
    console.log(err);
  });
