// 螺旋遍历二维数组, 顺时针遍历二维数组，螺旋遍历矩阵, 顺时针遍历矩阵
// https://mp.weixin.qq.com/s/YYipFXtTBEyTtEvE88eAjQ
function spiralTraverse(matrix){
  if(!Array.isArray(matrix) || matrix.length === 0 || matrix[0].length===0){
    return []
  }
  let list = [];  
  const height = matrix.length
  const width = matrix[0].length
  const minLen = Math.min(width, height)
  const bigCircleLen = minLen/2
  // 外层大循环, i表示圈数，这样上右下左都能用到这个变量
  for (let i = 0; i < bigCircleLen; i++) {
    // 上边从左到右，注意四个角不要重复遍历
    for (let j = i; j < width-i; j++) {
      list.push(matrix[i][j])      
    }  
    // 右边从上到下  
    for (let j = i+1; j < height-i; j++) {
      list.push(matrix[j][width-1-i])      
    }
    // 下边从右到左，需要考虑只有一行的情况  
    if(height>1){
      for (let j = i+1; j < width-i; j++) {
        list.push(matrix[height-1-i][width-1-j])      
      }      
    }
    // 左边从下到上，需要考虑只有一列的情况
    if(width>1){
      for (let j = i+1; j < height-1-i; j++) {
        list.push(matrix[height-1-j][i])      
      }      
    }
  }
  return list
}

const testMatrix1 = [
  [ 1,  2,  3,  4,  5  ],
  [ 6,  7,  8,  9,  10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ]
]
const testMatrix2 = [
  [ 1,  2,  3,  4,  5  ],
  [ 6,  7,  8,  9,  10 ],
  [ 11, 12, 13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25 ]
]
const testMatrix3 = [
  [ 1,  2,  3,  4,  5  ]
]
const testMatrix4 = [
  [ 1 ],
  [ 6 ],
  [ 11],
  [ 16]
]
console.log(spiralTraverse(testMatrix1),spiralTraverse(testMatrix2))
console.log(spiralTraverse(testMatrix3),spiralTraverse(testMatrix4))