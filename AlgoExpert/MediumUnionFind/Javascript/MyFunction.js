//Time: O(1)
//Space: O(1)

class UnionFind {
  constructor() {
    this.set = {};
  }

  createSet(value) {
    this.set[value] = value;
  }

  find(value) {
    return this.set[value] !== undefined ? this.set[value] : null;
  }

  union(valueOne, valueTwo) {
    if (
      this.set[valueOne] === undefined ||
      this.set[valueTwo] === undefined ||
      this.set[valueOne] === this.set[valueTwo]
    )
      return;

    //const rep = Math.min(this.set[valueOne], this.set[valueTwo]);
    const newRep = this.set[valueOne];
    const oldRep = this.set[valueTwo];
    for (const key in this.set) {
      if (this.set[key] === oldRep) this.set[key] = newRep;
    }
  }
}

exports.UnionFind = UnionFind;
