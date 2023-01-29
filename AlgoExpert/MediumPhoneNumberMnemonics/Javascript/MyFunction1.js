//Time: O(3^n), roughly as it takes about 3 times the previous time to create a new array.
//This assumes most inputs are not 0, 1, 7 or 9.

//Space: O(n*3^n), due to the recursive call (n times) and the final size of the array ~ 3^n.

//My original solution. Not ideal as it uses too much space by recreating the output array
//on each recursive call.
function phoneNumberMnemonics(phoneNumber) {
  // Write your code here.
  const dict = {
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
  const pN = [...phoneNumber];
  const length = pN.length;

  const res = initializeRes(dict[pN[0]]);

  return recFt(res, dict, pN, 1, length);
}

function initializeRes(chars) {
  const res = [];
  chars.forEach((char) => {
    res.push([char]);
  });
  return res;
}

function recFt(res, dict, pN, idx, length) {
  if (length === 1) return res[0];
  const newRes = [];
  res.forEach((str) =>
    dict[pN[idx]].forEach((char) => {
      newRes.push([...str, char]);
    })
  );

  // for (let s = 0; s < res.length; s++)
  //   for (let c = 0; c < dict[pN[idx]].length; c++) {
  //     newRes.push([...res[s], dict[pN[idx]][c]]);
  //   }

  if (idx + 1 === length) return newRes.map((arr) => arr.join(""));

  return recFt(newRes, dict, pN, idx + 1, length);
}

// Do not edit the line below.
exports.phoneNumberMnemonics = phoneNumberMnemonics;
