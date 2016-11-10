const Clay = require('tlvince-json-clay')

const schema = require('./schema.json')

module.exports = new Clay({
  schema: schema
})
