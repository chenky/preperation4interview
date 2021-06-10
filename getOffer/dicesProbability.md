![剑指 Offer 60. n个骰子的点数](asset/dices1.png)
![剑指 Offer 60. n个骰子的点数](asset/dices2.png)

```javascript
/**
剑指 Offer 60. n个骰子的点数
https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/solution/jian-zhi-offer-60-n-ge-tou-zi-de-dian-sh-z36d/
*/
var dicesProbability = function (n) {
  let dp = Array(6).fill(1.0 / 6.0);
  for (let i = 2; i <= n; i++) {
    const tmp = Array(5 * i + 1).fill(0);
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        tmp[j + k] += dp[j] / 6.0;
      }
    }
    dp = tmp;
  }
  return dp;
};
```
