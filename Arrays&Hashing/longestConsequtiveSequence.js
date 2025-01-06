/**
Longest Consecutive Sequence
Given an array of integers nums, return the length of the longest 
consecutive sequence of elements that can be formed.
A consecutive sequence is a sequence of elements in which each element is exactly 1 
greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [2,20,4,10,3,4,5]
Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:
Input: nums = [0,3,2,5,4,6,1,1]
Output: 7
 */

const longestConsecutive = (nums) => {  

    nums.sort((a, b) => a - b); // Sort the array
    console.log(nums);
    let count = 1;
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) continue; // Skip duplicates
        if(nums[i] === nums[i - 1] + 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 1;
        }
    }
    return {count, max};


}


// console.log(longestConsecutive([2,20,4,10,3,4,5])); // 4
// console.log(longestConsecutive([0,3,2,5,4,6,1,1])); // 7


const optimisedVersion = (nums) => {
    const numSet = new Set(nums); // Use a Set to handle duplicates
    let maxLength = 0;

    for (let num of numSet) {

        // Only check the sequence starting with numbers that are the beginning of a streak
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let count = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                count += 1;
            }

            maxLength = Math.max(maxLength, count);
        }
    }

    return maxLength;
};

console.log(optimisedVersion([2, 20, 4, 10, 3, 4, 5])); // 4
console.log(optimisedVersion([0, 3, 2, 5, 4, 6, 1, 1])); // 7
