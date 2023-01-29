//Time: O()
//Space: O()

const FORWARD = "forward";
const BACKWARDS = "backwards";
function searchInSortedMatrix(matrix, target) {
  if (matrix === [[]] || matrix === []) return [-1, -1];
  let width = matrix[0].length;
  let height = matrix.length;

  let x = parseInt((width - 1) / 2);
  let y = parseInt((height - 1) / 2);
  const direction = target < matrix[y][x] ? "backwards" : "forward";
  let diagonalOver = false;

  while (!diagonalOver) {
    if (matrix[y][x] === target) return [y, x];
    switch (direction) {
      case FORWARD:
        if (
          hasValidBoundaries(x + 1, y + 1, width, height) &&
          matrix[y + 1][x + 1] <= target
        ) {
          y++;
          x++;
        } else {
          diagonalOver = true;
        }
        break;
      case BACKWARDS:
        if (
          hasValidBoundaries(x - 1, y - 1, width, height) &&
          matrix[y - 1][x - 1] >= target
        ) {
          y--;
          x--;
        } else {
          diagonalOver = true;
        }
        break;
      default:
        return [-1, -1];
    }
  }
  switch (direction) {
    case FORWARD:
      for (let i = x + 1; i < width; i++) {
        if (hasValidBoundaries(i, y, width, height) && matrix[y][i] === target)
          return [y, i];
        if (hasValidBoundaries(i, y, width, height) && matrix[y][i] > target)
          break;
      }

      for (let i = y + 1; i < height; i++) {
        if (hasValidBoundaries(x, i, width, height) && matrix[i][x] === target)
          return [i, x];
        if (hasValidBoundaries(x, i, width, height) && matrix[i][x] > target)
          break;
      }

      for (let i = x; i >= 0; i--) {
        if (
          hasValidBoundaries(i, y + 1, width, height) &&
          matrix[y + 1][i] === target
        )
          return [y + 1, i];
        if (
          hasValidBoundaries(i, y + 1, width, height) &&
          matrix[y + 1][i] < target
        )
          break;
      }

      for (let i = y; i >= 0; i--) {
        if (
          hasValidBoundaries(x + 1, i, width, height) &&
          matrix[i][x + 1] === target
        )
          return [i, x + 1];
        if (
          hasValidBoundaries(x + 1, i, width, height) &&
          matrix[i][x + 1] < target
        )
          break;
      }
      break;

    case BACKWARDS:
      for (let i = x - 1; i >= 0; i--) {
        if (hasValidBoundaries(i, y, width, height) && matrix[y][i] === target)
          return [y, i];
        if (hasValidBoundaries(i, y, width, height) && matrix[y][i] < target)
          break;
      }

      for (let i = y - 1; i >= 0; i--) {
        if (hasValidBoundaries(x, i, width, height) && matrix[i][x] === target)
          return [i, x];
        if (hasValidBoundaries(x, i, width, height) && matrix[i][x] < target)
          break;
      }

      for (let i = x; i < width; i++) {
        if (
          hasValidBoundaries(i, y - 1, width, height) &&
          matrix[y - 1][i] === target
        )
          return [y - 1, i];
        if (
          hasValidBoundaries(i, y - 1, width, height) &&
          matrix[y - 1][i] > target
        )
          break;
      }

      for (let i = y; i < height; i--) {
        if (
          hasValidBoundaries(x - 1, i, width, height) &&
          matrix[i][x - 1] === target
        )
          return [i, x - 1];
        if (
          hasValidBoundaries(x - 1, i, width, height) &&
          matrix[i][x - 1] > target
        )
          break;
      }
      break;

    default:
      return [-1, -1];
  }
  return [-1, -1];
}

function hasValidBoundaries(x, y, width, height) {
  return x < width && y < height && x >= 0 && y >= 0 ? true : false;
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
