/**
219. Contains Duplicate II
Easy
Topics
Companies
Given an integer array nums and an integer k,
return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
# Problem Explanation
## Goal

Find two indices \(i\) and \(j\) in the array such that:
- \( \text{nums}[i] == \text{nums}[j] \) (duplicate values)
- \( |i - j| \leq k \) (indices are within a distance of \(k\))

Return `true` if such a pair exists, otherwise return `false`.

---

## Constraints

- You must only consider indices within the specified distance \(k\).
- The function should terminate early as soon as a valid pair is found.

 */


const containsDuplicate = (arr, k) => {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in map)) { // Check if the key doesn't exist in the map
        map[arr[i]] = i; // Store the index
    } else {
        const diff = i - map[arr[i]];
       if (diff <= k) {
            return true;
        } else {
            map[arr[i]] = i; // Update the index
        }
    }
}
    return false;
}

console.log(containsDuplicate([10,2,3,10, 4, 5, 6],3));// true
console.log(containsDuplicate([1,2,3,1],1));// true
// console.log(containsDuplicate([1,2,3,1],2)); // false