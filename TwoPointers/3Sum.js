/**
Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 */

const threeSum = (nums) => {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);
    console.log(nums[nums.length -1]);
    const result = [];

    // Step 2: Iterate through the array
    //[ -4, -1, -1, 0, 1, 2 ]
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Two-pointer approach
        let left = i + 1; // pointer 2 value -1, 
        let right = nums.length - 1; // pointer 5 value 2
        const target = 0 - nums[i]; // 1

        while (left < right) {
            const sum = nums[left] + nums[right]; // -1 + 2 = 1
            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);
                console.log(left<right, left, right, nums[left], nums[right],nums[left] === nums[left + 1]);
                // Skip duplicates for the second and third numbers
                while (left < right && nums[left] === nums[left + 1]) {
                    console.log('LEFT WHILE LOOP', left);
                    left++
                };
                while (left < right && nums[right] === nums[right - 1]) {
                    console.log('RIGHT WHILE LOOP', left);
                    right--;
                };

                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

// Example Usage
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); // []
// console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
