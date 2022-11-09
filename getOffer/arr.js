/**
 * 数组相关的题目 *
 */

/**
 * 数组中重复的数，范围0-(n-1),找到即返回
 */
function getRepeatInArr(arr) {
  // 第一种方式；使用hash
  // 第二种方式：因为范围是0-(n-1)=>num和index肯定对应
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element !== index) {
      if (element !== arr[element]) {
        [arr[index], arr[arr[index]]] = [arr[arr[index]], arr[index]];
      } else {
        return element;
      }
    }
  }
  return -1;
}
