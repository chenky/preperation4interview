/**
 * 前序遍历和中序遍历还原一颗树
 */
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
