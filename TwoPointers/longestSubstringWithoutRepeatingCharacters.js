/**
Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1
 */


const longestSubstring = (str) => {
    let max = 0;
    let charSet = new Set();
    let left = 0;
    for (let right = 0; right < str.length; right++) {
       
        while(charSet.has(str[right])){
            charSet.delete(str[left]);
            left++
        }
        charSet.add(str[right]);
        max = Math.max(max, right - left + 1);
    }
     return max;

}


console.log(longestSubstring('zxyzxyz'));
console.log(longestSubstring('xxx'));
console.log(longestSubstring('pwwkew'));
console.log(longestSubstring(' '));
