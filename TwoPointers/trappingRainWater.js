/**
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 */

// Logic 
/**

Algorithm:
Initialize:

Two pointers left = 0 and right = len(height) - 1.
Two variables left_max = 0 and right_max = 0 to track the maximum heights from the left and right sides.
A variable water_trapped = 0 to store the total amount of water trapped.
Loop until left <= right:

If height[left] < height[right]:
If height[left] >= left_max, update left_max = height[left].
Otherwise, calculate the trapped water at left as left_max - height[left] and add it to water_trapped.
Move the left pointer to the right: left += 1.
Otherwise:
If height[right] >= right_max, update right_max = height[right].
Otherwise, calculate the trapped water at right as right_max - height[right] and add it to water_trapped.
Move the right pointer to the left: right -= 1.
Return the total water trapped.

 */

const trappedRainWater = (height) => {
   if(height.length === 0)  return 0;
   let left = 0;
   let right = height.length -1;
   let leftMax = height[left];
   let rightMax = height[right];
   let result = 0;
    while(left < right){
        if(leftMax < rightMax){
            left +=1;
            leftMax = Math.max(leftMax, height[left]);
            result += leftMax - height[left];

        } else {
            right -=1;
            rightMax = Math.max(rightMax, height[right]);
            result += rightMax - height[right];
        }
    }
    return result;
}
console.log(trappedRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));