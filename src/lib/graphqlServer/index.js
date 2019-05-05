const merge = require('lodash.merge')
const compose = require('lodash/fp/compose')
const GraphQLJSON = require('graphql-type-json')
const { ApolloServer, gql } = require('apollo-server-express')
const { logger } = require('../logger')
const {
  withAuthorization,
  withAuthentication
} = require('../middlewares/security')

// GraphQL Entities
const enums = require('../../graphql/enums')
const interfaces = require('../../graphql/interfaces')
const inputs = require('../../graphql/inputs')
const outputs = require('../../graphql/outputs')

// Domain Entities
const tickets = require('../../graphql/tickets')
const users = require('../../graphql/users')

/**
 * Required basic bootstrapping typedefs
 */
const baseTypeDefs = gql`
  scalar JSON

  type Query {
    status: String!
  }

  type Mutation {
    status: String!
  }
`

/**
 * Rest of the typedefs
 */
const typeDefs = [
  baseTypeDefs,
  enums.typeDefs,
  interfaces.typeDefs,
  inputs.typeDefs,
  outputs.typeDefs,
  tickets.typeDefs,
  users.typeDefs
]

/**
 * Custom example of how to perform auth + authz on a request
 * This middleware could apply to any particular route on an Express server
 *
 * WARNING: I do not recommend using this method, it's just an example of Async middleware composition
 *
 * INSTEAD: If you're looking to perform authz on a GraphQL server, you should use: https://github.com/maticzav/graphql-shield
 */
const withAuthenticationAndAuthorization = compose(
  withAuthentication,
  withAuthorization
)

/**
 * Required basic bootstrapping resolvers
 */
const baseResolvers = {
  JSON: GraphQLJSON,
  Mutation: {
    status: withAuthenticationAndAuthorization(() => 'Mutation is live!')
  }
}

/**
 * Rest of the resolvers
 */
const resolvers = merge(
  baseResolvers,
  enums.resolvers,
  tickets.resolvers,
  users.resolvers
)

/**
 * Defines the reusable services
 */
const services = {
  ticketsService: tickets.service,
  usersService: users.service
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
    dataSources: () => services,
    formatError: function(error) {
      logger.error(error)
      return error
    },
    formatResponse: function(response) {
      logger.info(response)
      return response
    },
    mocks: true,
    mockEntireSchema: false,
    resolvers,
    typeDefs
  })

/**
 * Applies Apollo Server middleware to an Express instance
 */
exports.applyApolloServerToExpressApp = expressApp => {
  const apolloServer = createApolloServer()
  apolloServer.applyMiddleware({ app: expressApp })
  return expressApp
}
