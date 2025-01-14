/**
You are given an array nums of n integers and two integers k and x.
The x-sum of an array is calculated by the following procedure:
Count the occurrences of all elements in the array.
Keep only the occurrences of the top x most frequent elements. 
If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
Calculate the sum of the resulting array.
Note that if an array has less than x distinct elements, its x-sum is the sum of the array
Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the 
subarray
 nums[i..i + k - 1].
Example 1:
Input: nums = [1,1,2,2,3,4,2,3], k = 6, x = 2
Output: [6,10,12]

Explanation:

For subarray [1, 1, 2, 2, 3, 4], only elements 1 and 2 will be kept in the resulting array. Hence, answer[0] = 1 + 1 + 2 + 2.
For subarray [1, 2, 2, 3, 4, 2], only elements 2 and 4 will be kept in the resulting array. Hence, answer[1] = 2 + 2 + 2 + 4. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
For subarray [2, 2, 3, 4, 2, 3], only elements 2 and 3 are kept in the resulting array. Hence, answer[2] = 2 + 2 + 2 + 3 + 3.
Example 2:

Input: nums = [3,8,7,8,7,5], k = 2, x = 2

Output: [11,15,15,15,12]

Explanation:

Since k == x, answer[i] is equal to the sum of the subarray nums[i..i + k - 1].

 

Constraints:

1 <= n == nums.length <= 50
1 <= nums[i] <= 50
1 <= x <= k <= nums.length
 */
// The solution works but is inefficient 
/**
 Analysis of Inefficiencies in the Current Solution

Issues with the Current Solution

1. Recomputing Frequencies for Every Subarray

Problem:

In findXSumofAllKLongSubarrays, you use arr.slice(left, right) to create a subarray and then compute its frequency map in mostFrequentElementAddedSum.

This slicing operation creates a new array for every subarray, leading to O(k) additional overhead per iteration.

Additionally, computing the frequency map from scratch for every subarray is O(k).

Overall Cost:

For n - k + 1 subarrays, this approach becomes O((n - k + 1) * k), which can be highly inefficient for large arrays or high values of k.

2. Sorting the Frequency Map

Problem:

In mostFrequentElementAddedSum, the frequency map is sorted using Object.entries(map).sort(...), which has a complexity of O(d * log(d)), where d is the number of distinct elements in the subarray.

This sorting happens for every subarray, adding significant overhead.

3. Inefficient Sliding Window Usage

Problem:

While you use a sliding window (left and right), you don't maintain the frequency map dynamically.

Instead, the frequency map is rebuilt from scratch for each subarray, which negates the benefits of the sliding window approach.

Impact on Performance

The combination of these issues results in a solution that is inefficient for large inputs or high values of k. Specifically:

Time Complexity: O((n - k + 1) * k) + O((n - k + 1) * d * log(d)).

Space Complexity: Creating a new subarray for every sliding window increases memory overhead.


 */
const  findXSumofAllKLongSubarrays = (arr, k, x) => {
    let left = 0
    let right = k;
    let result = []
    while(left < right && right <= arr.length) {
          const sum = mostFrequentElementAddedSum(arr.slice(left, right), x);
          console.log(sum);
          console.log(arr.slice(left, right));
          left++;
          right++;
          result.push(sum);
        }
        return result
}

const mostFrequentElementAddedSum = (arr, x) => {
  const map = {};
    let add = 0
    for (let i = 0; i < arr.length; i++) {
      if(!(arr[i] in map)) {
        map[arr[i]] = 1;
      } else { 
        map[arr[i]] += 1;
      }
    }
    const sorted = Object.entries(map).sort((a, b) => {
      if(a[1] === b[1]) {
        return b[0] - a[0];
      } else {
        return b[1] - a[1];
      }
    });
    sorted.slice(0,x).map(([key , value]) => {
      add = add + (value * key);
      return {key, value}
    });
    
    return add
}

// Optimised SOl 

const Optimised = (arr, k, x) => {
  const freqMap = {};
  let result = [];
  let add = 0;

  // Initialize the frequency map for the first window
  for (let i = 0; i < k; i++) {
      freqMap[arr[i]] = (freqMap[arr[i]] || 0) + 1;
  }

  result.push(calculateXSum(freqMap, x));

  // Slide the window
  for (let i = k; i < arr.length; i++) {
      const outElement = arr[i - k];
      const inElement = arr[i];

      // Remove the outElement
      freqMap[outElement]--;
      if (freqMap[outElement] === 0) {
          delete freqMap[outElement];
      }

      // Add the inElement
      freqMap[inElement] = (freqMap[inElement] || 0) + 1;

      result.push(calculateXSum(freqMap, x));
  }

  return result;
};

const calculateXSum = (freqMap, x) => {
  const sorted = Object.entries(freqMap).sort((a, b) => {
      if (a[1] === b[1]) {
          return b[0] - a[0];
      }
      return b[1] - a[1];
  });

  return sorted.slice(0, x).reduce((sum, [key, value]) => sum + key * value, 0);
};

console.log(findXSumofAllKLongSubarrays([1,1,2,2,3,4,2,3], 6, 2));

console.log(Optimised([1,1,2,2,3,4,2,3], 6, 2));