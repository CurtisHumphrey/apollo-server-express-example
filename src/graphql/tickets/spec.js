const _ = require('lodash')
const _fp = require('lodash/fp')
const { gql } = require('apollo-server-express')
const { getTestClient } = require('../../lib/testing')
const { SPORTS } = require('../../constants')

/**
 * Placeholder for GraphQL test client
 */
let testClient = null

/**
 * Tests for sports
 */
const hasSports = _fp.pipe(
  _fp.get('data.tickets'),
  _fp.map(_fp.get('sport')),
  _fp.all(sport => _.keys(SPORTS).includes(sport))
)

describe('tickets', () => {
  // Gets GraphQL test client
  beforeEach(() => {
    testClient = getTestClient()
  })

  describe('queries', () => {
    it('tickets', async () => {
      // Setup
      const query = gql`
        query Tickets {
          tickets {
            id
            sport
          }
        }
      `

      // Act
      const result = await testClient.query({ query })

      // Assert
      expect(hasSports(result)).toBeTruthy()
    })
  })
})
