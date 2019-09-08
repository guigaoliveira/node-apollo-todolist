const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers');

const typeDefs = gql(
  fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8'),
);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
