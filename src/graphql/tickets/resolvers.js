const moment = require('moment')

const createTicket = () => ({
  id: () => 5,
  createdAt: (...args) => '2016-01-01T00:00:00',
  updatedAt: () => moment().toISOString(),
  sport: () => 'football',
})

const resolvers = {
  Query: {
    tickets: () => [createTicket()],
  },
}

module.exports = resolvers
