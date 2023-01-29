//Time: O(n log(n))
//Space: O(1)

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  let tallerPeople =
    redShirtHeights[0] > blueShirtHeights[0]
      ? redShirtHeights
      : blueShirtHeights;
  let shorterPeople =
    blueShirtHeights[0] < redShirtHeights[0]
      ? blueShirtHeights
      : redShirtHeights;

  for (let i = 0; i < tallerPeople.length; i++) {
    if (tallerPeople[i] <= shorterPeople[i]) return false;
  }
  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
