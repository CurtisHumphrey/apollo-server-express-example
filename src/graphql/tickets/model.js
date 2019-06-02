const values = require('lodash/values')
const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const { SPORTS } = require('../../constants')

const schema = mongoose.Schema(
  {
    sport: {
      enum: values(SPORTS),
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

schema.plugin(mongooseDelete)

module.exports = mongoose.model('ticket', schema)
