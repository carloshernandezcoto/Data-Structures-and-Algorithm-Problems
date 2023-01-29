//Time: O(n)
//Space: O(1)

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

exports.LinkedList = LinkedList;
exports.reverseLinkedList = reverseLinkedList;
