const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { logger, pinoLogger } = require('../../logger')

/**
 * Factory-function to creating Express shutdown handler
 * @param {String} signal
 * @param {ExpressInstance} app
 */
const shutdownGracefully = (signal, app) => () => {
  app.close(() => {
    logger.log(`${signal} received, starting shutdown sequence...`)
    mongoose.connection.close()
  })
}

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

  // Express logging
  app.use(pinoLogger)

  // Heartbeat
  app.use('/info', (req, res) => res.sendStatus(200))

  // Graceful shutdown and signal handlers
  process.on('SIGINT', shutdownGracefully('SIGINT', app))
  process.on('SIGTERM', shutdownGracefully('SIGTERM', app))

  return app
}
