const _ = require('lodash')
const chalk = require('chalk')
const _fp = require('lodash/fp')
const { say } = require('cowsay')
const graphqlEntities = require('./src/graphql')

/**
 * Gets deps
 */
const getDeps = _fp.pipe(
  _fp.keys,
  _fp.sortBy(_fp.identity),
  _fp.join(', ')
)

/**
 * Prints a breakline
 */
const printBreak = () => console.log('\n')

/**
 *  Prints a divider
 */
const printDivider = () =>
  console.log(chalk.bold.blue('=============================='))

/**
 * Gets app context for repl
 */
const getAppContext = _fp.pipe(
  _fp.entries,
  _fp.reduce((acc, [key, values]) => {
    acc[key] = _.pick(values, ['model', 'service'])
    return acc
  }, {})
)

/**
 * Configuration for local repl
 */
module.exports = {
  banner: context => {
    printDivider()
    console.log(
      say({
        text: chalk.bold.blue(`Hey bitch, you're in a REPL`)
      })
    )
    printBreak()
    console.log(
      chalk.cyan(
        `Automatically loaded context: ${chalk.magenta(getDeps(context))}`
      )
    )
    printBreak()
  },
  context: {
    lo: _,
    ...getAppContext(graphqlEntities)
  },
  enableAwait: true,
  prompt: () => chalk.yellow(`repl $ `)
}
