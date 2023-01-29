//Time: O(n)
//Space: O(n)

//Ideal solution, removed usage of string concatenation, combined same code on OR statement.
function runLengthEncoding(string) {
  let encodedString = [];
  let counter = 1;
  let currentChar = string[0];

  for (let i = 1; i < string.length; i++) {
    if (counter === 9 || string[i] !== currentChar) {
      encodeCharacter(counter, currentChar, encodedString);
      counter = 0;
      currentChar = string[i];
    }
    counter++;
  }
  encodeCharacter(counter, currentChar, encodedString);
  return encodedString.join("");
}

function encodeCharacter(count, character, string) {
  string.push(count);
  string.push(character);
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
