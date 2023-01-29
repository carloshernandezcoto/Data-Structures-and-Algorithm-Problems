//Time complexity: O(n)

//Space complexity: O(1)

//Javascript solution.

function findThreeLargestNumbers(array) {
  let result = [
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
  ];
  array.forEach((number) => {
    for (i = result.length - 1; i >= 0; i--) {
      if (number > result[i]) {
        result.splice(i + 1, 0, number);
        result.shift();
        break;
      }
    }
  });
  return result;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
