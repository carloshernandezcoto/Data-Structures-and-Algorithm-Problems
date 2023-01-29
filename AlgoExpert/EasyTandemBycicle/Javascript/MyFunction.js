//Time: O(n log(n))
//Space: O(1) **if Heap sort is used for sorting the arrays

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
  }
  let speed = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    speed =
      speed +
      (blueShirtSpeeds[i] > redShirtSpeeds[i]
        ? blueShirtSpeeds[i]
        : redShirtSpeeds[i]);
  }
  return speed;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
