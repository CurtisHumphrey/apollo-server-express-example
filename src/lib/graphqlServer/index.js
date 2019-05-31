const { ApolloServer, makeExecutableSchema } = require('apollo-server-express')
const { applySchemaCustomDirectives } = require('graphql-custom-directives')

// GraphQL Entities
const resolvers = require('./resolvers')
const schemaDirectives = require('./schemaDirectives')
const typeDefs = require('./typeDefs')

/**
 * Creates an executable schema and applies custom directives
 */
const getSchema = ({ typeDefs, resolvers, schemaDirectives }) => {
  const schema = makeExecutableSchema({ typeDefs, resolvers })
  schema._directives.push.apply(schema._directives, schemaDirectives)
  applySchemaCustomDirectives(schema)
  return schema
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
    mocks: true,
    mockEntireSchema: false,
    schema: getSchema({ typeDefs, resolvers, schemaDirectives })
  })

/**
 * Applies Apollo Server middleware to an Express instance
 */
exports.applyApolloServerToExpressApp = expressApp => {
  const apolloServer = createApolloServer()
  apolloServer.applyMiddleware({ app: expressApp, path: '/management' })
  return expressApp
}
