/**
 * Resolvers for a Domain-specific type
 */

const resolvers = {
  User: {
    tickets: (parent, args, { dataSources: { ticketsService } }) =>
      ticketsService.getTicketsOfType('BASEBALL')
  },
  Query: {}
}

module.exports = resolvers
