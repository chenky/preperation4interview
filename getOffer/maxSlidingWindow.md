![剑指 Offer 59 - I. 滑动窗口的最大值](asset/maxSlidingWindow.png)

```javascript
/**
 * 剑指 Offer 59 - I. 滑动窗口的最大值（单调队列，清晰图解）
 * https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/
 */
var maxSlidingWindow = function (nums, k) {
  const len = nums.length;
  if (len === 0 || k === 0) return [];
  const res = [],
    list = [];
  for (let i = 1 - k, j = 0; j < len; i++, j++) {
    // 形成窗口后，对比list第一个元素是不是等于窗口左移前的第一个元素，是就删除deque中第一个元素
    if (i > 0 && nums[i - 1] === list[0]) {
      list.shift();
    }
    // 新进入的元素nums[j],从后往前遍历，比nums[j]小的都删除，保持 deque 递减
    while (list.length && nums[j] > list[list.length - 1]) {
      list.pop();
    }
    // 新进入的元素nums[j]，此时的list是递减队列
    list.push(nums[j]);
    // console.log(list)
    // 形成窗口后，记录窗口最大值
    if (i >= 0) {
      res.push(list[0]);
    }
  }
  return res;
};
```
