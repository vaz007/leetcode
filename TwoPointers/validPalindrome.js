/**
Valid Palindrome
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false
Explanation: "tabacat" is not a palindrome.
 */

const validPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "").split(" ").join("");
    const reverseStr = str.split("").reverse().join(""); 
    return str === reverseStr;
}


const optimisedVersion = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;

}
console.log(optimisedVersion("Was it a car or a cat I saw?")); // true
console.log(optimisedVersion("tab a cat")); // false

// console.log(validPalindrome("Was it a car or a cat I saw?")); // true
// console.log(validPalindrome("tab a cat")); // false