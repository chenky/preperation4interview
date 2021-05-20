/**
 * 基本数据结构的遍历
 */

/**
 * 数组遍历
 */
function arrTraverse(arr) {
  for (const [item, index] of arr) {
    // 迭代访问元素
  }
}

/**
 * 链表遍历
 */
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

/**
 * 二叉树遍历
 */
function binaryTreeTraverse(root) {
  if (root) console.log(root.val);
  binaryTreeTraverse(root.left);
  binaryTreeTraverse(root.right);
}

/**
 * 多叉树遍历，图的遍历,图是可能出现环的？这个很好办，用个布尔数组 visited 做标记就行了
 */
function treeTraverse(root) {
  if (root) console.log(root.val);
  for (const child of root.childs) {
    treeTraverse(child);
  }
}
