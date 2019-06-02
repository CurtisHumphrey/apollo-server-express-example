const { ApolloServer, makeExecutableSchema } = require('apollo-server-express')
const { applyMiddleware } = require('graphql-middleware')

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
      req
    }),
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
    validationRules
  })

/**
 * Applies Apollo Server middleware to an Express instance
 */
exports.applyApolloServerToExpressApp = expressApp => {
  const apolloServer = createApolloServer()
  apolloServer.applyMiddleware({ app: expressApp, path: '/management' })
  return expressApp
}
