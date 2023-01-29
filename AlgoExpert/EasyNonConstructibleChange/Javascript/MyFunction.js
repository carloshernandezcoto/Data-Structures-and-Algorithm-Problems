//Time complexity: O(n log(n)) due to sorting the input.

//Space complexity: O(sorting method, it changes depending on the implementation)

//Javascript solution.

function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);

  let max = 0;

  for (i = 0; i < coins.length; i++) {
    if (coins[i] - max > 1) {
      return max + 1;
    }
    max = max + coins[i];
  }
  return max + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
