// Time: O(n*m*log(m))
// Space: (nm)
//n = words.length, m = length of the longest word.

function groupAnagrams(words) {
  let output = [];
  let anagrams = new Map();

  for (let i = 0; i < words.length; i++) {
    const sortedWord = sortWord(words[i]);
    if (anagrams.has(sortedWord)) {
      anagrams.get(sortedWord).push(words[i]);
    } else {
      anagrams.set(sortedWord, [words[i]]);
    }
  }
  anagrams.forEach((value, key) => {
    output.push(value);
  });
  return output;
}

function sortWord(word) {
  const chars = [];
  word.split("").forEach((char) => {
    chars.push(char);
  });
  return chars.sort().join("");
}
// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
