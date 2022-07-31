function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  console.log(arr);
  return arr;
}
let arr = [7, 3, 5, 9, 7, 10, 2, 6, 8, 20];
bubleSort(arr);
//complixity of o(n^2)
