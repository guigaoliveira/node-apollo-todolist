const { GraphQLDateTime } = require('graphql-iso-date');
const todo = require('./todo');

module.exports = {
  DateTime: GraphQLDateTime,
  Query: {
    ...todo.Query,
  },
  Mutation: {
    ...todo.Mutation,
  },
};
