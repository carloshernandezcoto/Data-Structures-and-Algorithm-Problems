//Time: O(nlog(n))
//Space: O(n) since the supporting heap needs to be created.
function heapSort(array) {
  // Write your code here.
  const iterations = array.length - 1;
  let myHeap = new MaxHeap(array);
  for (let i = iterations; i > 0; i--) {
    swap(0, i, array);
    //assignHeapToResult(array, myHeap.buildHeap(array.slice(0, i)));
    assignHeapToResult(array, myHeap.siftDown(0, array.slice(0, i)));
  }
  return array;
}

function assignHeapToResult(array, result) {
  for (let k = 0; k < result.length; k++) array[k] = result[k];
}

function swap(idx1, idx2, array) {
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
    this.length = array.length;
  }

  //Time: O(n), Space: O(1).
  buildHeap(array) {
    let lastParentNode = this.lastParentNode(array);
    for (let i = lastParentNode; i >= 0; i--) {
      if (this.hasChildren(i, array)) this.siftDown(i, array);
    }
    return array;
  }

  //Time: O(log(n), Space: O(1)).
  siftDown(idx, heap) {
    let maxChildIdx = this.maxChild(idx, heap);
    if (maxChildIdx === null) heap;

    while (heap[maxChildIdx] > heap[idx]) {
      this.swap(idx, maxChildIdx, heap);
      idx = maxChildIdx;
      maxChildIdx = this.maxChild(idx, heap);
      if (maxChildIdx === null) return heap;
    }
    return heap;
  }

  //Time: O(log(n), Space: O(1)).
  siftUp(idx, heap) {
    let parentIdx = Math.floor((idx - 1) / 2);
    while (heap[parentIdx] < heap[idx] && idx > 0) {
      this.swap(idx, parentIdx, heap);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  //Time: O(1), Space: O(1)).
  peek() {
    return this.heap[0];
  }

  //Time: O(log(n), Space: O(1)).
  remove(heap) {
    this.swap(0, heap.length - 1, heap);
    const returnValue = heap.pop();
    this.siftDown(0, heap);
    return returnValue;
  }

  //Time: O(log(n), Space: O(1)).
  insert(value, heap) {
    heap.push(value);
    this.siftUp(heap.length - 1, heap);
  }

  swap(idx1, idx2, heap) {
    const h = heap;
    [h[idx1], h[idx2]] = [h[idx2], h[idx1]];
  }

  maxChild(idx, heap) {
    const child1Idx = 2 * idx + 1;
    const child2Idx = child1Idx + 1;
    const upperLimit = heap.length - 1;

    if (child1Idx > upperLimit && child2Idx > upperLimit) return null;

    if (child1Idx > upperLimit) return child2Idx;
    if (child2Idx > upperLimit) return child1Idx;

    if (heap[child1Idx] > heap[child2Idx]) return child1Idx;
    return child2Idx;
  }

  hasChildren(idx, heap) {
    return idx * 2 + 1 < heap.length || idx * 2 + 2 < heap.length;
  }

  lastParentNode(heap) {
    const lastIndex = heap.length - 1;
    return Math.floor((lastIndex - 1) / 2);
  }
}

// Do not edit the line below.
exports.heapSort = heapSort;
