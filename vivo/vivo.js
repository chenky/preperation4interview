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
括号匹配，括号配对
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


/*
今年7月份vivo迎来了新入职的大学生，现在需要为每个新同事分配个工号。人力资源部同事小v设计了一个方法为每个人进行排序并分配最终的工号，具体规则是:
将N (N<100000) 个人排成一排，从第1个人开始报数: 如果报数是M的倍数就出列，报到队尾后则回到队头继续报，直到所有人都出列；
最后按照出列顺序为每个人依次分配工号。请你使用自己擅长的编程语言帮助小v实现此方法。

输入描述：

输入2个正整数，空格分隔，第一个代表人数N，第二个代表M

输出描述：

输出一个let数组，每个数据表示原来在队列中的位置用空格隔开，表示出列顺序

输入：

6 3

输出：

3 6 4 2 5 1

这道题目就是简单的约瑟夫环
原文链接：https://blog.csdn.net/Mosu_/article/details/101426562
*/
function loop(n,M)
{
    let a,m=0,number=0;
    let i,j;
    for(j=0;j<n;j++)
    {
        a[j]=(j+1);
    }
    let d = 0;
    for(i=0;i<n;i++)
    {
        if(a[i]>0)
        {
            m++;
            if(m==M)
            {
                if(d >= 1)
                    console.log(" %d",a[i]);
                else
                    console.log("%d", a[i]);
                d++;
                a[i]=0;
                m=0;
                number++;
                if(number==n)
                {
                    break;
                }
                
            }
        }
        if(i==(n-1))
        {
            i=-1;
        }
    }
    // cout << endl;
}