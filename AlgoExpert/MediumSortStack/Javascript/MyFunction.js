//Time: O(n^2)
//Space: O(n)

function sortStack(stack) {
  // Write your code here.
  return unstack(stack);
}

function unstack(stack) {
  const top = stack.pop();
  if (top === undefined) return stack;

  unstack(stack);
  insertNumber(top, stack);

  return stack;
}

function insertNumber(number, stack) {
  if (stack.length === 0 || number >= stack[stack.length - 1])
    stack.push(number);
  else {
    const savedValue = stack.pop();
    insertNumber(number, stack);
    stack.push(savedValue);
  }
}

// Do not edit the line below.
exports.sortStack = sortStack;
