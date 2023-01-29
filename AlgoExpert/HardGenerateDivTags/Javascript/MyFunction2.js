//Time: O(n!)
//Space: O(n!)

// Solution using arrays of characters.
// This is a poor implementation since a new array is created on every recursive call.
// For a robust solution, see file "MyFunction3".

function generateDivTags(numberOfTags) {
  const result = [];
  buildTags(numberOfTags, numberOfTags, [], result, numberOfTags);
  return result;
}

function buildTags(open, close, current, result) {
  if (close === 0) return result.push(current.join(""));

  if (open) {
    const newOpenTag = [...current, "<", "d", "i", "v", ">"];
    buildTags(open - 1, close, newOpenTag, result);
  }
  if (close > open) {
    const newCloseTag = [...current, "<", "/", "d", "i", "v", ">"];
    buildTags(open, close - 1, newCloseTag, result);
  }
}

exports.generateDivTags = generateDivTags;
