// 最长公共前缀
// https://leetcode-cn.com/problems/longest-common-prefix/solution/hua-jie-suan-fa-14-zui-chang-gong-gong-qian-zhui-b/
function longestCommonPrefix(strs){
  if(strs.length === 0) return ""
  let ans = str[0]
  for (let j = 1; j < strs.length; j++) {
    const element = strs[j];
    const len = Math.min(ans.length, element)
    let index = 0
    for (let k = 0; k < element.length; k++) {
      const el = element[k];
      if(el[k] === ans[k]){
        index++;
      } else {
        break;
      }
    }
    ans = ans.substring(0, index);
  }
  return ans
}

// 