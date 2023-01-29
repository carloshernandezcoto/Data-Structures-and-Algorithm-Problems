//Time: O(Max(n, m))
//Space: O(Max(n,m))
//Where n is one linked list's length, and n is the other linked list's length.

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let currentNode1 = linkedListOne;
  let currentNode2 = linkedListTwo;
  let value1 = currentNode1 !== null ? currentNode1.value : 0;
  let value2 = currentNode2 !== null ? currentNode2.value : 0;
  let sum = value1 + value2;
  let carry = sum <= 9 ? 0 : 1;
  let head = new LinkedList(carry === 0 ? sum : Number(String(sum)[1]));
  let currentNode = head;
  if (isLastNode(currentNode1, currentNode2)) {
    if (carry === 1) head.next = new LinkedList(1);
    return head;
  }
  while (true) {
    currentNode1 = assignNextNode(currentNode1);
    currentNode2 = assignNextNode(currentNode2);
    value1 = currentNode1 !== null ? currentNode1.value : 0;
    value2 = currentNode2 !== null ? currentNode2.value : 0;
    sum = value1 + value2 + carry;
    if (sum <= 9) {
      carry = 0;
      currentNode.next = new LinkedList(sum);
      currentNode = currentNode.next;
    } else {
      carry = 1;
      currentNode.next = new LinkedList(Number(String(sum)[1]));
      currentNode = currentNode.next;
      if (isLastNode(currentNode1, currentNode2))
        currentNode.next = new LinkedList(1);
    }
    if (isLastNode(currentNode1, currentNode2)) return head;
  }
}

function isLastNode(node1, node2) {
  const node1Last = node1 === null || (node1 !== null && node1.next === null);
  const node2Last = node2 === null || (node2 !== null && node2.next === null);
  return node1Last && node2Last;
}

function assignNextNode(node) {
  return node !== null && node.next !== null ? node.next : null;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
