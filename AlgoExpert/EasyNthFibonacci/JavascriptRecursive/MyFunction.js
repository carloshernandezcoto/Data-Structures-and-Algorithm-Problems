//Time complexity: O(n)
//Space complexity: O(n)

//Javascript solution.

//Using the Map object.
// let FibonacciTable = new Map();
// FibonacciTable.set(0, 0);
// FibonacciTable.set(1, 0);
// FibonacciTable.set(2, 1);

// function getNthFib(n) {
//   // Write your code here.
//   if (FibonacciTable.has(n)) return FibonacciTable.get(n);
//   FibonacciTable.set(n, getNthFib(n - 1) + getNthFib(n - 2));
//   return FibonacciTable.get(n);
// }

//Using regular javascript objects.
let FibonacciTable = { 0: 0, 1: 0, 2: 1 };

function getNthFib(n) {
  // Write your code here.
  if (FibonacciTable[n] !== undefined) return FibonacciTable[n];
  FibonacciTable[n] = getNthFib(n - 1) + getNthFib(n - 2);
  return FibonacciTable[n];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
