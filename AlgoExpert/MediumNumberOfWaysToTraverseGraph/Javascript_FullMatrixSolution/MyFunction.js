//Time: O(n*m)
//Space: O(n*m)
//Where n and m are the length and width of the graph.

function numberOfWaysToTraverseGraph(width, height) {
  const n = width > height ? width : height;
  const m = width < height ? width : height;
  if ((n === 2) & (m === 1) || (m === 2) & (n === 1)) return 1;

  let matrix = [];
  initializeMatrix(matrix, n, m);
  let currentRow = m - 1;
  let currentColumn = n - 1;
  for (let i = m - 1; i > 0; i--) {
    if (currentRow > 0) currentRow--;
    if (currentColumn > 0) currentColumn--;
    for (let r = currentRow; r >= 0; r--) {
      matrix[r][currentColumn] =
        matrix[r][currentColumn + 1] + matrix[r + 1][currentColumn];
    }
    for (let c = currentColumn; c >= 0; c--) {
      matrix[currentRow][c] =
        matrix[currentRow][c + 1] + matrix[currentRow + 1][c];
    }
  }
  return matrix[0][0];
}

function initializeMatrix(matrix, n, m) {
  for (let i = 0; i < m; i++) {
    matrix.push([]);
  }
  for (let r = 0; r < m; r++) {
    matrix[r][n - 1] = 1;
  }
  for (let c = 0; c < n; c++) {
    matrix[m - 1][c] = 1;
  }
}

exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;
