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
