/**
Given an integer array nums, find a subarray that has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.
Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

// Easy approach

// const maxProductSubArray = (arr) => {
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < arr.length; i++) {
//     let product = 1; // Reset product for each starting point
//     for (let j = i; j < arr.length; j++) {
//       let temp = product * arr[j];
//       product = temp; 
//       max = Math.max(max, product);
//     }
//   }
//   return max;
// };

const maxProductSubArray = (arr) => {
    if (arr.length === 0) return 0;
  
    let maxSoFar = arr[0];
    let minSoFar = arr[0];
    let result = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let tempMax = Math.max(current, maxSoFar * current, minSoFar * current); 
      minSoFar = Math.min(current, maxSoFar * current, minSoFar * current);
      maxSoFar = tempMax;
  
      result = Math.max(result, maxSoFar);
    }
  
    return result;
  };
  /**
Initialization:[2, 3, -2, 4] = 6
maxSoFar = 2, minSoFar = 2, result = 2.
Iteration:
i = 1 (current = 3):

maxSoFar = max(3, 2 * 3, 2 * 3) = 6.
minSoFar = min(3, 2 * 3, 2 * 3) = 3.
result = max(2, 6) = 6.
i = 2 (current = -2):

Negative number → swap maxSoFar and minSoFar.
maxSoFar = max(-2, 3 * -2, 6 * -2) = -2.
minSoFar = min(-2, 3 * -2, 6 * -2) = -12.
result = max(6, -2) = 6.
i = 3 (current = 4):

maxSoFar = max(4, -2 * 4, -12 * 4) = 4.
minSoFar = min(4, -2 * 4, -12 * 4) = -48.
result = max(6, 4) = 6.
Final Result:

result = 6.
Explanation of the Correct Approach:
maxSoFar:

Keeps track of the maximum product at the current index.
Accounts for the possibility that a negative number multiplied by the minimum product can become the largest product.
minSoFar:

Keeps track of the minimum product at the current index (important for handling negative numbers).
result:

Stores the maximum product found so far.
Key Observations:

A negative number can turn the smallest product into the largest if multiplied by another negative number.
Zeros reset the product.

Why 𝑂 (𝑛)?
The loop runs through the array once, updating maxSoFar, minSoFar, and result in constant time for each element. 
   * */  

console.log(maxProductSubArray([2, 3, -2, 4])); // 6
console.log(maxProductSubArray([-2, 0, -1]));   // 0
console.log(maxProductSubArray([-2, -3, -4]));  // 12
console.log(maxProductSubArray([0, 2]));        // 2
console.log(maxProductSubArray([-2, -3, 0, -2, -40])); // 80