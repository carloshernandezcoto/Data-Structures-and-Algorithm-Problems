//Time complexity: O(n)
//Space complexity: O(1)

//Javascript solution, optimal iterative approach.

//Using the Map object as a dictionary:
// let FibonacciTable = new Map();
// FibonacciTable.set("prev2", 0);
// FibonacciTable.set("prev", 1);
// // Map {0:1, 1:1}
// function getNthFib(n) {
//   // Write your code here.
//   if (n === 1 || n == 0) return 0;
//   if (n === 2) return 1;

//   for (i = 3; i <= n; i++) {
//     var temp = FibonacciTable.get("prev");
//     FibonacciTable.set(
//       "prev",
//       FibonacciTable.get("prev") + FibonacciTable.get("prev2")
//     );
//     FibonacciTable.set("prev2", temp);
//   }
//   return FibonacciTable.get("prev");
// }

//Using an array and regular javascript objects:

function getNthFib(n) {
  // Write your code here.
  let FibonacciTable = [0, 1];

  if (n === 1 || n == 0) return 0;

  for (i = 3; i <= n; i++) {
    var nextFib = FibonacciTable[1] + FibonacciTable[0];
    FibonacciTable[0] = FibonacciTable[1];
    FibonacciTable[1] = nextFib;
  }
  return FibonacciTable[1];
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
