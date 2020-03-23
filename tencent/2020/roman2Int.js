/*
  罗马数字转换成整数
  https://www.cnblogs.com/grandyang/p/4120857.html
  我们也可以每次跟前面的数字比较，如果小于等于前面的数字，先加上当前的数字，
  比如 "VI"，第二个字母 'I' 小于第一个字母 'V'，所以要加1。
  如果大于的前面的数字，加上当前的数字减去二倍前面的数字，
  这样可以把在上一个循环多加数减掉，比如 "IX"，我们在 i=0 时，加上了第一个字母 'I' 的值，
  此时结果 res 为1。当 i=1 时，字母 'X' 大于前一个字母 'I'，这说明前面的1是要减去的，
  而由于前一步不但没减，还多加了个1，所以此时要减去2倍的1，就是减2，
  所以才能得到9，整个过程是 res = 1 + 10 - 2 = 9
*/
function romanToInt(s) {
  let res = 0;
  // let roman2IntMap = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
  let roman2IntMap = {
    'I': 1,   
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  for (let i = 0; i < s.length; ++i) {
    // 如果前一个罗马数字比当前罗马数字大，则res加上当前罗马数字代表的值
    // 否则加上当前的数字减去二倍前面的数字
      if (i == 0 || roman2IntMap[s[i]] <= roman2IntMap[s[i - 1]]) res += roman2IntMap[s[i]];
      else res += roman2IntMap[s[i]] - 2 * roman2IntMap[s[i - 1]];
  }
  return res;
}

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));