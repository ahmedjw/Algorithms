const LinearSearch = (arr, target) => {
  for (let i in arr) {
    if (arr[i] === target) return i;
  }
  return -1;
};
