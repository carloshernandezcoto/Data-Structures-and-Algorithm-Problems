//Time,Space: See class methods below.

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  //Time: O(n^2), //Space: O(n^2)
  populateSuffixTrieFrom(string) {
    const length = string.length;

    for (let i = 0; i < length; i++) {
      let currentHash = this.root;
      for (let j = i; j < length; j++) {
        const character = string[j];
        if (!currentHash.hasOwnProperty(character)) {
          currentHash[character] = {};
        }
        currentHash = currentHash[character];
      }
      currentHash["*"] = true;
    }
  }

  //Time: O(n), //Space: (1)
  contains(string) {
    const length = string.length;
    let currentHash = this.root;

    for (let i = 0; i < length; i++) {
      const character = string[i];
      if (!currentHash.hasOwnProperty(character)) {
        return false;
      }
      currentHash = currentHash[character];
    }
    return currentHash.hasOwnProperty(this.endSymbol);
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
