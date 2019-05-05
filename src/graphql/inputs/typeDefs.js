/**
 * Defines the reusable Input types to your GraphQL server
 */

const { gql } = require('apollo-server-express')

const typeDefs = gql`
  input PaginationInput {
    limit: Int = 10
    orderBy: String! = "updatedAt_DESC"
    skip: Int = 0
  }
`

module.exports = typeDefs
