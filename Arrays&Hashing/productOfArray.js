/**
* Products of Array Except Self
* Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
* Each product is guaranteed to fit in a 32-bit integer.
* Follow-up: Could you solve it in 
* O (n)
* O (n) time without using the division operation?
* Example 1:
* Input: nums = [1,2,4,6] // 6*4*2 = 48 6*4*1 = 24 6*2*1 = 12 4*2*1 = 8
* Output: [48,24,12,8]
 */
const productOfArrayExceptSelf = (arr) => {
    const n = arr.length;
    const result = new Array(n).fill(1);
    // Compute prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
      result[i] = prefix;
      prefix *= arr[i];
    }
    
    // Compute suffix products and update result
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
      result[i] *= suffix;
      suffix *= arr[i];
    }
  
    return result;
  };
  
// const productOfArrayExceptSelf = (arr) => {
//     // easy way to do it in O(n) time with div operation.
//     let result = 1;
//     for (let i = 0; i < arr.length; i++) {
//         result *= arr[i];
//     }   
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = result / arr[i];
//     }
   
//     return arr;
// }
  console.log(productOfArrayExceptSelf([1, 2, 4, 6])); // [48, 24, 12, 8]
  