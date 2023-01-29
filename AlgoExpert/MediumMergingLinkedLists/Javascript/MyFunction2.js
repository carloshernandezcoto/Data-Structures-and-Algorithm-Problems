//Time: O(max(n,m))
//Space: O(1)

// Solution using length calculation to start checking for equality
// at a 'common' point, at least lenght wise.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

exports.LinkedList = LinkedList;

function mergingLinkedLists(linkedListOne, linkedListTwo) {
  const lengthDiff = length(linkedListOne) - length(linkedListTwo);

  let longList = lengthDiff >= 0 ? linkedListOne : linkedListTwo;
  let shortList = lengthDiff >= 0 ? linkedListTwo : linkedListOne;

  longList = advanceLongest(longList, Math.abs(lengthDiff));

  while (longList !== null && shortList !== null) {
    if (longList === shortList) return longList;

    longList = longList.next;
    shortList = shortList.next;
  }
  return null;
}

function length(list) {
  let length = 0;
  let current = list;
  while (current != null) {
    length++;
    current = current.next;
  }
  return length;
}

function advanceLongest(list, steps) {
  let node = list;
  for (let i = 1; i <= steps; i++) node = node.next;

  return node;
}

exports.mergingLinkedLists = mergingLinkedLists;
