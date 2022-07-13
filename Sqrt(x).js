/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let low = 0;
  let high = x;
  if (x < 2) return x;
  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    if (mid * mid > x) high = mid;
    else if (mid * mid < x) low = mid + 1;
    else return mid;
  }
  return low - 1;
};
