/**
   Row-wise Maximum**:
   Find the largest number in each row of a 2D array.
 */

const rowWiseMax = (arr) => {
    let result = [];

    for(let i =0; i<arr[0].length; i++){
        let tempResult = 0;
        for (let j=0; j<arr[i].length; j++){
            tempResult = Math.max(arr[i][j], tempResult);
            

        }
        result.push(tempResult);
    }
    return result;
}
const refactoredVersion = (arr) => {
    return arr.map(row => Math.max(...row));
}
console.log(refactoredVersion([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));
console.log(rowWiseMax([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));