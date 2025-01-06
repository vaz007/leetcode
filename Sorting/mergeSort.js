/*
Merge Sort Algorithm
Time Complexity: O(n log n)
Space Complexity: O(n)
Slightly Complex & Counter intutive in thinking

1. Divide the array into two halves
2. Recursively sort the two halves
3. Merge the sorted halves
*/



const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    } 
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return mergeSortedArrays(mergeSort(left), mergeSort(right));
}
const mergeSortedArrays = (left, right) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Append the remaining elements from the left array, if any
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Append the remaining elements from the right array, if any
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
};

// Test case
console.log(mergeSort([1, 3, 5, 7, 2, 4, 6, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
