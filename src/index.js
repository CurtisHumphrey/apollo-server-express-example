require('dotenv').config()
const pipe = require('lodash/fp/pipe')
const { logger } = require('./lib/logger')
const { applyApolloServerToExpressApp } = require('./lib/graphqlServer')
const {
  configureExpressInstance,
  instantiateExpress,
} = require('./lib/middlewares/defaults')

/**
 * Configures Express instance
 */
const configuredApp = pipe(
  configureExpressInstance,
  applyApolloServerToExpressApp
)(instantiateExpress())

/**
 * Start server
 */
configuredApp.listen({ port: process.env.PORT }, () => {
  logger.info(`Pigeons signing Beetoven on port ${process.env.PORT}`)
})
