/*
一行字符串，仅有 ( 、) 、0、组成，其中一对 ( ) 表示一个礼品盒，0表示奖品，输入的括号一定是成对出现的。
输出：
结果是要拆的最少礼品盒的数量。
示例1：
输入：(()(()((()(0)))))
输出：5
示例2：
输入：(((0)))
输出：3
获取最少成对字符，最少成对括号
*/
// function getMinMatchStr(str){
//   let stack = [];
//   let minNum=0;
//   for (let index = 0; index < str.length; index++) {
//     const character = str[index];
//     if(character === "("){
//       stack.push(character);
//       minNum++;
//     } else if(character === ")"){
//       stack.pop();
//       minNum--;
//     } else{
//       return minNum;
//     }
//   }
//   return minNum;
// }
// console.log(getMinMatchStr("(()(()((()(0)))))"))
// console.log(getMinMatchStr("(((0)))"));

/*
  因为是成对出现，所有从左向右遍历，"("则+1，")"则-1，遇到0则返回
*/
function getMinMatchStr2(str){  
  let minNum=0;
  for (let index = 0; index < str.length; index++) {
    const character = str[index];
    if(character === "("){
      minNum++;
    } else if(character === ")"){
      minNum--;
    } else if(character === "0"){
      return minNum;
    }
  }
  return minNum;
}
console.log(getMinMatchStr2("(()(()((()(0)))))"))
console.log(getMinMatchStr2("(((0)))"));

/*
有n个盒子排成了一行，每个盒子上面有一个数字a[i]，表示在该盒子上的人最多能向右移动a[i]个盒子(比如当前所在盒子上的数字是3,则表示可以一次向右前进1个盒子，2个盒子或者3个盒子)。
现在小v从左边第一个盒子上开始体验游戏，请问最少需要移动几次能到最后一个盒子上?
输入描述：

输入:2 2 3 0 4
表示现在有5个盒子，上面的数字分别是2, 2, 3, 0, 4。

输出描述：
输出: 2

小v有两种跳法：

跳法1:盒子1--盒子2--盒子3--盒子4--盒子5，共3下

跳法2:盒子1--盒子3--盒子5，共2下

跳法2的步骤数量最少，所以输出最少步数：2。

输入：

2 2 3 0 4

输出：

2
以数组中的元素值为向右眺的步数，问最少眺几步可以到达数组最右边
原文链接：https://blog.csdn.net/Mosu_/article/details/101426562
*/
function jump(arr) {
  let steps = 0;
  // 这个值每次都要向前移动1，列出所有的情况
  let start = 0;
  // 表示累计跳转到的位置
  let end = 0;
  let n = arr.length;
  while(end < n - 1)
  {
      let max_pos = 0;
      for(let i = start; i <= end; ++i){
        max_pos = Math.max(max_pos, i + arr[i]);
      }  
      if(max_pos<1){
        // 最大移动位置必须大于等于1，否则原地踏步了
        return false;
      }        
      start = end + 1;
      end = max_pos;
      ++steps;
  }
  return steps;
}
console.log(jump([2, 2, 3, 0, 4]));
console.log(jump([0, 0, 0, 0, 4]));
