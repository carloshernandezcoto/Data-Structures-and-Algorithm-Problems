//Time: O(n)
//Space: O(n)

function waterArea(heights) {
  // Write your code here.

  const len = heights.length;
  const areas = [];
  let area = 0;
  let currentMax = 0;

  for (let i = 0; i < len; i++) {
    if (currentMax < heights[i]) currentMax = heights[i];
    areas.push(currentMax);
  }

  currentMax = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (currentMax < heights[i] && currentMax < areas[i])
      currentMax = heights[i];
    areas[i] = Math.min(currentMax, areas[i]);
  }

  for (let i = 0; i < len; i++) {
    area += areas[i] - heights[i];
  }

  return area;
}

// Do not edit the line below.
exports.waterArea = waterArea;
