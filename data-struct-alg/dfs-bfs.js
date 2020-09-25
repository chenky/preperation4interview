/*
js 中二叉树的深度遍历与广度遍历(递归实现与非递归实现) 深度优先遍历DFS dfs，广度优先遍历BFS bfs
reference: https://www.jianshu.com/p/5e9ea25a1aae
*/
var tree = {
  value: "-",
  left: {
      value: '+',
      left: {
          value: 'a',
      },
      right: {
          value: '*',
          left: {
              value: 'b',
          },
          right: {
              value: 'c',
          }
      }
  },
  right: {
      value: '/',
      left: {
          value: 'd',
      },
      right: {
          value: 'e',
      }
  }
}

// 使用递归的方式
let result = [];
let dfsRecursion = function (node) {
    if(node) {
        result.push(node.value);
        dfsRecursion(node.left);
        dfsRecursion(node.right);
    }
}
dfsRecursion(tree);
console.log(result); 
// ["-", "+", "a", "*", "b", "c", "/", "d", "e"]

// 非递归遍历（利用栈：将遍历到的结点都依次存入栈中，拿结果时从栈中访问）
let dfs = function (nodes) {
  let result = [];
  let stack = [];
  stack.push(nodes);
  while(stack.length) { // 等同于 while(stack.length !== 0) 直到栈中的数据为空
      let node = stack.pop(); // 取的是栈中最后一个j
      result.push(node.value);
      if(node.right) stack.push(node.right); // 先压入右子树
      if(node.left) stack.push(node.left); // 后压入左子树
  }
  return result;
}
console.log( dfs(tree));

/*
广度优先遍历二叉树(层序遍历)是用队列来实现的，广度遍历是从二叉树的根结点开始，自上而下逐层遍历；
在同一层中，按照从左到右的顺序对结点逐一访问。
*/

let result1 = [];
let stack = [tree]; // 先将要遍历的树压入栈
let count = 0; // 用来记录执行到第一层
let bfsRecursion = function () {
    let node = stack[count];
    if(node) {
        result1.push(node.value);
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
        count++;
        bfsRecursion();
    }
}
bfsRecursion();
console.log(result1);
//  ["-", "+", "/", "a", "*", "d", "e", "b", "c"]

function bfs(node) {
  let result = [];
  let queue = [];
  queue.push(node);
  let pointer = 0;
  while(pointer < queue.length) {
      let node = queue[pointer++]; // // 这里不使用 shift 方法（复杂度高），用一个指针代替
      result.push(node.value);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
  }
  return result;
}

console.log( bfs(tree) );
// ["-", "+", "/", "a", "*", "d", "e", "b", "c"] 