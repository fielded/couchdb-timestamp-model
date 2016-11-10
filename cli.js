#!/usr/bin/env node

const model = require('./')
const cli = require('tlvince-json-clay/cli')

cli(model, process.argv.slice(2))
