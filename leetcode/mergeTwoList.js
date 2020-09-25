// 合并两个排序的链表, 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
// https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/solution/
function Node(element){
  this.element = element
  this.next = null
}
function mergeTwoList(node1, node2){
  const dum = new Node(0)
  const current = dum
  while (node1 !== null && node2 !== null) {
    if(node1.element < node2.element){
      current.next = node1
      node1 = node1.next
    } else {
      current.next = node2
      node2 = node2.next
    }
    current = current.next
  }
  current.next = node1 != null ? node1 : node2
  return dum.next
}