/**
   Sum of all elements**:
   Write a function to calculate the sum of all elements in a 2D array.
   let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(sumOfAllElements(arr)); // 45
  Time Complexity = O(n×m) (quadratic for a square array).
 */

const sumOfAllElements = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        result = result + arr[i][j];
    }
    }
    return result;
}

const refactoredVersion = (arr) => {
    return arr.flat().reduce((sum, num) => sum+num, 0);
}

console.log(refactoredVersion([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));
console.log(sumOfAllElements([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));