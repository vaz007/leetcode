/**
 * Top K Frequent Elements
 * Given an integer array nums and an integer k, return the k most frequent elements within the array.
 * The test cases are generated such that the answer is always unique.
 * You may return the output in any order.
 * Example 1: Input: nums = [1,2,2,3,3,3], k = 2 
 * Output: [2,3]
 * Example 2:
 * Input: nums = [7,7], k = 1
 * Output: [7]
 */

const kFrequentElements = (arr, k) => {
    const map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    const sliceArray = sorted.slice(0, k).map(([key]) => key);  
    return sliceArray;
}

console.log(kFrequentElements([1,2,2,3,3,3], 2));
console.log(kFrequentElements([7,7], 1));
console.log(kFrequentElements([1,2], 2));
console.log(kFrequentElements([3,0,1,0],1));