//Time: O(n)
//Space: O(n)

//Linear solution
function sortedSquaredArray(array) {
  const length = array.length;
  let result = [];
  let pointer1 = 0;
  let pointer2 = length - 1;
  let position = length - 1;
  while (pointer2 >= pointer1) {
    let square1 = Math.pow(array[pointer1], 2);
    let square2 = Math.pow(array[pointer2], 2);
    if (square1 > square2) {
      result[position] = square1;
      pointer1++;
    } else {
      result[position] = square2;
      pointer2--;
    }
    position--;
  }
  return result;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
