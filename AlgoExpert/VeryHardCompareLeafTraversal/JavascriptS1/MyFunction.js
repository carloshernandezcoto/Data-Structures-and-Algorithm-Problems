//TODO:
//Find out about the best way to compare integer arrays in javascript.

// n: Tree nodes, d: maximum tree depth, l: tree leaves.
//Time complexity: O(n)
//Space complexity: O(d * l)

//Javascript solution.

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function compareLeafTraversal(tree1, tree2) {
  // Write your code here.
  let leaves1 = [];
  let leaves2 = [];
  depthFirstTraversal(leaves1, tree1);
  depthFirstTraversal(leaves2, tree2);

  return JSON.stringify(leaves1) === JSON.stringify(leaves2);
}

function depthFirstTraversal(leaves, tree) {
  //Logic here
  if (tree.left === null && tree.right === null) {
    leaves.push(tree.value);
    return;
  }
  if (tree.left !== null) depthFirstTraversal(leaves, tree.left);
  if (tree.right !== null) depthFirstTraversal(leaves, tree.right);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.compareLeafTraversal = compareLeafTraversal;
