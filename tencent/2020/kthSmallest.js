/*
  二叉搜索树中第K小的元素, 二叉搜索树的特点是，从小到大 left node right
  怎么遍历树：

深度优先搜索（DFS）
在这个策略中，我们从根延伸到某一片叶子，然后再返回另一个分支。根据根节点，左节点，右节点的相对顺序，DFS 还可以分为前序，中序，后序。

广度优先搜索（BFS）
在这个策略中，我们逐层，从上到下扫描整个树。

  reference： https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/solution/er-cha-sou-suo-shu-zhong-di-kxiao-de-yuan-su-by-le/
*/

/*
通过构造 BST 的中序遍历序列，则第 k-1 个元素就是第 k 小的元素。
  复杂度分析
时间复杂度：O(N)O(N)，遍历了整个树。
空间复杂度：O(N)O(N)，用了一个数组存储中序序列。
*/ 
function inOrder(root, arr=[]){
  if(!root) return arr;
  inOrder(root.left, arr);
  arr.push(root.value);
  inOrder(root.right, arr);
  return arr;
}
function kthSmallest(root, k){
  let arr = inOrder(root, []);
  return arr[k-1];
}

/*
在栈的帮助下，可以将方法一的递归转换为迭代，这样可以加快速度，因为这样可以不用遍历整个树，可以在找到答案后停止。
时间复杂度：\mathcal{O}(H + k)O(H+k)，其中 HH 指的是树的高度，由于我们开始遍历之前，要先向下达到叶，当树是一个平衡树时：复杂度为 \mathcal{O}(\log N + k)O(logN+k)。当树是一个不平衡树时：复杂度为 \mathcal{O}(N + k)O(N+k)，此时所有的节点都在左子树。
空间复杂度：\mathcal{O}(H + k)O(H+k)。当树是一个平衡树时：\mathcal{O}(\log N + k)O(logN+k)。当树是一个非平衡树时：\mathcal{O}(N + k)O(N+k)。
*/ 
function kthSmallest2(root, k){
  let stack=[];
  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }    
    root = stack.pop();
    if(--k===0){
      return root.value;
    }
    root = root.right;
  }
}