//Time complexity.
// n = target, m = denoms.length
// O(n*m)

//Space complexity.
//O(n)

//Javascript solution with improved space time analysis and removed while loop.

function minNumberOfCoinsForChange(n, denoms) {
  const dollarAmounts = [];
  populateArray(n, dollarAmounts);
  denoms = denoms.sort((a, b) => a - b);

  for (i = 0; i < denoms.length; i++) {
    for (j = denoms[i]; j <= n; j++) {
      let target = j;
      let coins = 0;
      coins++;
      target = target - denoms[i];
      if (target === 0) {
        dollarAmounts[j] = coins;
      } else {
        if (dollarAmounts[target] !== -1) {
          coins = coins + dollarAmounts[target];
          if (dollarAmounts[j] === -1 || coins < dollarAmounts[j]) {
            dollarAmounts[j] = coins;
          }
        }
      }
    }
  }
  return dollarAmounts[n];
}

function populateArray(n, array) {
  array[0] = 0;
  for (i = 1; i <= n; i++) {
    array[i] = -1;
  }
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
