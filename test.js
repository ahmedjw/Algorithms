function findMaxCorrsingSubArray(arr) {
  let mid = Math.floor(arr.length / 2);
  let leftSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let maxLeft;
  for (let i = mid; i >= 0; i--) {
    sum += arr[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }
  sum = 0;
  let rigthSum = Number.MIN_SAFE_INTEGER;
  let maxRight;
  if ((arr.length = 1)) rigthSum = 0;
  for (let i = mid + 1; i < arr.length; i++) {
    sum += arr[i];
    if (sum > rigthSum) {
      rigthSum = sum;
      maxRight = i;
    }
  }
  console.log(maxLeft, maxRight, leftSum, rigthSum);
}
let arr = [-1];
findMaxCorrsingSubArray(arr);
