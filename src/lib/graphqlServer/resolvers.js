const merge = require('lodash.merge')
const GraphQLJSON = require('graphql-type-json')

// GraphQL Entities
const common = require('../../graphql/common')
const enums = require('../../graphql/enums')

// Domain Entities
const tickets = require('../../graphql/tickets')

/**
 * Required basic bootstrapping resolvers
 */
const baseResolvers = {
  Query: {
    facepalm: () => 'This should fail',
    status: () => 'Base Query up and running!',
  },

  Mutation: {
    status: () => 'Base Mutation up and running!',
  },

  JSON: GraphQLJSON,
}

/**
 * Rest of the resolvers
 */
module.exports = merge(
  baseResolvers,
  common.resolvers,
  enums.resolvers,
  tickets.resolvers
)
