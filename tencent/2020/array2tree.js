class TreeNode {
  constructor(data, left, right) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

class Array2Tree {
  constructor() {
    this.list = [];
  }
  creatTree(array) {
    let list = this.list;
    for (let i = 0; i < array.length; i++) {
      let node = new TreeNode(array[i], null, null); //创建结点，每一个结点的左结点和右结点为null
      list.push(node); // list中存着每一个结点
    } // 构建二叉树
    if (list.length > 0) {
      for (let i = 0; i < array.length / 2; i++) {
        // i表示的是根节点的索引，从0开始
        if (list[2 * i + 1] != null) {
          // 左结点
          list[i].left = list[2 * i + 1];
        }
        if (list[2 * i + 2] != null) {
          // 右结点
          list[i].right = list[2 * i + 2];
        }
      }
    }
    return list;
  }

  // 中序遍历
  printInOrderTraverse(node) {
    if(node){      
      this.printInOrderTraverse(node.left);
      console.log(node);
      this.printInOrderTraverse(node.right);
    }
  }

  // 先序遍历
  printPreOrderTraverse(node) {
    if(node){
      console.log(node);
      this.printPreOrderTraverse(node.left);
      this.printPreOrderTraverse(node.right);
    }
  }

  // 后序遍历
  printPastOrderTraverse(node) {
    if(node){      
      this.printPastOrderTraverse(node.left);
      this.printPastOrderTraverse(node.right);
      console.log(node);
    }
  }

  init(arr) {
    console.log("original array is ", arr);
    let treeList = this.creatTree(arr);
    console.log("tree list is ", treeList);
    console.log("-------------");
    this.printPreOrderTraverse(this.list[0]);
    console.log("-------------");
    this.printInOrderTraverse(this.list[0]);
    console.log("-------------");
    this.printPastOrderTraverse(this.list[0]);
  }
}

let demo = new Array2Tree();
demo.init([1, 2, 3, 4, 5, 6, 7, 8, 9]);