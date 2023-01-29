//Time complexity: O(n)
//Space complexity: O(n)

//Javascript solution, iterative approach.

let FibonacciTable = new Map();
FibonacciTable.set(0, 0);
FibonacciTable.set(1, 0);
FibonacciTable.set(2, 1);
// Map {0:1, 1:1}
function getNthFib(n) {
  // Write your code here.
  if (FibonacciTable.has(n)) return FibonacciTable.get(n);
  for (i = FibonacciTable.size; i <= n; i++) {
    FibonacciTable.set(i, getNthFib(i - 1) + getNthFib(i - 2));
  }
  return FibonacciTable.get(n);
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
