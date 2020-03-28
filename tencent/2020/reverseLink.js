/*
  链表翻转反转
  reference：https://juejin.im/post/5e364ce16fb9a02fe654ba69
*/
function myReverse (linkedList) {
  // 1 拿到传参链表的head
  var head = linkedList.head

  // 2 边界判断 如果头结点是空 或者只有一个结点 那还反转个啥
  if(head === null || head.next === null) return linkedList

  // 3 用三个指针
  var current = head
  var pre = null 
  var next = null
  while(current != null) {
      next = current.next           //获取到当前节点的下一个节点
      current.next = pre          //当前节点的前一个指向上一个节点
      pre = current               //上一个节点赋值为当前节点
      current = next              //当前节点赋值为下一个节点
  }         
  linkedList.head = pre
}