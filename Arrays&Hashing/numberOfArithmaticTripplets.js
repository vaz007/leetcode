/**
You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. 
A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets.

Example 1:

Input: nums = [0,1,4,6,7,10], diff = 3
Output: 2
Explanation:
(1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
(2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 
Example 2:

Input: nums = [4,5,6,7,8,9], diff = 2
Output: 2
Explanation:
(0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
(1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.
 
 */



const numberOfArithmaticTriplets = (arr, k) => {
 let count = 0;
 let triplet = {};
 for (let i = 0; i < arr.length; i++) {
     for (let j = i+1; j < arr.length; j++) {
            if(arr[j] - arr[i] === k){
                for (let m = j + 1; m < arr.length; m++) {
                    if (arr[m] - arr[j] === k) {
                        count++;
                        triplet[`${i}${j}${m}`] = [arr[i], arr[j], arr[m]];
                        //triplets.push([i, j, m]); // Store the indices of the triplet
                    }
                }
            }        
     }
 }
 return {triplet, count};
}

console.log(numberOfArithmaticTriplets([0,1,4,6,7,10], 3)); // 2
console.log(numberOfArithmaticTriplets([4,5,6,7,8,9], 2)); // 2



// Optimised Version

const optimisedVersion = (arr, k) => {
    const set = new Set(arr); // Store all elements for fast lookup
    let count = 0;

    for (const num of arr) {
        
        // Check if the arithmetic triplet condition holds
        if (set.has(num + k) && set.has(num + 2 * k)) {
            count++;
        }
    }

    return count; // Return the total number of triplets
};

console.log(optimisedVersion([0, 1, 4, 6, 7, 10], 3)); 
// Output: 2
console.log(optimisedVersion([4, 5, 6, 7, 8, 9], 2)); 
// Output: 2
