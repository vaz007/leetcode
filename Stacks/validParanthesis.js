/**
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true
Example 2:

Input: s = "([{}])"

Output: true
Example 3:

Input: s = "[(])"

Output: false
 */

const validParanthesis = (s) => {
    // '(', ')', '{', '}', '[' and ']'
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (stack.length === 0) return false;
            if (stack[stack.length - 1] === '(' && s[i] === ')') {
                stack.pop();
            } else if (stack[stack.length - 1] === '{' && s[i] === '}') {
                stack.pop();
            } else if (stack[stack.length - 1] === '[' && s[i] === ']') {
                stack.pop();
            } else {
                return false;
            }

        }
    }
    if(stack.length > 0) return false;
    return true;

}

// console.log(validParanthesis("[]"));
// console.log(validParanthesis("([{}])"));
// console.log(validParanthesis("[(])"));
console.log(validParanthesis("[["));
console.log(validParanthesis('['));