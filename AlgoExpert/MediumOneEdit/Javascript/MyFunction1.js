//Time: O(n)
//Space: O(1)

function oneEdit(stringOne, stringTwo) {
  const l1 = stringOne.length;
  const l2 = stringTwo.length;
  let diffs = 0;

  switch (l1 - l2) {
    case 0:
      diffs = 0;
      for (let i = 0; i < l1; i++) {
        if (stringOne[i] !== stringTwo[i]) diffs++;
        if (diffs > 1) return false;
      }
      break;
    case 1:
      diffs = 0;
      for (let i = 0, j = 0; i < l1; i++, j++) {
        if (stringOne[i] !== stringTwo[j]) {
          diffs++;
          if (diffs > 1) return false;
          j--;
        }
      }
      break;
    case -1:
      diffs = 0;
      for (let i = 0, j = 0; i < l2; i++, j++) {
        if (stringOne[i] !== stringTwo[j]) {
          diffs++;
          if (diffs > 1) return false;
          i--;
        }
      }
      break;
    default:
      return false;
  }
  return true;
}

exports.oneEdit = oneEdit;
