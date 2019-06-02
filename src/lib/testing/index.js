const { createTestClient } = require('apollo-server-testing')
const { connectToMongoDB } = require('../../db')
const { createApolloServer } = require('../graphqlServer')

/**
 * Connects to DB
 * NOTE: We might run into race conditions here, but we should probably be fine
 */
connectToMongoDB(process.env)

/**
 * Gets new test client for integration tests
 */
exports.getTestClient = () => createTestClient(createApolloServer())
