/**
 * Directives can be overwhelming at first but are extremely useful
 * See more at: https://www.apollographql.com/docs/graphql-tools/schema-directives/
 */
const moment = require('moment')
const { SchemaDirectiveVisitor } = require('apollo-server-express')
const { defaultFieldResolver, GraphQLString } = require('graphql')

/**
 * Directive that adds an argument to automatically format dates via moment
 */
class DateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field

    // Adds argument
    field.args.push({
      name: 'format',
      type: GraphQLString,
    })

    // Enhances resolver
    field.resolve = async function(source, { format, ...args }, context, info) {
      const result = await resolve.call(this, source, args, context, info)
      return moment(result).format(format)
    }
  }
}

module.exports = {
  formattableDate: DateDirective,
}
