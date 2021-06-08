![石头堆游戏](assets/stoneGame.webp)

```javascript
/**
 * 博弈类问题的套路都差不多，下文举例讲解，其核心思路是在二维 dp 的基础上使用元组分别存储两个人的博弈结果。
 * 掌握了这个技巧以后，别人再问你什么俩海盗分宝石，俩人拿硬币, 石头堆游戏，熊拿苹果的问题，
 * 你就告诉别人：我懒得想，直接给你写个算法算一下得了。
 * */
function stoneGame(arr) {
  let dp = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    dp.push([]);
    for (let j = 0; j < n; j++) {
      dp[i][j] = { fir: 0, sec: 0 };
      if (i === j) {
        dp[i][i].fir = arr[i];
      }
    }
  }
  // console.log(dp);
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // console.log("-------", dp);
      let left = arr[i] + dp[i + 1][j].sec;
      let right = arr[j] + dp[i][j - 1].sec;
      if (left > right) {
        dp[i][j].fir = left;
        dp[i][j].sec = dp[i + 1][j].fir;
      } else {
        dp[i][j].fir = right;
        dp[i][j].sec = dp[i][j - 1].fir;
      }
    }
  }
  // console.log(dp);
  return dp[0][n - 1].fir;
}
console.log(stoneGame([3, 9, 1, 2]));
```
