const {
  default: queryComplexity,
  directiveEstimator,
  simpleEstimator,
} = require('graphql-query-complexity')
const { logger } = require('../logger')

const complexityRule = queryComplexity({
  maximumComplexity: 100,
  onComplete: (complexity) => {
    logger.info(`Determined query complexity: ${complexity}`)
  },
  createError: (max, actual) => {
    return new Error(
      `Query is too complex: ${actual}. Maximum allowed complexity: ${max}`
    )
  },
  estimators: [
    directiveEstimator({
      name: 'complexity',
    }),
    simpleEstimator({
      defaultComplexity: 1,
    }),
  ],
})

module.exports = [complexityRule]
