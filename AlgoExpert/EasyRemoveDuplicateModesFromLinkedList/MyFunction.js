  // This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
  









//const program = require('./program');
//const chai = require('chai');

class LinkedList1 extends LinkedList {
  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList1(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

//it('Test Case #1', function () 
function it(){
  const input = new LinkedList1(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);
  const expected = new LinkedList1(1).addMany([3, 4, 5, 6]);
  //const actual = program.removeDuplicatesFromLinkedList(input);
  removeDuplicatesFromLinkedList(input);
  //chai.expect(actual.getNodesInArray()).to.deep.equal(expected.getNodesInArray());
};






  
  

  


function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
	while(currentNode.next !== null)
		 {
			if(currentNode.value == currentNode.next.value)
			{
				if(currentNode.next.next !== null)
        {
					currentNode.next = currentNode.next.next;
          continue;
        }
				else
					currentNode.next = null;
			}
			if(currentNode.next !== null)
			 	currentNode = currentNode.next;
		}
  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
