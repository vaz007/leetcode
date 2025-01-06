/**
 * Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
 * You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
 * Return the answer with the smaller index first.
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */


const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        const diff = target - item; 
        if (map.has(diff)) {
            return [map.get(diff), i];
        } else {
            map.set(item, i);
        }
    }
};

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([0,2,5,5], 10)); // [0,1]