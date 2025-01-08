/**
Longest Repeating Character Replacement
You are given a string s consisting of only uppercase english characters and an integer k. 
You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring 
which contains only one distinct character.

Example 1:
Input: s = "XYYX", k = 2
Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:
Input: s = "AAABABB", k = 1
Output: 5
 */


function longestRepeatingCharacterReplacement(s, k) {
  let left = 0;
  let maxFreq = 0; // Tracks the max frequency of a single character in the window
  let charCount = {}; // Tracks character frequencies in the window
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right]; "X"
    charCount[char] = (charCount[char] || 0) + 1;
    maxFreq = Math.max(maxFreq, charCount[char]);

    // Calculate replacements needed
    const windowLength = right - left + 1; 
    if (windowLength - maxFreq > k) {
      // If replacements exceed k, shrink the window
      charCount[s[left]]--;
      left++;
    }

    // Update maxLength
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}



// Test cases
console.log(longestRepeatingCharacterReplacement("XYYX", 2)); // Output: 4
console.log(longestRepeatingCharacterReplacement("AAABABB", 1)); // Output: 5
console.log(longestRepeatingCharacterReplacement("AABABBA", 1)); // Output: 4
console.log(longestRepeatingCharacterReplacement("XXXX", 1));