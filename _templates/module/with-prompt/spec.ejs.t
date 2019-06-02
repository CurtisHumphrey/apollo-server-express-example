---
to: src/graphql/<%=name%>/spec.js
--
const _ = require('lodash')
const _fp = require('lodash/fp')
const { gql } = require('apollo-server-express')
const { getTestClient } = require('../../lib/testing')

/**
 * Placeholder for GraphQL test client
 */
let testClient = null

describe('<%=name%>', () => {
  // Gets GraphQL test client
  beforeEach(() => {
    testClient = getTestClient()
  })

  describe('queries', () => {
    it('<%=name%>', async () => {
      // Setup
      const query = gql`

      `

      // Act
      const result = await testClient.query({ query })

      // Assert
      expect(

      ).toBeTruthy()
    })
  })
})
