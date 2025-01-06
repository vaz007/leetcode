/**
 * Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 * Example 1:
 * Input: nums = [1, 2, 3, 3]
 * Output: true
 *  Example 2:
 * Input: nums = [1, 2, 3]
 * Output: false
 */

function containsDuplicate(nums) {
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
}
console.log('Contains Duplicate: ', containsDuplicate([1, 2, 3]));