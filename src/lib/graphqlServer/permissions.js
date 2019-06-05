const merge = require('lodash.merge')
const { shield } = require('graphql-shield')
const { isAdmin } = require('../security')

// GraphQL entities
const tickets = require('../../graphql/tickets')

/**
 * Bases permissions
 */
const basePermissions = {
  Query: {
    facepalm: isAdmin,
  },
}

/**
 * Deep-merge permissions object
 */
const permissionsSource = merge(basePermissions, tickets.permissions)

/**
 * Create middleware
 */
const permissions = shield(permissionsSource)

module.exports = permissions
