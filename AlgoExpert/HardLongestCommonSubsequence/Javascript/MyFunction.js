//Time: O(m * n)
//Space: O(m * n)
//m is str1's length, n is str2's length.

function longestCommonSubsequence(str1, str2) {
  if (str1.length === 0 || str2.length === 0) return [];

  let sequences = [];
  initializeMatrix(sequences, str1.length - 1);

  initializeFirstRowAndColumn(str1, str2, sequences);

  for (let y = 1; y < str1.length; y++) {
    for (let x = 1; x < str2.length; x++) {
      if (str1[y] !== str2[x]) {
        sequences[y][x] = max(sequences[y - 1][x], sequences[y][x - 1]);
      } else {
        sequences[y][x] = max(
          sequences[y - 1][x],
          sequences[y][x - 1],
          sequences[y - 1][x - 1] + 1
        );
      }
    }
  }
  return rebuildLongestCommonSequence(sequences, str2);
}

function initializeMatrix(matrix, rows) {
  for (let y = 0; y <= rows; y++) {
    matrix.push([]);
  }
}

function initializeFirstRowAndColumn(str1, str2, matrix) {
  matrix[0][0] = str1[0] === str2[0] ? 1 : 0;
  for (let i = 1; i < str2.length; i++) {
    matrix[0][i] = matrix[0][i - 1] === 1 || str1[0] === str2[i] ? 1 : 0;
  }
  for (let j = 1; j < str1.length; j++) {
    matrix[j][0] = matrix[j - 1][0] === 1 || str1[j] === str2[0] ? 1 : 0;
  }
}

function max(n1, n2, n3 = -1) {
  const temp = n1 > n2 ? n1 : n2;
  return n3 > temp ? n3 : temp;
}

function rebuildLongestCommonSequence(matrix, str) {
  var y = matrix.length - 1;
  var x = matrix[0].length - 1;
  let sequence = [];
  let currentValue = matrix[y][x];
  for (let c = matrix[y][x]; c > 0; c--) {
    while (currentValue === c) {
      if (y > 0 && x > 0 && matrix[y - 1][x - 1] === currentValue) {
        y--;
        x--;
      } else if (y > 0 && matrix[y - 1][x] === currentValue) {
        y--;
      } else if (x > 0 && matrix[y][x - 1] === currentValue) {
        x--;
      } else {
        currentValue--;
        sequence.unshift(str[x]);
      }
    }
  }
  return sequence;
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;
