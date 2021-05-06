/**
 * 1. 动态规划本质上都是求最值
 * 2. 为了得到最值需要穷举
 * 3. 穷举会有大量重复子问题，所以需要备忘录或者dp table来优化穷举
 * 4. 动态规划一定具备最优子结构
 * 5. 需要正确列出状态转移方程，才能争取穷举
 *
 * 重叠子问题，最优子结构，状态转移方程，即动态规划三要素，而状态转移方程最难
 * 明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义。
 *
*/

/**
 * 斐波那契数列的数学形式就是递归的
*/
function fib (n) {
  if (n < 1) return 0
  if (n === 1 || n === 2) return 1
  let prev = 1, current = 1
  for (let index = 3; index <= n; index++) {
    const total = prev + current
    prev = current
    current = total
  }
  return current
}

console.log(fib(5))

/**
 *
*/


/**
 * 多叉树遍历的框架
*/
function traverseTree (root) {
  let childs = root.childs
  for (let index = 0; index < childs.length; index++) {
    const child = array[index]
    traverseTree(child)
  }
}