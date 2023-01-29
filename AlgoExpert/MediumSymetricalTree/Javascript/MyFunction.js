//Time: O(n)
//Space: O(n)
// n is the amount of nodes in the tree

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BinaryTree = BinaryTree;

function symmetricalTree(tree) {
  // Write your code here.
  let leftStack = [];
  let rightStack = [];
  buildStack(tree.left, leftStack, "left");
  buildStack(tree.right, rightStack, "right");
  return areStackEqual(leftStack, rightStack);
}

function buildStack(tree, stack, mode) {
  if (!tree || !tree.value) return;

  stack.push(tree.value);

  if (mode === "left") {
    buildStack(tree.left, stack, "left");
    buildStack(tree.right, stack, "left");
  } else {
    buildStack(tree.right, stack, "right");
    buildStack(tree.left, stack, "right");
  }
}

function areStackEqual(stack1, stack2) {
  while (stack1.length > 0 && stack2.length > 0) {
    if (stack1.pop() !== stack2.pop()) return false;
  }
  return stack1.length === 0 && stack2.length === 0;
}

// Do not edit the line below.
exports.symmetricalTree = symmetricalTree;
