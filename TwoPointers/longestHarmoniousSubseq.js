/**
594. Longest Harmonious Subsequence
Easy

We define a harmonious array as an array where the difference between its maximum value and 
its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious 
subsequence among all its possible subsequences.

Example 1:

Input: nums = [1,3,2,2,5,2,3,7]

Output: 5

Explanation:

The longest harmonious subsequence is [3,2,2,2,3].

Example 2:

Input: nums = [1,2,3,4]

Output: 2

Explanation:

The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

Example 3:

Input: nums = [1,1,1,1]

Output: 0

Explanation:

No harmonic subsequence exists
 */

const longestHarmoniousSubsequence = (arr) => {
  const map = {};
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
    if (!(arr[index] in map)) {
      map[arr[index]] = 1;
    } else {
      map[arr[index]] += 1;
    }
  }

  for (let [key, value] of Object.entries(map)) {
    console.log(key, value);
    if (Number(key) + 1 in map) {
      max = Math.max(max, value + map[Number(key) + 1]);
    }
  }

  return { map, max };
};

console.log(longestHarmoniousSubsequence([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(longestHarmoniousSubsequence([1, 2, 3, 4])); // 2
console.log(longestHarmoniousSubsequence([1, 1, 1, 1])); // 0
console.log(longestHarmoniousSubsequence([1, 2, 2, 1])); //4
