let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  // Row Traverse
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }

}
// Column Traverse
for (let j = 0; j < arr[0].length; j++) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][j]);
    }
    
}

// Diagnol Traverse

for (let i = 0; i < Math.min(arr.length, arr[0].length); i++) {
    console.log(arr[i][i]);
}