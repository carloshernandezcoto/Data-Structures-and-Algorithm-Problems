//Time: O(m log(n)) + O(n)
//Space: O(n)

//Where m is the amount of negative numbers in the array
//and n is the length of the array.

function sortedSquaredArray(array) {
  //Create a new array since the problem statement says not to touch the input array.
  let result = deepCopyArray(array);

  //Put the absolute value of the negative items in their correct place.
  while (result[0] < 0) {
    binaryInsertion(result, 0);
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i] * result[i];
  }
  return result;
}

function deepCopyArray(base) {
  let target = [];
  for (let i = 0; i < base.length; i++) {
    target[i] = base[i];
  }
  return target;
}

function binaryInsertion(array, index) {
  let number = array[index] * -1;
  array.splice(index, 1);
  const length = array.length;
  if (length === 0) {
    array[0] = number;
    return;
  }
  if (number <= array[0]) {
    array.splice(0, 0, number);
    return;
  }
  if (number >= array[length - 1]) {
    array.splice(length, 0, number);
    return;
  }

  let bottom = 0;
  let top = length - 1;

  //Case when element to insert is in the middle of a length 2 array.
  if (top - bottom === 1) {
    array.splice(1, 0, number);
    return;
  }

  while (top - bottom > 1) {
    let middle = parseInt((bottom + top) / 2);
    if (array[middle - 1] <= number && array[middle] >= number) {
      array.splice(middle, 0, number);
      return;
    }
    if (array[middle] <= number && array[middle + 1] >= number) {
      array.splice(middle + 1, 0, number);
      return;
    }
    if (number > array[middle]) bottom = middle;
    else top = middle;
  }
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
