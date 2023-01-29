//Time: O(n)
//Space: O(n), where n is the size of the input string.
//Since IP addresses can only be 12 characters long at most, n can never be
//greater than 12. So this time/space complexity can easily be expressed as O(1).

//Same solution using an array of characters just to practice how those work.
function validIPAddresses(string) {
  const str = [...string];
  const len = str.length;
  const result = [];
  if (len < 4 || len > 12) return result;
  const pointers = [2, 1, 0];

  while (pointers[0] < len - 1) {
    analyzeIP(pointers[0], pointers[1], pointers[2], result, str);
    updatePointers(pointers);
  }

  return result;
}

function analyzeIP(x, y, z, result, str) {
  const ip1 = str.slice(0, z + 1);
  const ip2 = str.slice(z + 1, y + 1);
  const ip3 = str.slice(y + 1, x + 1);
  const ip4 = str.slice(x + 1, str.length);

  if (isValid(ip1) && isValid(ip2) && isValid(ip3) && isValid(ip4)) {
    result.push(
      `${ip1.join("")}.${ip2.join("")}.${ip3.join("")}.${ip4.join("")}`
    );
  }
}

function isValid(ip) {
  const ipN = Number(ip.join(""));
  return !(ipN >= 256 || (ip[0] === "0" && ip.length > 1));
}

function updatePointers(pointers) {
  if (pointers[1] - pointers[2] > 1) {
    pointers[2]++;
    return;
  }
  if (pointers[1] - pointers[2] === 1) pointers[2] = 0;
  if (pointers[0] - pointers[1] > 1) {
    pointers[1]++;
    return;
  }
  if (pointers[0] - pointers[1] === 1) pointers[1] = 1;
  pointers[0]++;
}

exports.validIPAddresses = validIPAddresses;
