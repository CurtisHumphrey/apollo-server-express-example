const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const { pinoLogger } = require('../../logger')

/**
 * Creates a new Express instance
 */
exports.instantiateExpress = () => express()

/**
 * Configures Express instance with some basic middlewares
 * Adds heartbeat handler to Express server
 */
exports.configureExpressInstance = app => {
  app.use(compression())
  app.use(cors())
  app.use(helmet())

  // body-parser is required to handle GraphQL (POST) requests
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use(pinoLogger)
  app.use('/info', (req, res) => res.sendStatus(200))
  return app
}
