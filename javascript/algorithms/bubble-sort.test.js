const assert = require('assert')
const bubbleSort = require('./bubble-sort')

const a = [134, 203, 3, 746, 200, 984, 198, 764, 9]
const expected = [3, 9, 134, 198, 200, 203, 746, 764, 984]

describe('bubble-sort', () => {
  it('should sort in ascending order', () => {
    const res = bubbleSort(a)
    assert.deepEqual(expected, res)
  })
});