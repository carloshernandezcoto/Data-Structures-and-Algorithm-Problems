//Time: O(d) worst case. d is the tree depth.
//Space: O(1)

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  if (node.right != null) return leftMostNodeFromTree(node.right);
  else return firstParentWithLeftChild(node);
}

function leftMostNodeFromTree(node) {
  let currentNode = node;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode;
}

function firstParentWithLeftChild(node) {
  let currentNode = node;
  while (currentNode.parent !== null) {
    if (currentNode.parent.left === currentNode) return currentNode.parent;
    currentNode = currentNode.parent;
  }
  return null;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
