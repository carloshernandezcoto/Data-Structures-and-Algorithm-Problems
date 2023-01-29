//Time: O(n + m)
//Space: O(n + m)
//Where n is one linked list's length, and n is the other

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let number1 = [];
  populateArrayFromLinkedList(linkedListOne, number1);
  let number2 = [];
  populateArrayFromLinkedList(linkedListTwo, number2);
  number1 = parseInt(number1.join(""), 10);
  number2 = parseInt(number2.join(""), 10);
  let sum = number1 + number2;
  sum = Array.from(String(sum), Number);

  const finalList = new LinkedList(sum[sum.length - 1]);
  let currentItem = finalList;
  for (let i = sum.length - 2; i >= 0; i--) {
    currentItem.next = new LinkedList(sum[i]);
    currentItem = currentItem.next;
  }

  return finalList;
}

function populateArrayFromLinkedList(linkedList, array) {
  let currentList = linkedList;
  while (currentList !== null) {
    array.unshift(currentList.value);
    currentList = currentList.next;
  }
  return array;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
