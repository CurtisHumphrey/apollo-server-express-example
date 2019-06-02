---
to: src/graphql/<%=name%>/model.js
---
const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const schema = mongoose.Schema(
  {

  },
  {
    timestamps: true
  }
)

schema.plugin(mongooseDelete)

module.exports = mongoose.model('<%= h.inflection.singularize(name) %>', schema)
