//Time: O(n^2)
//Space: O(1)

//Iterations variables are there for monitoring time complexity.
function waterArea(heights) {
  // Write your code here.

  let iterations1 = 0;
  let iterations2 = 0;
  let iterations = 0;

  let area = 0;
  for (let i = 0; i < heights.length - 2; i++) {
    iterations1++;
    if (heights[i] === 0) {
      iterations++;
      continue;
    }

    let baseHeight = heights[i + 1];
    if (baseHeight < heights[i]) {
      let height = 0;
      for (let j = i + 2; j < heights.length; j++) {
        iterations2++;
        if (heights[j] > baseHeight) {
          height = heights[j];
          area += (Math.min(heights[i], heights[j]) - baseHeight) * (j - i - 1);
          baseHeight = heights[j];
          if (heights[j] >= heights[i]) break;
        }
      }
      iterations += iterations2 > 0 ? iterations1 * iterations2 : 1;
      iterations1 = 0;
      iterations2 = 0;
    }
  }
  console.log(heights.length, heights.length * heights.length, iterations);
  return area;
}

// Do not edit the line below.
exports.waterArea = waterArea;
