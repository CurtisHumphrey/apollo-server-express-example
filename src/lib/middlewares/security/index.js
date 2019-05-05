const { AuthenticationError } = require('apollo-server-express')
const get = require('lodash/get')

/**
 * Helper to grab auth token from GraphQL request
 * @param  {...any} args
 */
const getAuthorizationHeaderFromCtx = (...args) =>
  get(args[2], 'req.headers.authorization', null)

/**
 * Async middleware for custom async composition example
 */
exports.withAuthorization = resolver => async (...args) => {
  return resolver(...args)
}

/**
 * Async middleware that can perform JWT authentication, if that's something you're into ;)
 */
exports.withAuthentication = resolver => async (...args) => {
  const authToken = getAuthorizationHeaderFromCtx(...args)
  if (!authToken) throw new AuthenticationError('No way Jose!')
  // @TODO Check expiration of JWT + JTI...?
  return resolver(...args)
}
