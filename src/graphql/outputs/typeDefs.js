/**
 * Defines the generic, reusable Types for your GraphQL server
 */

const { gql } = require('apollo-server')

const typeDefs = gql`
  type PaginationResult {
    limit: Int!
    skip: Int!
    total: Int!
  }
`

module.exports = typeDefs
