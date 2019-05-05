/**
 * This is an example of a Domain-specific type
 */

const { gql } = require('apollo-server')

const typeDefs = gql`
  type User implements Temporal {
    createdAt: String!
    createdBy: User!
    email: String!
    firstName: String!
    id: ID!
    lastName: String!
    tickets(where: TicketsFilter, pagination: PaginationInput): TicketsResult!
    updatedAt: String!
  }

  extend type Query {
    me: User!
  }
`

module.exports = typeDefs
