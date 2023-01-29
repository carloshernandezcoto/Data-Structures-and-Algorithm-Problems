//Time: O(n) average, O(n^2) worst
//Space: O(1)

function quickselect(array, k) {
  let start = 0;
  let end = array.length - 1;

  while (true) {
    let pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
      if (array[left] <= array[pivot]) {
        left++;
        continue;
      }

      if (array[right] >= array[pivot]) {
        right--;
        continue;
      }

      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }

    [array[pivot], array[right]] = [array[right], array[pivot]];
    if (right === k - 1) return array[k - 1];
    if (k - 1 < right) {
      end = right - 1;
    } else {
      start = right + 1;
    }
  }
}
exports.quickselect = quickselect;
