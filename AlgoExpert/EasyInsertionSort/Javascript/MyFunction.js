//Time: O(n^2)
//Space: O(1)

function insertionSort(array) {
  // Write your code here.
  for (i = 1; i < array.length; i++) {
    for (k = i; k > 0; k--) {
      if (array[k - 1] > array[k]) {
        swapItems(k - 1, k, array);
      } else continue;
    }
  }
  return array;
}

function swapItems(idx1, idx2, array) {
  //Old good way
  // const temp = array[idx1];
  // array[idx1] = array[idx2];
  // array[idx2] = temp;

  //New ES6 approach
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
