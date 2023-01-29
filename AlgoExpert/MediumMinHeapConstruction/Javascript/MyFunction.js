// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  //Time: O(n), Space: O(1).
  buildHeap(array) {
    this.heap = array;
    let lastParentNode = this.lastParentNode();
    for (let i = lastParentNode; i >= 0; i--) {
      if (this.hasChildren(i)) this.siftDown(i);
    }
    return this.heap;
  }

  //Time: O(log(n), Space: O(1)).
  siftDown(idx) {
    let minChildIdx = this.minChild(idx);
    if (minChildIdx === null) return;

    while (this.heap[minChildIdx] < this.heap[idx]) {
      this.swap(idx, minChildIdx);
      idx = minChildIdx;
      minChildIdx = this.minChild(idx);
      if (minChildIdx === null) return;
    }
  }

  //Time: O(log(n), Space: O(1)).
  siftUp(idx) {
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.heap[parentIdx] > this.heap[idx] && idx > 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  //Time: O(1), Space: O(1)).
  peek() {
    return this.heap[0];
  }

  //Time: O(log(n), Space: O(1)).
  remove() {
    this.swap(0, this.heap.length - 1);
    const returnValue = this.heap.pop();
    this.siftDown(0);
    return returnValue;
  }

  //Time: O(log(n), Space: O(1)).
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  swap(idx1, idx2) {
    const h = this.heap;
    [h[idx1], h[idx2]] = [h[idx2], h[idx1]];
  }

  minChild(idx) {
    const child1Idx = 2 * idx + 1;
    const child2Idx = child1Idx + 1;
    const upperLimit = this.heap.length - 1;

    if (child1Idx > upperLimit && child2Idx > upperLimit) return null;

    if (child1Idx > upperLimit) return child2Idx;
    if (child2Idx > upperLimit) return child1Idx;

    if (this.heap[child1Idx] < this.heap[child2Idx]) return child1Idx;
    return child2Idx;
  }

  hasChildren(idx) {
    return idx * 2 + 1 < this.heap.length || idx * 2 + 2 < this.heap.length;
  }

  lastParentNode() {
    const lastIndex = this.heap.length - 1;
    return Math.floor((lastIndex - 1) / 2);
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
