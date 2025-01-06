/**
Two Integer Sum II
Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use 
O (1)
O(1) additional space.

Example 1:

Input: numbers = [1,2,3,4], target = 3

Output: [1,2]
Explanation:
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

 */


// slightly wronf 
const twoIntegerSum = (arr, target) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (map.has(diff)) return [map.get(diff) + 1, i + 1]
        map.set(arr[i], i);
    }
    return [];
}


// console.log(twoIntegerSum([1,2,3,4], 3)); // [1, 2]
// console.log(twoIntegerSum([2,7,11,15], 9)); // [1, 2]
console.log(twoIntegerSum([0, 0, 3, 4], 0)); // [1, 2]
