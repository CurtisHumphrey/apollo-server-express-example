/**
 * Defines the GraphQL Interfaces you implement in your server
 */

const { gql } = require('apollo-server')

const typeDefs = gql`
  interface Ownable {
    createdBy: User!
    ownedBy: User
  }

  interface PaginatedResult {
    pagination: PaginationResult!
  }

  interface Temporal {
    createdAt: String!
    updatedAt: String!
  }
`

module.exports = typeDefs
