/**
 2395. Find Subarrays With Equal Sum
Easy
Topics
Companies
Hint
Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. 
Note that the two subarrays must begin at different indices.

Return true if these subarrays exist, and false otherwise.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [4,2,4]
Output: true
Explanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.
Example 2:

Input: nums = [1,2,3,4,5]
Output: false
Explanation: No two subarrays of size 2 have the same sum.
Example 3:

Input: nums = [0,0,0]
Output: true
Explanation: The subarrays [nums[0],nums[1]] and [nums[1],nums[2]] have the same sum of 0. 
Note that even though the subarrays have the same content, the two subarrays are considered different because they are in different positions in the original array.
 

Constraints:

2 <= nums.length <= 1000
-109 <= nums[i] <= 109
 */


// const findSubarrayWithEqualSum = (arr) => {
//     const sum = {}; // Store the sum of the subarray
//     for(let i=0; i<arr.length;i++){
//         for(let j=i+1; j<arr.length;j++){
//             const currentNum = arr[i] + arr[j];
//             console.log(currentNum, arr[i], arr[j]);
//             if(sum[currentNum]){
//                 sum[currentNum].push([arr[i], arr[j]]);
//                 return true;
//             }else {
//                 sum[currentNum] = [[arr[i], arr[j]]];
//             };
            

//         }
//     }
//     return sum;
// }

const findSubarrayWithEqualSum = (arr) => {
    const sum = {}; // Store the sum of the subarrays of length 2
    for (let i = 0; i < arr.length - 1; i++) { // Iterate through the array
        const currentSum = arr[i] + arr[i + 1]; // Sum of the current subarray of length 2
        if (sum[currentSum] !== undefined) {
            // If the same sum exists and the subarrays start at different indices
            console.log(sum);
            return true;
        } else {
            sum[currentSum] = i; // Store the index of the subarray sum
        }
    }
    console.log(sum);
    return false; // If no subarrays with equal sum were found
};

console.log(findSubarrayWithEqualSum([4,2,4])); // true
console.log(findSubarrayWithEqualSum([1,2,3,4,5])); // false