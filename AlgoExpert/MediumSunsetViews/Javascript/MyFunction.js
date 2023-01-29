// Time: O(n)
// Space: O(n)

function sunsetViews(buildings, direction) {
  const sunsetBuildings = [];

  if (direction === "WEST")
    findSunsetBuildings(sunsetBuildings, buildings, direction);
  if (direction === "EAST")
    findSunsetBuildings(
      sunsetBuildings,
      reverseArrayInPlace(buildings),
      direction
    );

  return sunsetBuildings;
}

function findSunsetBuildings(result, buildings, direction) {
  let tallestSoFar = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < buildings.length; i++) {
    if (buildings[i] > tallestSoFar) {
      if (direction === "WEST") result.push(i);
      if (direction === "EAST") result.unshift(buildings.length - 1 - i);
      tallestSoFar = buildings[i];
    }
  }
}

function reverseArrayInPlace(array) {
  let tmpStore = null;
  const halfPoint = parseInt(array.length / 2) - 1;
  for (let i = 0; i <= halfPoint; i++) {
    tmpStore = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tmpStore;
  }
  return array;
}

exports.sunsetViews = sunsetViews;
