const _fp = require('lodash/fp')
const { rule } = require('graphql-shield')
const { ForbiddenError } = require('apollo-server-express')
const { SPORTS } = require('../../constants')

/**
 * Checks if the parent has sport baseball
 */
const isBaseball = _fp.pipe(
  _fp.get('sport'),
  (sport) => sport(),
  _fp.isEqual(SPORTS.BASEBALL)
)

/**
 * Sport not allowed
 */
const notAllowed = rule({ cache: 'strict' })((parent, args, ctx, info) =>
  isBaseball(parent) ? new ForbiddenError("You can't access that sport!") : true
)

/**
 * Collect permissions
 */
const permissions = {
  Ticket: {
    sport: notAllowed,
  },
}

module.exports = permissions
