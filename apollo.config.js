require('dotenv').config()

module.exports = {
  client: {
    service: {
      name: 'apollo-server-express-example',
      url: 'http://localhost:3000/graphql' // @FIXME
    }
  }
}
