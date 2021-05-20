/**
 * 求二叉树中最大路径和
 */

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
