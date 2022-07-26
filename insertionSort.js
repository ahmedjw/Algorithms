let arr = [5, 2, 4, 6, 1, 3];
function insertionSort(input) {
  for (let i = 1; i < input.length; i++) {
    let num = input[i];
    let j = i - 1;
    while ((j > -1) & (input[j] > num)) {
      input[j + 1] = input[j];
      input[j] = num;
      j--;
      console.log(input[j], num, input);
    }
  }
  return input;
}

insertionSort(arr);
decrease(arr);
function decrease(arr) {
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    let j = i - 1;
    while ((j > -1) & (arr[j] < num)) {
      arr[j + 1] = arr[j];
      arr[j] = num;
      j--;
    }
  }
  console.log(arr);
}
