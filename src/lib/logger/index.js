const pino = require('express-pino-logger')

/**
 * Instantiates logger
 */
const pinoLogger = pino()

exports.pinoLogger = pinoLogger
exports.logger = pinoLogger.logger
