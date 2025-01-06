/**
You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:
Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false
Note: A board does not need to be full or be solvable to be valid.

Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true
Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: false

 */

const arr = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

 // First Attempt was correct 
const validSoduku = (arr) => {
    const row = {};
    const column = {};
    const box = {};
    for (let i = 0; i < arr[0].length; i++) {
        column[i] = {};
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[j][i] === '.') continue;
            if(column[i][arr[j][i]]) return false; // check if the number is already present in the column
            column[i][arr[j][i]] = (column[i][arr[j][i]] || 0) + 1;
        }
    }    
    for (let i = 0; i < arr.length; i++) {
         row[i] = {};
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === '.') continue;
            if(row[i][arr[i][j]]) return false; // check if the number is already present in the row
            row[i][arr[i][j]] = (row[i][arr[i][j]] || 0) + 1;
            
        }
    }
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            if (!isValidBox(arr, row, col)) {
                return false;
            } 
        }
    }

    // add the valid box directly instead of seprate function
   
    return {row, column, box};

}

function isValidBox(grid, startRow, startCol) {
    const seen = new Set();
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            const num = grid[i][j];
            if (num !== '.') { // Assuming '.' represents empty cells
                if (seen.has(num)) {
                    return false;
                }
                seen.add(num);
            }
        }
    }
    return true;
}
// Complex way of checking the box

// Lets optimise it 
const optimisedVersion = (arr) => {
    const row = {};
    const column = {};
    const box = {};
    for (let i = 0; i < 9; i++) {
        row[i] = {};
        for (let j = 0; j < 9; j++) {
            const num = arr[i][j]; 
            // Initialize column
            if (!column[j]) column[j] = {};
            // Initialize box
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (!box[boxIndex]) box[boxIndex] = {};

            if(num === '.') continue;
            
            // Row Validation
            if(row[i][num]) return false;
            row[i][num] = true;

            // Column Validation    

            if(column[j][num]) return false;
            column[j][num] = true;

            // Box Validation
            if (box[boxIndex][num]) return false;
            box[boxIndex][num] = true;

        }
    }
    return true;
}


/**
 How It Works:
Tracking Rows, Columns, and Boxes:

Each row, column, and 3x3 sub-box is represented by a Set that stores unique numbers encountered so far.
Validation:

Before adding a number to a Set, we check if it already exists in the corresponding row, column, or box.
Box Calculation:

Math.floor(i / 3) * 3 + Math.floor(j / 3) ensures we correctly index the corresponding 3x3 box.
Short-Circuit:

The moment a duplicate is found, the function returns false, ensuring early termination.
 */
// Supremely Optimised 
function supremelyOptimised(board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());
console.log(rows);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === ".") continue;

            // Calculate the 3x3 box index
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Check for duplicates in row, column, or box
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            // Add the number to the respective row, column, and box sets
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }
    console.log(rows);
    return true;
}

// console.log(validSoduku(arr));
// console.log(optimisedVersion(arr));
// console.log(supremelyOptimised(arr));