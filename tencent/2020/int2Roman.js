/*
  https://www.cnblogs.com/grandyang/p/4123374.html
  数字转换成罗马数字，这次变成了整数转化成罗马数字，基本算法还是一样。由于题目中限定了输入数字的范围 (1 - 3999), 使得题目变得简单了不少。
*/
function int2Roman1(num){
  let res = "";
  let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let str = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  for (let i = 0; i < val.length; ++i) {
      while (num >= val[i]) {
        // 从高位开始遍历，使用贪心算法，直到num值比1还小为止
        // 匹配的话，num值会被减掉val的值，同时res需要追加当前罗马数字组合
          num -= val[i];
          res += str[i];
      }
  }
  return res;
}

function int2Roman2(num){
  let res = "";
  let v1=["", "M", "MM", "MMM"];
  let v2=["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let v3=["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let v4=["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return v1[Math.floor(num / 1000)] + v2[ Math.floor((num % 1000) / 100)] + v3[Math.floor((num % 100) / 10)] + v4[num % 10];
}

console.log(int2Roman1(3));
console.log(int2Roman1(4));
console.log(int2Roman1(9));
console.log(int2Roman1(58));
console.log(int2Roman1(1994));
console.log("--------------")
console.log(int2Roman2(3));
console.log(int2Roman2(4));
console.log(int2Roman2(9));
console.log(int2Roman2(58));
console.log(int2Roman2(1994));
