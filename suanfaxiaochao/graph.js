/**
 * leetcode 797题
 * 图的遍历，DFS深度优先遍历
*/

// 记录所有路径
let res = []
function allPathsSourceTarget (graph) {
  let path = []
  console.log('graph', graph)
  traverse(graph, 0, path)
  return res
}
/* 图的遍历框架 */
function traverse (graph, s, path) {

  // 添加节点 s 到路径
  path.push(s)
  console.log('start', s, path)
  let n = graph.length
  if (s == n - 1) {
    // 到达终点        
    res.push([...path])
    path.pop()
    console.log('end', path)
    return
  }

  // 递归每个相邻节点
  for (const v of graph[s]) {
    traverse(graph, v, path)
  }

  // 从路径移出节点 s
  console.log('finsh', path)
  path.pop()
}

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]))