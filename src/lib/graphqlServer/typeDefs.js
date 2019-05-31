const { gql } = require('apollo-server-express')

// GraphQL Entities
const common = require('../../graphql/common')
const enums = require('../../graphql/enums')

// Domain Entities
const tickets = require('../../graphql/tickets')

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
module.exports = [
  baseTypeDefs,
  common.typeDefs,
  enums.typeDefs,
  tickets.typeDefs
]
