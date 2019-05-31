/**
 * This is an example of a Domain-specific type
 */

const { gql } = require('apollo-server')

const typeDefs = gql`
  type Ticket {
    createdAt: String! @formattableDate
    id: ID!
    sport: Sport!
    updatedAt: String! @formattableDate
  }

  extend type Query {
    tickets: [Ticket]!
  }
`

module.exports = typeDefs
