## 最基础的数据结构

- 数组：连续空间，索引访问，所以扩容是个问题，影响性能，最好一次分配好内存，增加和删除需要挪动内存慢，但查找和替换速度快 O(1)
- 链表：不连续空间，通过指针访问元素，所以扩容方便，增加，删除 O(1), 查找替换慢些
- 其他数据结构都是基于上面两种结构实现的
  - 队列，栈，图，散列表，树，堆（完全二叉树）

## 基本数据结构的遍历

- 数组遍历

```javascript
function arrTraverse(arr) {
  for (const [item, index] of arr) {
    // 迭代访问元素
  }
}
```

- 链表遍历

```javascript
class ListNode {
  constructor(val, nextNode) {
    this.val = val;
    this.next = nextNode;
  }
}
function listNodeTraverse(head) {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}
function listNodeTraverseRecursion(head) {
  if (head) console.log(head.val);
  listNodeTraverseRecursion(head.next);
}
```

- 二叉树遍历

```javascript
function binaryTreeTraverse(root) {
  // 前序遍历
  if (root) console.log(root.val);
  binaryTreeTraverse(root.left);
  // 中序遍历
  if (root) console.log(root.val);
  binaryTreeTraverse(root.right);
  // 后序遍历
  if (root) console.log(root.val);
}
```

- 多叉树遍历，图的遍历,图是可能出现环的？这个很好办，用个布尔数组 visited 做标记就行了

```javascript
function treeTraverse(root) {
  if (root) console.log(root.val);
  for (const child of root.childs) {
    treeTraverse(child);
  }
}
```

## 动态规划详解

- 一般是求最值
- 核心就是穷尽得到最值
- 一定存在重叠子问题，通过备忘录或者 dp Table 来优化，实际就是通过缓存（一维，二维，三维等数组）避免重复计算
- 一定有最优子结构，通过子问题最值得到目标最值
- 需要列出正确的状态转移方程
- 明确 base case -> 明确「状态」-> 明确「选择」 -> 定义 dp 数组/函数的含义。

```javascript
// 初始化 base case
dp[0][0][...] = base
// 进行状态转移
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)
```

- 找零钱问题(给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，每种硬币的数量无限，再给一个总金额 amount，问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1 )

```python
def coinChange(coins: List[int], amount: int):
    # 备忘录
    memo = dict()
    def dp(n):
        # 查备忘录，避免重复计算
        if n in memo: return memo[n]
        # base case
        if n == 0: return 0
        if n < 0: return -1
        res = float('INF')
        for coin in coins:
            subproblem = dp(n - coin)
            if subproblem == -1: continue
            res = min(res, 1 + subproblem)

        # 记入备忘录
        memo[n] = res if res != float('INF') else -1
        return memo[n]

    return dp(amount)
```

```java
int coinChange(vector<int>& coins, int amount) {
    // 数组大小为 amount + 1，初始值也为 amount + 1
    vector<int> dp(amount + 1, amount + 1);
    // base case
    dp[0] = 0;
    // 外层 for 循环在遍历所有状态的所有取值
    for (int i = 0; i < dp.size(); i++) {
        // 内层 for 循环在求所有选择的最小值
        for (int coin : coins) {
            // 子问题无解，跳过
            if (i - coin < 0) continue;
            dp[i] = min(dp[i], 1 + dp[i - coin]);
        }
    }
    return (dp[amount] == amount + 1) ? -1 : dp[amount];
}
```

## leetcode 题目

- 求二叉树中最大路径和

```javascript
function binaryTreeMaxSum(root) {
  let ans = Number.MIN_SAFE_INTEGER;
  function _temp(node) {
    if (!node) return 0;
    let left = _temp(node.left);
    let right = _temp(node.right);
    ans = Math.max(left, right);
    return node.val > 0 ? ans + node.val : ans;
  }
}
```

- 前序遍历和中序遍历还原一颗二叉树，还原二叉树

```javascript
function buildTree(preorder, preStart, preEnd, inorder, inStart, inEnd, inMap) {
  if (preStart > preEnd || inStart > inEnd) return null;

  let root = new TreeNode(preorder[preStart]);
  inRoot = inMap.get(root.val);
  numsLeft = inRoot - inStart;

  root.left = buildTree(
    preorder,
    preStart + 1,
    preStart + numsLeft,
    inorder,
    inStart,
    inRoot - 1,
    inMap
  );
  root.right = buildTree(
    preorder,
    preStart + numsLeft + 1,
    preEnd,
    inorder,
    inRoot + 1,
    inEnd,
    inMap
  );
  return root;
}
```

-
