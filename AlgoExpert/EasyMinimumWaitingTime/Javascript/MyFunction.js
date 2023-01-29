//Time: O(n log(n))
//Space: O(1)

function minimumWaitingTime(queries) {
  if (queries.length === 1) return 0;
  queries.sort((a, b) => a - b);
  let accumulator = 0;
  let waitTime = 0;
  for (let i = 1; i < queries.length; i++) {
    waitTime = waitTime + queries[i - 1];
    accumulator = accumulator + waitTime;
  }

  return accumulator;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
