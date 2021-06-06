/**
 * 矩形中的路径
 * [
 *  ["a","b", "c","e"],
 *  ["s","f", "c","s"],
 *  ["a","d", "e","e"]
 * ]
 * abcced
 * 遍历的时候只能上下左右
 * 使用回溯算法，本质就是DFS深度遍历（而这里只需要一个栈，最坏logN），BFS广度遍历需要额外队列所有空间复杂度高些（最坏需要存储N/2个节点）
 */
function rectanglePath(board, word) {
  for (let row = 0; row < board.length; row++) {
    const element = board[row];
    for (let col = 0; col < element.length; col++) {
      if (element[col] === word) {
        return true;
      } else {
        return dfs(board, word, 0, row, col);
      }
    }
  }
}
function dfs(board, word, wordIndex, row, col) {
  if (
    row < 0 ||
    row >= board.length ||
    col < 0 ||
    col >= board[row].length ||
    board[row][col] !== word[wordIndex]
  ) {
    return false;
  }
  if (word.length - 1 === wordIndex) return true;
  const temp = board[row][col];
  board[row][col] = "#";
  // 上右下左
  const res =
    dfs(board, word, wordIndex + 1, row - 1, col) ||
    dfs(board, word, wordIndex + 1, row, col + 1) ||
    dfs(board, word, wordIndex + 1, row + 1, col) ||
    dfs(board, word, wordIndex + 1, row, col - 1);
  board[row][col] = temp;
  return res;
}
const _rectangle = [
  ["a", "b", "c", "e"],
  ["s", "f", "c", "s"],
  ["a", "d", "e", "e"],
];
console.log(rectanglePath(_rectangle, "abcced"));
console.log(rectanglePath(_rectangle, "asas"));
