function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) return arr;
  let mid = Math.floor(len / 2);
  console.log("mergeSort", mid);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let lRes = mergeSort(left);
  let rRes = mergeSort(right);
  if (lRes[lRes.length - 1] < rRes[0]) return lRes.concat(rRes);
  return merge(lRes, rRes, mid);
}

function merge(left, right, mid) {
  let result = [];
  console.log("merge", mid);
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
}
// console.log(mergeSort([5, 3, 1, 8, 2, 4, 9, 6]));
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]));
