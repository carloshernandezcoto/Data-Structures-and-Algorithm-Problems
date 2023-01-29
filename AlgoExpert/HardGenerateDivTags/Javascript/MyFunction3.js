//Time: O(n!)
//Space: O(n!)

//Solution using arrays of characters in order to avoid creating too many strings.

function generateDivTags(numberOfTags) {
  const result = [];
  buildTags(numberOfTags, numberOfTags, [], result, numberOfTags);
  return result;
}

function buildTags(open, close, current, result) {
  if (close === 0) return result.push(current.join(""));

  if (open) {
    current.push("<", "d", "i", "v", ">");
    buildTags(open - 1, close, current, result);
    current.splice(current.length - 5, 5);
  }
  if (close > open) {
    current.push("<", "/", "d", "i", "v", ">");
    buildTags(open, close - 1, current, result);
    current.splice(current.length - 6, 6);
  }
}

exports.generateDivTags = generateDivTags;
