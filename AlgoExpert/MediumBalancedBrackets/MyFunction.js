//Time: O(n)
//Space: O(n)

function balancedBrackets(string) {
    let stack = [];
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] === ')' || string[i] === ']' || string[i] === '}')
            stack.push(string[i]);
        else {
            if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
                if (!IsMatchingBracket(string[i], stack.pop()))
                    return false;
            }
        }
    }
    return (stack.length === 0);
}

function IsMatchingBracket(opening, closing) {
    return ((opening === '(' && closing === ')') ||
            (opening === '[' && closing === ']') ||
            (opening === '{' && closing === '}'));
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
