/**
 * shuffle: 洗牌算法，数组乱序，线性时间复杂度洗牌
*/
function shuffleArr (arr) {
  const len = arr.length
  for (let index = 1; index < len; index++) {
    const r = Math.floor(Math.random() * index)
      // console.log(r, index, arr, arr[r], arr[index])
      ;[arr[r], arr[index]] = [arr[index], arr[r]]
    // const temp = arr[r]
    // arr[r] = arr[index]
    // arr[index] = temp
  }
  return arr
}
console.log(shuffleArr([1, 2, 3, 4, 5, 6, 7, 8, 9]))