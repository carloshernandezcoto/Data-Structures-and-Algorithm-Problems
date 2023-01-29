// Time: O(n * m)
// Space: O(n * m)
// n: number of words in the array, m: length of largest word in the array
function semordnilap(words) {
  const result = [];
  const semordnilapHash = {};

  for (let i = 0; i < words.length; i++) {
    const reverseWord = reverse(words[i]);
    if (reverseWord in semordnilapHash) {
      result.push([words[i], reverseWord]);
      continue;
    }
    semordnilapHash[words[i]] = true;
  }
  return result;
}

function reverse(str) {
  const chars = [];
  for (let i = str.length - 1; i >= 0; i--) {
    chars.push(str[i]);
  }
  return chars.join("");
}

exports.semordnilap = semordnilap;
