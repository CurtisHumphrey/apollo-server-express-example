/**
 * Logic for interacting with databases, external services, etc.
 */

exports.getTicketById = id => ({ id })

exports.getTicketsOfType = type => [{ sport: type }]
