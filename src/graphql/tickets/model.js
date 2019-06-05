const mongoose = require('mongoose')
const values = require('lodash/values')
const mongooseDelete = require('mongoose-delete')
const { SPORTS } = require('../../constants')

const schema = mongoose.Schema(
  {
    sport: {
      enum: values(SPORTS),
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

schema.plugin(mongooseDelete)

module.exports = mongoose.model('ticket', schema)
