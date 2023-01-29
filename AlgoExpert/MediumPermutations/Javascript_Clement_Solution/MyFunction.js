//Clement's solution.
function getPermutations(array) {
  // Write your code here.
  let permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i, array, permutations) {
  if (i === array.length - 1) permutations.push([...array]);
  else {
    for (let j = i; j < array.length; j++) {
      swap(array, i, j);
      permutationsHelper(i + 1, array, permutations);
      swap(array, i, j);
    }
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
