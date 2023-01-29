// Time: O(n + m)
// Space: O(n)
// n: amount of vertices, m: amount of edges

function twoColorable(edges) {
  const processedNodes = {};
  const blueNodes = {};
  const redNodes = {};
  const queue = [];

  //*** arbitrary assignment for 0 and its siblings
  blueNodes[0] = true;
  for (let j = 0; j < edges[0].length; j++) {
    if (edges[0][j] === 0) return false;
    redNodes[edges[0][j]] = true;
    queue.push(edges[0][j]);
  }
  processedNodes[0] = true;
  //***
  if (!processRemainingNodes(queue, blueNodes, redNodes, edges, processedNodes))
    return false;

  if (!allNodesProcessed(processedNodes, edges.length)) {
    for (let n = 0; n < processedNodes.length; n++) {
      if (!processedNodes[n]) queue.push(processedNodes[n]);
    }
    if (
      !processRemainingNodes(queue, blueNodes, redNodes, edges, processedNodes)
    )
      return false;
  }
  return true;
}

function processRemainingNodes(
  queue,
  blueNodes,
  redNodes,
  edges,
  processedNodes
) {
  while (queue.length > 0) {
    let currentNode = queue.shift();
    let currentNodeColor = currentNode in blueNodes ? blueNodes : redNodes;
    for (let j = 0; j < edges[currentNode].length; j++) {
      if (edges[currentNode][j] === currentNode) return false;
      if (edges[currentNode][j] in currentNodeColor) return false;
      else {
        if (currentNodeColor === blueNodes)
          redNodes[edges[currentNode][j]] = true;
        if (currentNodeColor === redNodes)
          blueNodes[edges[currentNode][j]] = true;
      }
      if (!processedNodes[edges[currentNode][j]])
        queue.push(edges[currentNode][j]);
    }
    processedNodes[currentNode] = true;
  }
  return true;
}

function allNodesProcessed(processedNodes) {
  for (let i = 0; i < processedNodes.length; i++)
    if (processedNodes[i] === false) return false;
  return true;
}
exports.twoColorable = twoColorable;
