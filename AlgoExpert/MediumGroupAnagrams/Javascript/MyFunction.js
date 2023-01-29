// Time: O(n^2 * m)
// Space: (O(n*(m+n))
//n = words.length, m = length of the longest word,

function groupAnagrams(words) {
  let anagrams = words.length > 0 ? [createAnagram(words[0].split(""))] : null;
  let output = words.length > 0 ? [[words[0]]] : [];

  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i].split("");
    let matchingIndex = indexOfAnagram(currentWord, anagrams);
    if (matchingIndex !== -1) output[matchingIndex].push(words[i]);
    else {
      output.push([words[i]]);
      anagrams.push(createAnagram(currentWord));
    }
  }
  return output;
}

// Time: O(m), m is the length of the word.
function createAnagram(word) {
  let anagram = new Map();
  word.forEach((character) => {
    if (anagram.has(character))
      anagram.set(character, anagram.get(character) + 1);
    else anagram.set(character, 1);
  });
  return anagram;
}

//Time: O(a * m), a is anagrams size, m is word.length.
function indexOfAnagram(word, anagrams) {
  for (let i = 0; i < anagrams.length; i++) {
    if (wordMatchesAnagram(word, new Map(anagrams[i]))) return i;
  }
  return -1;
}

//Time: O(m), m is the length of the word.
function wordMatchesAnagram(word, anagram) {
  for (let i = 0; i < word.length; i++) {
    if (anagram.has(word[i]) && anagram.get(word[i]) > 0) {
      anagram.set(word[i], anagram.get(word[i]) - 1);
      if (anagram.get(word[i]) === 0) anagram.delete(word[i]);
    } else return false;
  }
  return anagram.size === 0 ? true : false;
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
