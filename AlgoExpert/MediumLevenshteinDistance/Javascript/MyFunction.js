//Time: O(n*m)
//Space: O(n)
//Where n is the longest string's length and m is the shortest string's length.

function levenshteinDistance(str1, str2) {
  const longStr = str1.length > str2.length ? "*" + str1 : "*" + str2;
  const shortStr = str1.length <= str2.length ? "*" + str1 : "*" + str2;
  const n = longStr.length;
  const m = shortStr.length;
  let edits = [];
  edits.push([]);
  edits.push([]);

  for (let r = 0; r < m; r++) {
    copyArray(edits[1], edits[0]);
    edits[1] = [];
    for (let c = 0; c < n; c++) {
      if (r === 0) {
        if (shortStr[r] === longStr[c]) {
          edits[1].push(0);
        } else edits[1].push(edits[1][c - 1] + 1);
      } else {
        if (shortStr[r] === longStr[c]) {
          edits[1].push(edits[0][c - 1]);
        } else {
          const smallestValue =
            c === 0
              ? edits[0][c]
              : minVal(edits[0][c], edits[0][c - 1], edits[1][c - 1]);
          edits[1].push(1 + smallestValue);
        }
      }
    }
    if (r === m - 1) return edits[1][n - 1];
  }
}

function minVal(val1, val2, val3) {
  const temp = val1 < val2 ? val1 : val2;
  return val3 < temp ? val3 : temp;
}

function copyArray(baseArray, targetArray) {
  for (let k = 0; k < baseArray.length; k++) targetArray[k] = baseArray[k];
}

exports.levenshteinDistance = levenshteinDistance;
