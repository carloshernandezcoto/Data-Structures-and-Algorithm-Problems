//Time complexity: O(n^2)

//Space complexity: O(1)

//Javascript solution.

function selectionSort(array) {
  let smallestIndex = 0;
  for (i = 0; i < array.length - 1; i++) {
    smallestIndex = i;
    for (j = i; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) smallestIndex = j;
    }
    swap(array, i, smallestIndex);
  }
  return array;
}

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
