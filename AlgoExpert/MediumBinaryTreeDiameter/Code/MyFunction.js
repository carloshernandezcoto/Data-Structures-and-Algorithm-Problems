// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function it() {
	//Case 1
//   const root = new BinaryTree(1);
//   root.left = new BinaryTree(3);
//   root.left.left = new BinaryTree(7);
//   root.left.left.left = new BinaryTree(8);
//   root.left.left.left.left = new BinaryTree(9);
//   root.left.right = new BinaryTree(4);
//   root.left.right.right = new BinaryTree(5);
//   root.left.right.right.right = new BinaryTree(6);
//   root.right = new BinaryTree(2);
//   const expected = 6;
	//Case 2
const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);
const expected = 4;
const actual = binaryTreeDiameter(root);
}

var diameter = 0;
function binaryTreeDiameter(tree) {
	maxDiameter(tree);
	return diameter;
  }
  
  function maxDiameter(node) {
	if(node == null)
		  return;
	  let currentDepth = sumOfDeepestBranches(node)
	  if(currentDepth > diameter)
		  diameter = currentDepth;
	  maxDiameter(node.left);
	  maxDiameter(node.right);
  }

function sumOfDeepestBranches(node) {
	return branchMaxDepth(node.left) + branchMaxDepth(node.right);
}

function branchMaxDepth(node) {
	if(node == null)
		return 0;
	if(node.left == null && node.right == null)
		return 1;
	if(node.left != null && node.right != null)
		return 1 + maxValue(branchMaxDepth(node.left), branchMaxDepth(node.right));
	if(node.left == null)
		return 1 + branchMaxDepth(node.right);
	if(node.right == null)
		return 1 + branchMaxDepth(node.left);
}

function maxValue(value1, value2) {
	if(value1 > value2)
		return value1;
	return value2;
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
