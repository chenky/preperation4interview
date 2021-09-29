function insertionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      } else {
        // 因为0-j是从小到大排好的有序数组，如果比最右边最大的都大则不用再比较了，跳出当前循环
        break
      }
    }
  }
  return arr
}

console.log(insertionSort([2, 9, 1, 7, 3, 8, 5, 3, 4, 6]))