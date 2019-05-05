/**
 * Maps GraphQL Enums to their application constant values
 */

const { BASEBALL_TEAMS, SPORTS } = require('../../constants')

const resolvers = {
  BaseballTeam: BASEBALL_TEAMS,
  Sport: SPORTS
}

module.exports = resolvers
