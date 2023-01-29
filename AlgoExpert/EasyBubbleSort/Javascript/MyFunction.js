//Time: O(n^2)
//Space: O(1)

function bubbleSort(array) {
  // Write your code here.
  let anySwaps = true;
  let rightBoundary = array.length - 1;
  while (anySwaps) {
    anySwaps = false;
    for (i = 0; i < rightBoundary; i++) {
      if (array[i] > array[i + 1]) {
        swapItems(i, i + 1, array);
        anySwaps = true;
      }
    }
    rightBoundary--;
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
exports.bubbleSort = bubbleSort;
