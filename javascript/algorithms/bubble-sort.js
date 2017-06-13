/**
 * Bubble Sort.
 * Sort by repeatedly looping over an array moving the current highest to the right.
 * The first iteration will have the largest number on the right
 * The second iteration will have the next highest second on the right
 * and so on and so on....
 */

module.exports = bubbleSort

function bubbleSort(a) {
  var swapped;
  var cn = 0
  do {
    swapped = false;
    cn++
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return a
}
