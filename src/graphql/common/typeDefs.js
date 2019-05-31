const { gql } = require('apollo-server-express')

const typeDefs = gql`
  # Directives
  directive @formattableDate(
    format: String = "mmmm d, yyyy"
  ) on FIELD_DEFINITION

  # Defines custom GraphQL scalars
  scalar DateTime
  scalar EmailAddress
  scalar NegativeFloat
  scalar NegativeInt
  scalar NonNegativeFloat
  scalar NonNegativeInt
  scalar NonPositiveFloat
  scalar NonPositiveInt
  scalar PhoneNumber
  scalar PositiveFloat
  scalar PositiveInt
  scalar PostalCode
  scalar RegularExpression
  scalar UnsignedFloat
  scalar UnsignedInt
  scalar URL
`

module.exports = typeDefs
