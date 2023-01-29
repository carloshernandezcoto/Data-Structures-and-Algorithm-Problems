//Time: O(n)
//Space: O(n)
//n is the number of nodes in the graph.

// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
    let queue = [];
    queue.push(this);
    while (queue.length > 0) {
      let currentNode = queue.pop();
      array.push(currentNode.name);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.unshift(currentNode.children[i]);
      }
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
