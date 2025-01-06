/**
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented
by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 
 */
// 28

/**
 LOGIC
    start with left and right pointers at the beginning and end of the array
    while left pointer is less than right pointer
        calculate the area of the container
    
 */
const containerWithMostWater = (arr) => {
 let maxArea = 0;
 let left = 0;
 let right = arr.length - 1;
        while (left < right) {
            if(arr[left] < arr[right]){
                maxArea = Math.max(maxArea, (right - left) * arr[left]);
                left++;
            } 
            else {
                maxArea = Math.max(maxArea, (right - left) * arr[right]);
                right--;
            }
        }
    return maxArea;
}

const optimisedVersion = (arr) => {
    let maxArea = 0;
let left = 0;
let right = arr.length - 1;

while (left < right) {
    maxArea = Math.max(maxArea, (right - left) * Math.min(arr[left], arr[right]));
    if (arr[left] < arr[right]) {
        left++;
    } else {
        right--;
    }
}

return maxArea;

}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7])); // 49
console.log(containerWithMostWater([1,1])); // 1