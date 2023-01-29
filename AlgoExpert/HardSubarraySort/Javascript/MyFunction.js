//Time: O(n)
//Space: O(n)

function subarraySort(array) {
  const result = [-1, -1];

  //Work the lower part of the array
  let current = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < current) {
      result[0] = i - 1;
      break;
    }
    current = array[i];
  }

  //Work the upper part of the array
  current = Number.POSITIVE_INFINITY;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > current) {
      result[1] = i + 1;
      break;
    }
    current = array[i];
  }

  const criticalNumbers = array.slice(result[0], result[1] + 1);
  const min = Math.min(...criticalNumbers);
  const max = Math.max(...criticalNumbers);

  for (let i = 0; i <= result[0]; i++) {
    if (array[i] > min) {
      result[0] = i;
      break;
    }
  }

  for (let i = array.length - 1; i >= result[1]; i--) {
    if (array[i] < max) {
      result[1] = i;
      break;
    }
  }

  return result;
}

exports.subarraySort = subarraySort;
