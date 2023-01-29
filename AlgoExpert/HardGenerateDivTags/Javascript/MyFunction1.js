// Time: O(n!)
// Space: O(n! )
// Time and space complexity are actually some crazy function that does involve !n
// However the actual formula is more for a theoretical mathematician to generate that for
// a software engineer...

function generateDivTags(numberOfTags) {
  const result = [];
  buildTags(numberOfTags, numberOfTags, "", result);
  return result;
}

function buildTags(open, close, current, result) {
  if (close === 0) return result.push(current);
  if (open) buildTags(open - 1, close, current + "<div>", result);
  if (close > open) buildTags(open, close - 1, current + "</div>", result);
}

exports.generateDivTags = generateDivTags;
