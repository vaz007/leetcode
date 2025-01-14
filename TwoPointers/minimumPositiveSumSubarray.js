/**
You are given an integer array nums and two integers l and r. 
Your task is to find the minimum sum of a subarray whose size is between l and r (inclusive) and whose sum is greater than 0.
Return the minimum sum of such a subarray. If no such subarray exists, return -1.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [3, -2, 1, 4], l = 2, r = 3
Output: 1

Explanation:

The subarrays of length between l = 2 and r = 3 where the sum is greater than 0 are:

[3, -2] with a sum of 1
[1, 4] with a sum of 5
[3, -2, 1] with a sum of 2
[-2, 1, 4] with a sum of 3
Out of these, the subarray [3, -2] has a sum of 1, which is the smallest positive sum. Hence, the answer is 1.

Example 2:

Input: nums = [-2, 2, -3, 1], l = 2, r = 3

Output: -1

Explanation:

There is no subarray of length between l and r that has a sum greater than 0. So, the answer is -1.

Example 3:

Input: nums = [1, 2, 3, 4], l = 2, r = 4

Output: 3

Explanation:

The subarray [1, 2] has a length of 2 and the minimum sum greater than 0. So, the answer is 3.
 */


const minimumPositiveSumSubarray = (arr , l ,r) => {
    let minSum = Infinity;
    for (let size = l; size <= r; size++) {
        let windowSum = 0;
        // Calculate the sum of the first subarray of size `size`
        for (let i = 0; i < size; i++) {
            windowSum += arr[i];
        }

        // Check if this subarray's sum is positive and update `minSum`
        if (windowSum > 0) {
            minSum = Math.min(minSum, windowSum);
        }

        // Slide the window across the array
        for (let i = size; i < arr.length; i++) {
            windowSum += arr[i] - arr[i - size];
            if (windowSum > 0) {
                minSum = Math.min(minSum, windowSum);
            }
        }
    }

    return minSum === Infinity ? -1 : minSum;
}

console.log(minimumPositiveSumSubarray([3, -2, 1, 4], 2, 3)); // 1
console.log(minimumPositiveSumSubarray([-2, 2, -3, 1], 2, 3)); // -1