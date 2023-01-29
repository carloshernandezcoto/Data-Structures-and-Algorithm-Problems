//Time: O(n*3^n), roughly as it takes about 3 times the previous time to create a new array.
//This assumes most inputs are not 0, 1, 7 or 9.

//Space: O(n*3^n), due to the recursive call (n times) and the final size of the array ~ 3^n.

//Another solution inspired on AlgoExpert's video explanation.
function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
  const dialPad = {
    0: ["0"],
    1: ["1"],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const digits = [...phoneNumber];
  const phoneLength = digits.length;
  const currentMnemonic = [];
  const mnemonics = [];

  mnemonicsBuilder(mnemonics, dialPad, digits, 0, phoneLength, currentMnemonic);
  return mnemonics;
}

function mnemonicsBuilder(
  mnemonics,
  dialPad,
  digits,
  idx,
  phoneLength,
  currentMnemonic
) {
  if (idx === phoneLength) {
    mnemonics.push(currentMnemonic.join(""));
    return;
  }

  const digitLength = dialPad[digits[idx]].length;
  const letters = dialPad[digits[idx]];

  for (let c = 0; c < digitLength; c++) {
    currentMnemonic[idx] = letters[c];
    mnemonicsBuilder(
      mnemonics,
      dialPad,
      digits,
      idx + 1,
      phoneLength,
      currentMnemonic
    );
  }
}

// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
