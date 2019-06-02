const { shield } = require('graphql-shield')
const { isAdmin } = require('../security')

const permissions = shield({
  Query: {
    facepalm: isAdmin
  }
})

module.exports = permissions
