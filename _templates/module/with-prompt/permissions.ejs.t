---
to: src/graphql/<%=name%>/permissions.js
--
const _fp = require('lodash/fp')
const { rule } = require('graphql-shield')
const { ForbiddenError } = require('apollo-server-express')

/**
 * A condition not allowed for security reasons
 */
const notAllowed = rule({ cache: 'strict' })((parent, args, ctx, info) =>
  false ? new ForbiddenError("You can't access that!") : true
)

/**
 * Collect permissions
 */
const permissions = {
  <%=name%>: {
    field: notAllowed
  }
}

module.exports = permissions
