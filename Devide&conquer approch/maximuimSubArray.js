let arr = [1, 2, 6, 47, 89, 3, 2, 5, 7, 9, 7, 20, 16, 7];
function findLargestSubArray(arr) {
  let mid = Math.floor(arr.length / 2);
  let low = 0;
  let right = arr.length - 1;
  for (let i = 0; i < mid; i++) {
    if (arr[i + 1] > arr[i]) low = i + 1;
  }
  for (let i = mid; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) right = i - 1;
  }
  arr.slice(low, right);
  console.log(arr);
}
findLargestSubArray(arr);
