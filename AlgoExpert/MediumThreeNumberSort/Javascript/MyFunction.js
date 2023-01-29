//Time: O(n)
//Space: O(1)

function threeNumberSort(array, order) {
  // Write your code here.
  let p1 = -1;
  let p2 = -1;
  for (i = 0; i < array.length; i++) {
    //Original idea with a switch statement.
    // switch (array[i]) {
    //   case order[2]:
    //     break;
    //   case order[1]:
    //     p2++;
    //     swapItems(p2, i, array);
    //     break;
    //   case order[0]:
    //     p1++;
    //     p2++;
    //     swapItems(i, p1, array);
    //     if (p1 !== p2) swapItems(i, p2, array);
    //     break;
    // }

    //More elegant solution with less code.
    if (array[i] === order[1]) {
      p2++;
      swapItems(p2, i, array);
      continue;
    }
    if (array[i] === order[0]) {
      p1++;
      p2++;
      swapItems(i, p1, array);
      if (p1 !== p2) swapItems(i, p2, array);
    }
  }
  return array;
}

function swapItems(idx1, idx2, array) {
  //Old good way
  // const temp = array[idx1];
  // array[idx1] = array[idx2];
  // array[idx2] = temp;

  //New ES6 approach
  [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
}

// Do not edit the line below.
exports.threeNumberSort = threeNumberSort;
