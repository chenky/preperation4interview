// 二叉树最大深度 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/er-cha-shu-de-zui-da-shen-du-by-leetcode-solution/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function maxDepth(root){
  if(root === null){
    return 0
  } else {
    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)
    return Math.max(leftDepth, rightDepth) + 1
  }
}