# couchdb-timestamp-model

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

[travis-url]: https://travis-ci.com/fielded/couchdb-timestamp-model
[travis-image]: https://img.shields.io/travis/fielded/couchdb-timestamp-model.svg
[npm-url]: https://www.npmjs.com/package/couchdb-timestamp-model
[npm-image]: https://img.shields.io/npm/v/couchdb-timestamp-model.svg
[license-url]: https://opensource.org/licenses/Apache-2.0
[license-image]: https://img.shields.io/npm/l/couchdb-timestamp-model.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

> Data model for CouchDB timestamps

## Installation

```shell
npm install --save couchdb-timestamp-model
```

## Usage

```js
const timestamp = require('couchdb-timestamp-model')
timestamp.validate({
  createdAt: '1970-01-01T00:00:00.000Z'
})
// => undefined
// undefined means the object validated
```

See [json-clay][] for general API docs.

[json-clay]: https://github.com/eHealthAfrica/json-clay

### `timestamp.validate(<json>)`

Validate the given `json` against the schema. Returns `undefined` if the data
is valid, otherwise an array of errors.

### `timestamp.generate([attributes])`

Generates a model with fake data via [json-schema-faker][]. If an attributes
object is provided, its properties will be used instead of faked values.

[json-schema-faker]: https://github.com/pateketrueke/json-schema-faker

## CLI

A handy command line tool for creating test data:

```sh
$ couchdb-timestamp-model --updatedAt "1970-01-01T00:00:00.000Z"
{
  "createdAt": "3175-08-28T09:59:11.646Z",
  "updatedAt": "1970-01-01T00:00:00.000Z"
}
```

## Contributors

© 2016 Tom Vincent <tom@field.partners>

## License

Released under the Apache-2.0 license.
