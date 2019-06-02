const _fp = require('lodash/fp')
const { rule } = require('graphql-shield')
const { ForbiddenError } = require('apollo-server-express')

/**
 * Gets the user's role off an object
 */
const getUserRole = _fp.get('user.role')

/**
 * Function-factory that creates a function to check if a user
 * has a specific role
 * @param {String} role
 */
const createRoleChecker = role =>
  _fp.pipe(
    getUserRole,
    _fp.isEqual(role)
  )

/**
 * Checks if a user is a specific role
 */
const isAdminRole = createRoleChecker('admin')

/**
 * Checks if user is an admin
 */
const isAdmin = rule({ cache: 'contextual' })(
  (parent, args, ctx, info) =>
    isAdminRole(ctx) || new ForbiddenError("You can't do that!")
)

module.exports = {
  isAdmin
}
