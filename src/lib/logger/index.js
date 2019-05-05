const pino = require('express-pino-logger')

const pinoLogger = pino()
exports.pinoLogger = pinoLogger
exports.logger = pinoLogger.logger
