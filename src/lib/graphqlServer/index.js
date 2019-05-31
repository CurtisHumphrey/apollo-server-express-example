const { ApolloServer } = require('apollo-server-express')

// GraphQL Entities
const resolvers = require('./resolvers')
const schemaDirectives = require('./schemaDirectives')
const typeDefs = require('./typeDefs')

/**
 * Function to create configured Apollo server instance
 * For dataSources, see: https://www.apollographql.com/docs/apollo-server/features/data-sources
 */
const createApolloServer = () =>
  new ApolloServer({
    context: ({ req }) => ({
      req
    }),
    formatError: function(error) {
      return error
    },
    formatResponse: function(response) {
      return response
    },
    resolvers,
    schemaDirectives,
    typeDefs
  })

/**
 * Applies Apollo Server middleware to an Express instance
 */
exports.applyApolloServerToExpressApp = expressApp => {
  const apolloServer = createApolloServer()
  apolloServer.applyMiddleware({ app: expressApp, path: '/management' })
  return expressApp
}
