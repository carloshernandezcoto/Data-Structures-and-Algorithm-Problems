//Time: O(1) for each methoed requested
//Space: O(1) for anything other than storing the stack values themselves.

class MinMaxStack {
  #stack;
  constructor() {
    this.#stack = [];
  }

  peek() {
    return !this.#stack.length ? null : this.#stack[0][0];
  }

  pop() {
    return !this.#stack.length ? null : this.#stack.shift()[0];
  }

  push(number) {
    // Write your code here.
    const min = !this.#stack.length
      ? number
      : Math.min(this.#stack[0][1], number);
    const max = !this.#stack.length
      ? number
      : Math.max(this.#stack[0][2], number);

    this.#stack.unshift([number, min, max]);
  }

  getMin() {
    return !this.#stack.length ? null : this.#stack[0][1];
  }

  getMax() {
    return !this.#stack.length ? null : this.#stack[0][2];
  }
}

exports.MinMaxStack = MinMaxStack;
