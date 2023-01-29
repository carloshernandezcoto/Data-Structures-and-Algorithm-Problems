//Time: O(n^3) // Even though, actual numbers from the monitors inside the program
// reveal the algorithm runs in O(n^2) time...
//Space: O(n)

function fourNumberSum(array, targetSum) {
  const result = [];
  const iterations = { n: 0, i: 0 };
  if (array.length < 4) return result;

  array.sort((a, b) => {
    return a - b;
  });

  let twoNumberTarget;
  let dupletList;

  for (let p1 = 0; p1 < array.length - 3; p1++)
    for (let p2 = array.length - 1; p2 > p1 + 2; p2--) {
      iterations.i++;
      twoNumberTarget = targetSum - (array[p1] + array[p2]);
      dupletList = twoNumberSum(
        array.slice(p1 + 1, p2),
        twoNumberTarget,
        iterations
      );
      if (dupletList.length > 0) {
        dupletList.forEach((duplet) => {
          result.push([array[p1], array[p2], duplet[0], duplet[1]]);
        });
      }
      dupletList = [];
    }
  console.log(iterations);
  return result;
}

function twoNumberSum(array, targetSum, iterations) {
  let p1 = 0;
  let p2 = array.length - 1;
  let diff;
  const result = [];
  while (p1 !== p2) {
    iterations.n++;
    diff = targetSum - (array[p1] + array[p2]);
    if (diff === 0) {
      result.push([array[p1], array[p2]]);
      p1++;
      continue;
    }
    if (diff > 0) p1++;
    if (diff < 0) p2--;
  }
  return result;
}

exports.fourNumberSum = fourNumberSum;
