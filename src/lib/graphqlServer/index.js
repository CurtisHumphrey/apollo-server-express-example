const { ApolloServer, makeExecutableSchema } = require('apollo-server-express')
const { applyMiddleware } = require('graphql-middleware')
const { apolloEngineConfiguration } = require('../environment')

// Configuration Entities
const permissions = require('./permissions')
const resolvers = require('./resolvers')
const schemaDirectives = require('./schemaDirectives')
const typeDefs = require('./typeDefs')
const validationRules = require('./validationRules')

/**
 * Creates enhanced executable schema
 * @param {*} schema
 * @param  {...any} middlewares
 */
const createExecutableSchema = (options, ...middlewares) => {
  const schema = makeExecutableSchema(options)
  const enhancedSchema = applyMiddleware(schema, ...middlewares)
  return enhancedSchema
}

/**
 * Function to create configured Apollo server instance
 * For dataSources, see: https://www.apollographql.com/docs/apollo-server/features/data-sources
 */
const createApolloServer = () =>
  new ApolloServer({
    context: ({ req }) => ({
      req,
    }),
    engine: apolloEngineConfiguration,
    formatError: function(error) {
      return error
    },
    formatResponse: function(response) {
      return response
    },
    schema: createExecutableSchema(
      { resolvers, typeDefs, schemaDirectives },
      permissions
    ),
    schemaDirectives,
    validationRules,
  })

exports.createApolloServer = createApolloServer

/**
 * Applies Apollo Server middleware to an Express instance
 */
exports.applyApolloServerToExpressApp = (expressApp) => {
  const apolloServer = createApolloServer()
  apolloServer.applyMiddleware({ app: expressApp })
  return expressApp
}
