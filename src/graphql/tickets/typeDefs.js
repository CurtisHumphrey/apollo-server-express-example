/**
 * This is an example of a Domain-specific type
 */

const { gql } = require('apollo-server')

const typeDefs = gql`
  input TicketsFilter {
    id: ID
    ownedBy: ID
    sport: Sport!
  }

  type Ticket implements Ownable & Temporal {
    createdAt: String!
    createdBy: User!
    id: ID!
    ownedBy: User
    sport: Sport!
    updatedAt: String!
  }

  type TicketsResult {
    results: [Ticket]!
    pagination: PaginationResult!
  }

  extend type Query {
    ticket(id: ID!): Ticket!
    tickets(where: TicketsFilter, pagination: PaginationInput): TicketsResult!
  }
`

module.exports = typeDefs
