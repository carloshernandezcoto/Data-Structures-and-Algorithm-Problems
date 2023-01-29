//n: Amount of nodes in T1, m: Amount of nodes in T2.
//h1: Height of T1, h2: Height of T2
//Time complexity: O(n+m)
//Space complexity: O(h1+h2)

//Javascript solution 2.

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  get isEmpty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length > 0) return this.items.pop();
    return null;
  }

  peek() {
    if (this.items.length > 0) return this.items[this.items.length - 1];
    return null;
  }

  // isEmpty() {
  //   return this.items.length === 0;
  // }
}

function nextLeaf(stack) {
  if (stack.isEmpty) return null;
  while (!stack.isEmpty) {
    let node = stack.pop();
    if (node.left === null && node.right === null) return node;
    if (node.right !== null) stack.push(node.right);
    if (node.left !== null) stack.push(node.left);
  }
}

function compareLeafTraversal(tree1, tree2) {
  // Write your code here.

  let st1 = new Stack();
  let st2 = new Stack();

  if (tree1 !== null) st1.push(tree1);
  if (tree2 !== null) st2.push(tree2);

  while (!st1.isEmpty || !st2.isEmpty) {
    let n1 = nextLeaf(st1);
    let n2 = nextLeaf(st2);
    if (n1.value !== n2.value) return false;
  }
  if (st1.isEmpty && st2.isEmpty) return true;
  return false;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.compareLeafTraversal = compareLeafTraversal;
