//Time: O(n*m) n is the matrix width and m is the matrix height
//Space: O(r) r is the amount of rivers in the matrix

function riverSizes(matrix) {
  // Write your code here.
  const width = matrix[0].length;
  const height = matrix.length;

  const result = [];

  for (let x = 0; x < width; x++)
    for (let y = 0; y < height; y++) {
      if (matrix[y][x] === 0) continue;

      result.push(searchForOnes(x, y, width, height, matrix));
    }

  return result;
}

function isWithinBoundaries(x, y, width, height) {
  return x >= 0 && x < width && y >= 0 && y < height;
}

function searchForOnes(x, y, width, height, matrix) {
  let current = 0;
  if (!isWithinBoundaries(x, y, width, height) || matrix[y][x] === 0)
    return current;

  matrix[y][x] = 0;
  current++;
  current += searchForOnes(x + 1, y, width, height, matrix);
  current += searchForOnes(x - 1, y, width, height, matrix);
  current += searchForOnes(x, y + 1, width, height, matrix);
  current += searchForOnes(x, y - 1, width, height, matrix);
  return current;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
