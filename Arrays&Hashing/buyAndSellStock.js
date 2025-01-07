/**
Best Time to Buy and Sell Stock
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, 
in which case the profit would be 0.

Example 1:
Input: prices = [10,1,5,6,7,1]

Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:
Input: prices = [10,8,7,5,2]
Output: 0
 */

const maxProfit = (arr) => {
    let max = 0;
    let left = 0; 
    let right = 1; 
    
    while(right < arr.length) {
        if (arr[right] < arr[left]) {
            left = right; 
        } else {
            max = Math.max(max, arr[right] - arr[left]);
            right++
        }   
    }
    return max;
}

console.log(maxProfit([10,1,5,6,7,6]));
console.log(maxProfit([10,8,7,5,2]));
console.log(maxProfit([1,2]));
console.log(maxProfit([1]));