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
function getMinMatchStr(str){
  let stack = [];
  let minNum=0;
  for (let index = 0; index < str.length; index++) {
    const character = str[index];
    if(character === "("){
      stack.push(character);
      minNum++;
    } else if(character === ")"){
      stack.pop();
      minNum--;
    } else{
      return minNum;
    }
  }
  return minNum;
}
console.log(getMinMatchStr("(()(()((()(0)))))"))
console.log(getMinMatchStr("(((0)))"));