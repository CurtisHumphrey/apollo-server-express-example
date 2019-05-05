/**
 * Turns application constants into GraphQL Enums
 */

const keys = require('lodash/keys')
const { gql } = require('apollo-server')
const { BASEBALL_TEAMS, SPORTS } = require('../../constants')

const typeDefs = gql`
  enum BaseballTeam {
    ${keys(BASEBALL_TEAMS)}
  }

  enum Sport {
    ${keys(SPORTS)}
  }
`

module.exports = typeDefs
