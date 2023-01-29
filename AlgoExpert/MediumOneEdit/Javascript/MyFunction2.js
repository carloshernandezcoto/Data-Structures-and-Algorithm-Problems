//Time: O(n)
//Space: O(1)

//Much smaller solution than Solution 1.
function oneEdit(stringOne, stringTwo) {
  const l1 = stringOne.length;
  const l2 = stringTwo.length;
  let diffs = 0;

  if (Math.abs(l1 - l2) > 1) return false;

  for (let i = 0, j = 0; i < l1; i++, j++) {
    if (stringOne[i] !== stringTwo[j]) {
      diffs++;
      if (diffs > 1) return false;
      if (l1 > l2) j--;
      if (l1 < l2) i--;
    }
  }

  return true;
}

exports.oneEdit = oneEdit;
