const test = require('tap').test
const model = require('./')

test('validate', t => {
  const actual = model.validate({
    createdAt: '1970-01-01T00:00:00.000Z',
    updatedAt: '1970-01-01T00:00:00.000Z'
  })
  const expected = null
  t.equal(actual, expected, 'validates full model')
  t.end()
})

test('validate invalid date-time', t => {
  const actual = model.validate({
    createdAt: '1970-01-01T00:00:00.000Z',
    updatedAt: 'invalid-date'
  })
  const expected = {
    validation: {
      updatedAt: {
        format: true
      }
    }
  }
  t.contains(actual, expected, 'correctly returned validation error')
  t.end()
})

test('ensures required properties exist', t => {
  const actual = model.validate({})
  const expected = {
    validation: {
      createdAt: {
        required: true
      }
    }
  }
  t.deepEqual(actual, expected)
  t.end()
})
