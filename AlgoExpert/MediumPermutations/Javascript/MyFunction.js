//Time: O(n n!)
//Space: O(n n!)

function getPermutations(array) {
  // Write your code here.
  let permutations = [];
  recurseOverArray(array, [], permutations);
  return permutations;
}

function recurseOverArray(array, currentArray, permutations) {
  if (!array.length && currentArray.length) {
    permutations.push([...currentArray]);
    return;
  }
  for (let i = 0; i < array.length; i++) {
    let currentValue = array.splice(i, 1)[0];
    currentArray.push(currentValue);
    recurseOverArray(array, currentArray, permutations);
    currentArray.pop();
    array.splice(i, 0, currentValue);
  }
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
