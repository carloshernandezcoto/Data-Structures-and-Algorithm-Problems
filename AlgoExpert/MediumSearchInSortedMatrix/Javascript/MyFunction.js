//Time: O(log(n*m))
//Space: O(log(n*m))

var widthG = undefined;
var heightG = undefined;
var targetG = undefined;
let coordinatesG = undefined;

function searchInSortedMatrix(matrix, target) {
  widthG = matrix.length > 0 ? matrix[0].length : 0;
  heightG = matrix.length;
  targetG = target;
  coordinatesG = [-1, -1];
  let x = parseInt((widthG - 1) / 2);
  let y = parseInt((heightG - 1) / 2);
  let visited = new Set();
  let program = { stop: false };
  analizeBoundaries(y, x, matrix, visited, program);
  return [coordinatesG, visited.size];
  //return coordinatesG;
}

function analizeBoundaries(y, x, matrix, visited, program) {
  if (!hasValidBoundaries(y, x) || program.stop) return;
  if (matrix[y][x] === targetG) {
    coordinatesG[0] = y;
    coordinatesG[1] = x;
    program.stop = true;
    return;
  }
  visited.add(y + "," + x);
  if (targetG > matrix[y][x]) {
    if (!visited.has(y + 1 + "," + (x + 1)) && !program.stop)
      analizeBoundaries(y + 1, x + 1, matrix, visited, program);
    if (!visited.has(y + "," + (x + 1)) && !program.stop)
      analizeBoundaries(y, x + 1, matrix, visited, program);
    if (!visited.has(y + 1 + "," + x) && !program.stop)
      analizeBoundaries(y + 1, x, matrix, visited, program);
    if (!visited.has(y - 1 + "," + (x + 1)) && !program.stop)
      analizeBoundaries(y - 1, x + 1, matrix, visited, program);
    if (!visited.has(y + 1 + "," + x - 1) && !program.stop)
      analizeBoundaries(y + 1, x - 1, matrix, visited, program);
  } else {
    if (!visited.has(y - 1 + "," + (x - 1)) && !program.stop)
      analizeBoundaries(y - 1, x - 1, matrix, visited, program);
    if (!visited.has(y + "," + (x - 1)) && !program.stop)
      analizeBoundaries(y, x - 1, matrix, visited, program);
    if (!visited.has(y - 1 + "," + x) && !program.stop)
      analizeBoundaries(y - 1, x, matrix, visited, program);
    if (!visited.has(y - 1 + "," + (x + 1)) && !program.stop)
      analizeBoundaries(y - 1, x + 1, matrix, visited, program);
    if (!visited.has(y + 1 + "," + x - 1) && !program.stop)
      analizeBoundaries(y + 1, x - 1, matrix, visited, program);
  }
  return;
}

function hasValidBoundaries(y, x) {
  return x < widthG && y < heightG && x >= 0 && y >= 0 ? true : false;
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
