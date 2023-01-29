//Time: O(n)
//Space: O(n)

function waterArea(heights) {
  // Write your code here.

  const len = heights.length;
  const leftMax = [];
  const rightMax = [];
  let area = 0;

  let currentMax = 0;

  for (let i = 0; i < len; i++) {
    if (currentMax < heights[i]) currentMax = heights[i];
    leftMax.push(currentMax);
  }

  currentMax = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (currentMax < heights[i]) currentMax = heights[i];
    rightMax.unshift(currentMax);
  }

  for (let i = 0; i < len; i++) {
    area += Math.min(leftMax[i], rightMax[i]) - heights[i];
  }

  //return areas.reduce((acc, ar) => acc + ar, 0);
  return area;
}

// Do not edit the line below.
exports.waterArea = waterArea;
