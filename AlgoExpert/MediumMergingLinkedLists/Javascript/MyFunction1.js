//Time: O(n+m)
//Space: O(n+m)

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  const hash = {};

  traverseList(linkedListOne, hash);
  return traverseList(linkedListTwo, hash);
}

function traverseList(list, hash) {
  let current = list;
  while (current !== null) {
    if (current.value in hash) return current;

    hash[current.value] = 1;
    current = current.next;
  }
  return null;
}

exports.mergingLinkedLists = mergingLinkedLists;
