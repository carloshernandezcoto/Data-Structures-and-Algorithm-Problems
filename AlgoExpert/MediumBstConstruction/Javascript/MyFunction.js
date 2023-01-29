//Time: O(log(n))
//Space: O(1)

// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BST(value);
    let currentNode = this;
    while (true) {
      if (value >= currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
    return this;
  }

  contains(value) {
    //Good implementation
    let currentNode = this;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode =
        value >= currentNode.value ? currentNode.right : currentNode.left;
    }
    return false;
  }

  remove(value) {
    const nodeAndParent = this.findNodeAndParent(value);
    let node = nodeAndParent[0];
    let parent = nodeAndParent[1];
    if (node === null) return this;
    const isRoot = node !== null && parent === null ? true : false;

    if (!this.hasChildren(node)) {
      if (isRoot) return this;
      if (node.value >= parent.value) parent.right = null;
      else parent.left = null;
      return this;
    }

    if (isRoot) {
      if (node.right === null) {
        this.reassignThis(this.left);
        return this;
      }
      if (node.left === null) {
        this.reassignThis(this.right);
        return this;
      }
    } else {
      if (node.right === null) {
        if (node.value >= parent.value) parent.right = node.left;
        else parent.left = node.left;
        return this;
      }
      if (node.left === null) {
        if (node.value >= parent.value) parent.right = node.right;
        else parent.left = node.right;
        return this;
      }
    }

    //The node has 2 children
    const substituteNodeAndParent = this.substituteNodeAndParent(node);
    let substituteNode = substituteNodeAndParent[0];
    let substituteParent = substituteNodeAndParent[1];

    if (substituteNode.value >= substituteParent.value)
      substituteParent.right = substituteNode.right;
    else {
      substituteParent.left = substituteNode.right;
    }

    if (!isRoot) {
      substituteNode.left = node.left;
      substituteNode.right = node.right;
      node.value >= parent.value
        ? (parent.right = substituteNode)
        : (parent.left = substituteNode);
    } else {
      this.value = substituteNode.value;
    }
    return this;
  }

  hasChildren(node) {
    return node.left !== null || node.right !== null;
  }

  findNodeAndParent(value) {
    if (this.value === value) return [this, null];
    let parent = this;
    let currentNode = value >= parent.value ? parent.right : parent.left;

    while (currentNode !== null) {
      if (currentNode.value === value) return [currentNode, parent];
      parent = currentNode;
      currentNode = value >= parent.value ? parent.right : parent.left;
    }
    return [null, null];
  }

  substituteNodeAndParent(node) {
    let parent = node;
    let currentNode = node.right;
    while (currentNode.left !== null) {
      parent = currentNode;
      currentNode = currentNode.left;
    }
    return [currentNode, parent];
  }

  reassignThis(newThis) {
    this.value = newThis.value;
    this.left = newThis.left;
    this.right = newThis.right;
  }
}
// Do not edit the line below.
exports.BST = BST;
