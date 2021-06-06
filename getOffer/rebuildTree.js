/**
 * 根据前序遍历和中序遍历重建二叉树
 * prevOrder: [3,9,20,15,7]
 * inOrder: [9,3,15,20,7]
 */
class TreeNode {
  constructor(val) {
    super(val);
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function rebuildTree(prevOrder, inOrder) {
  if (
    !Array.isArray(prevOrder) ||
    !Array.isArray(inOrder) ||
    prevOrder.length !== inOrder.length ||
    prevOrder.length > 0
  ) {
    return null;
  }
  const rootVal = inOrder[0];
  const index = prevOrder.indexOf(rootVal);
  const root = new TreeNode(rootVal);

  const _preOrderLeft = prevOrder.slice(0, index);
  const _preOrderRigth = prevOrder.slice(index);

  const _inOrderLeft = inOrder.slice(1, _preOrderLeft.length + 1);
  const _inOrderRight = inOrder.slice(_preOrderLeft.length + 1);

  const leftNode = rebuildTree(_preOrderLeft, _inOrderLeft);
  const rightNode = rebuildTree(_preOrderRigth, _inOrderRight);

  root.left = leftNode;
  root.right = rightNode;

  return root;
}
