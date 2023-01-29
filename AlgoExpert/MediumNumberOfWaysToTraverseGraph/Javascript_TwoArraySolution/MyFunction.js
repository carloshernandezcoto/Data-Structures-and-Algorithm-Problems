//Time: O(n * m)
//Space: O(n + m)
//Where n and m are the length and width of the graph.

//Two array solution. Better space complexity.

function numberOfWaysToTraverseGraph(width, height) {
  const n = width > height ? width : height;
  const m = width < height ? width : height;
  if ((n === 2 && m === 1) || (m === 2 && n === 1)) return 1;

  let v = []; //Represents the columns of the original matrix.
  let h = []; //Represents the rows of the original matrix.
  initializeArrays(v, h, n, m);
  for (let i = m - 1; i > 0; i--) {
    if (v.length > 1) v.pop();
    if (h.length > 1) h.pop();
    for (let r = v.length - 1; r >= 0; r--) {
      if (r === v.length - 1) v[r] = v[r] + h[h.length - 1];
      else v[r] = v[r] + v[r + 1];
    }
    for (let c = h.length - 1; c >= 0; c--) {
      if (c === h.length - 1) h[c] = v[v.length - 1];
      else h[c] = h[c] + h[c + 1];
    }
  }
  return h[0];
}

function initializeArrays(v, h, n, m) {
  for (let r = 0; r < m; r++) {
    v[r] = 1;
  }
  for (let c = 0; c < n; c++) {
    h[c] = 1;
  }
}

exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;
