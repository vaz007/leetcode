/**
   Transpose of a Matrix**:
   Convert the rows of the matrix into columns.
 */

const transposeMatrix = (arr) => {
    const result = [];
    for (let i = 0; i < arr[0].length; i++) {
        result[i] = [];
            for (let j = 0; j < arr[i].length; j++) {
            result[i][j] = arr[j][i];
        }
    }
    return result;
}

/**
 * 
Explanation:
arr[0].map((_, colIndex) => ...):

Loops through the columns of the original matrix by iterating over the indices of the first row.
The _ is used as a placeholder for the element since it's not needed in this operation.
arr.map(row => row[colIndex]):

For each column index, retrieves all the elements from the rows at that index, effectively transposing the rows and columns.
 */
const refactoredVersion = (arr) => {
    return arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
}
console.log(refactoredVersion([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));
console.log(transposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]));