const assert = require('assert')
const bubbleSort = require('./bubble-sort').bubbleSort
const bubbleSortImmutable = require('./bubble-sort').bubbleSortImmutable

describe('bubble-sort', () => {
  describe('mutable', () => {
    it('should sort in ascending order', () => {
      const a1 = [134, 203, 3, 746, 200, 984, 198, 764, 9]
      const expected = [3, 9, 134, 198, 200, 203, 746, 764, 984]

      const res = bubbleSort(a1)

      // input/source is mutated
      assert.deepEqual(expected, a1)

      // stored value is sorted
      assert.deepEqual(expected, res)
    })
  })

  describe('immutable', () => {
    it('should sort in ascending order', () => {
      const a1 = [134, 203, 3, 746, 200, 984, 198, 764, 9]
      const a2 = a1.slice(0)
      const expected = [3, 9, 134, 198, 200, 203, 746, 764, 984]

      const res = bubbleSortImmutable(a1)

      // input/source is not mutated
      assert.deepEqual(a1, a2)

      // stored value is sorted
      assert.deepEqual(expected, res)
    })
  })
})
