function findMaxCorrsingSubArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = arr.length / 2;
  let leftSum = -Infinity;
  let sum = 0;
  let maxLeft;
  for (let i = mid; i > left; i--) {
    sum += a[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }
  sum = 0;
  let rigthSum = -Infinity;
  let maxRight;
  for (let i = mid + 1; i < right; i++) {
    sum += a[i];
    if (sum > rigthSum) {
      rigthSum = sum;
      maxRight = i;
    }
  }
  console.log(maxLeft, maxRight, leftSum, rigthSum);
}
