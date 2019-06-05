const get = require('lodash/get')
const mongoose = require('mongoose')

/**
 * Creates Mongo connection string
 * @param {Object} param0
 */
const buildMongoConnectionString = ({
  database,
  host,
  password,
  port,
  username,
}) =>
  `mongodb://${
    username && password && false ? `${username}:${password}@` : ''
  }${host}:${port}/${database}`

exports.buildMongoConnectionString = buildMongoConnectionString

/**
 * Connect to MongoDB
 * @param {Object} environment
 */
exports.connectToMongoDB = async (environment) => {
  const connectionString = buildMongoConnectionString({
    database: get(environment, 'DATABASE_NAME'),
    host: get(environment, 'DATABASE_HOST'),
    password: get(environment, 'DATABASE_PASSWORD'),
    port: get(environment, 'DATABASE_PORT'),
    username: get(environment, 'DATABASE_USERNAME'),
  })
  return mongoose.connect(connectionString, { useNewUrlParser: true })
}
